from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from flask_wtf.file import FileField, FileRequired
from wtforms.validators import DataRequired, Length

class CardForm(FlaskForm):
    title = StringField(label='Card Title', validators=[DataRequired(), Length(min=3,max=100)])
    description = TextAreaField(label='Card Description')
    term = StringField(label='Card Term', validators=[DataRequired()])
    currency = StringField(label='Card Currency', validators=[DataRequired()])
    cashback = StringField(label='Card Cashback')
    image = FileField(label='Card Image', validators=[FileRequired()])

class StoryForm(FlaskForm):
    tip = StringField(label='Story Type', validators=[DataRequired(), Length(min=3,max=100)])
    description = TextAreaField(label='Story Description')
    image = FileField(label='Story Image', validators=[FileRequired()])
    color = StringField(label='Story Backgrond-Color', validators=[DataRequired(), Length(min=3,max=7)])

class NewsForm(FlaskForm):
    title = StringField(label='News Title', validators=[DataRequired(), Length(min=3,max=100)])