from extensions import db
import datetime

class Cards(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    term = db.Column(db.String(255), nullable=False)
    currency = db.Column(db.String(255), nullable=False)
    cashback = db.Column(db.String(255), nullable=True)
    image = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime(), default=datetime.datetime.now())

    def __repr__(self):
        return self.title

    def __init__(self,title,description,term,currency,cashback,image):
        self.title = title
        self.description = description
        self.term = term
        self.currency = currency
        self.cashback = cashback
        self.image = image

    def save(self):
        db.session.add(self)
        db.session.commit()


class Story(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    tip = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    image = db.Column(db.String(255), nullable=False)
    color = db.Column(db.String(7), nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime(), default=datetime.datetime.now())

    def __repr__(self):
        return self.tip

    def __init__(self, tip, description, image, color):
        self.tip = tip
        self.description = description
        self.image = image
        self.color = color

    def save(self):
        db.session.add(self)
        db.session.commit()


class ForeignCurrency(db.Model):
    id =  db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(15), nullable=False)
    nominal = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    value = db.Column(db.Numeric(5, 4), nullable=False)
    created_date = db.Column(db.Date, default=datetime.datetime.utcnow)
    

    def __repr__(self):
        return '<Code Valute: %r>' % self.code
    
    def __init__(self, code, nominal, name, value):
        self.code = code
        self.nominal = nominal
        self.name = name
        self.value = value

    def save(self):
        db.session.add(self)
        db.session.commit()

class News(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime(), default=datetime.datetime.now())

    def __repr__(self):
        return self.title

    def __init__(self, title):
        self.title = title

    def save(self):
        db.session.add(self)
        db.session.commit()


