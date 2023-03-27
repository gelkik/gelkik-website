#!/usr/bin/env python3
import ipdb
from app import app
from models import db, Email



if __name__ == '__main__':
    with app.app_context():
        import ipdb; ipdb.set_trace()