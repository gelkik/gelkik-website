from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates 

db = SQLAlchemy()

class Email(db.Model, SerializerMixin):
    __tablename__ = 'emails'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String, unique=True,nullable = False)
    comment = db.Column(db.String)

    @validates('name','email','comment')
    def validate_attributes(self,key,string):
        if key == 'name':
            if type(string) != str:
                raise ValueError('Not a valid name.')
            return string
        if key == 'email':
            if type(string) != str or '@' not in string:
                raise ValueError('Not valid email') 
            return string
        if key == 'comment':
            if type(string) != str or len(string) > 250:
                raise ValueError('Only 250 characters allowed!') 
            return string

    def __repr__(self):
        return f'Customer: {self.name}, age: {self.age}, email: {self.email}'