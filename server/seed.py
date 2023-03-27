#!/usr/bin/env python3

import email
from random import choice as rc, randint

from faker import Faker

from app import app
from models import db, Email


fake = Faker()


def make_emails():

    Email.query.delete()
    
    emails = []

    for i in range(3):
        email = Email(
            name=fake.name(),
            email= fake.email(),
            comment=fake.text(max_nb_chars=250)
        )
        emails.append(email)

    db.session.add_all(emails)
    db.session.commit()        

if __name__ == '__main__':
    with app.app_context():
        make_emails()