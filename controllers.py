from flask import render_template,request,redirect
from models import *
from forms import CardForm, StoryForm, NewsForm
from upload import save_file
from app import app
from extensions import db
import requests
import xml.etree.ElementTree as ET

@app.route('/')
def index():
    story = Story.query.all()
    card = Cards.query.all()
    currency = ForeignCurrency.query.all()
    news = News.query.all()
    return render_template('index.html',story=story,cards=card,currency=currency,news=news)



@app.route('/cards/')
def card():
    card = Cards.query.all()
    story = Story.query.all()
    return render_template('card.html',cards=card,story=story, page_name='cards')


@app.route("/loans/")
def credits():
    card = Cards.query.all()
    story = Story.query.all()
    return render_template('kredit.html',page_name='credits',cards=card,story=story,)

@app.route('/add-card/', methods=['GET', 'POST'])
def addcard():
    form = CardForm()
    
    if request.method == 'POST':
        print('post')
        if form.validate:
            card_title = form.title.data
            card_desc = form.description.data
            card_term = form.term.data
            card_currency = form.currency.data
            card_cashback = form.cashback.data
            image_data = form.image.data
            print(image_data)
            card_image = save_file(image_data)
            card = Cards(card_title,card_desc,card_term,card_currency,card_cashback,card_image)
            card.save()
            print(card)
            return redirect('/cards')
    return render_template('card_add.html', form=form)


@app.route('/add-story/', methods=['GET', 'POST'])
def addStory():
    form = StoryForm()

    if request.method == 'POST':
        if form.validate_on_submit():
            story_tip = form.tip.data
            story_description = form.description.data
            story_image = save_file(form.image.data)
            story_color = form.color.data
            storys = Story(story_tip,story_description,story_image,story_color)
            storys.save()
            return redirect('/cards')
    return render_template('story_add.html', form=form)


@app.route('/valyuta/')
def loadRSS(): 
    url = f'https://www.cbar.az/currencies/{datetime.datetime.now().strftime("%d.%m.%Y")}.xml'
    response = requests.get(url, stream=True)
    tree = ET.fromstring(response.content)
    dom = tree.findall('ValType')

    db.session.query(ForeignCurrency).delete()
    db.session.commit()

    for attr_type in dom:
        name = attr_type.get('Type')
        if name == 'Xarici valyutalar':
            valute = attr_type.findall('Valute')
            for code in valute:
                code_name = code.get('Code')
                if code_name == 'USD' or code_name == "AZN" or code_name == "EUR":
                    nominal = code.find('Nominal').text
                    name = code.find('Name').text
                    course = code.find('Value').text
                    currency = ForeignCurrency(code_name, nominal, name, course)
                    currency.save()
    return redirect('/cards')


@app.route('/add-news/', methods=['GET', 'POST'])
def addnews():
    form = NewsForm()

    if request.method == 'POST':
        if form.validate_on_submit():
            news_title = form.title.data
            news = News(news_title)
            news.save()
    return render_template('news_add.html', form=form)