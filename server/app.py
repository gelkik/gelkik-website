from dotenv import load_dotenv
load_dotenv()

from flask import Flask, request, jsonify, make_response
from flask_migrate import Migrate
from models  import Email, db
from flask_cors import CORS, cross_origin
from flask_restful import Api, Resource

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

@app.route('/')
def index():
    response_body = {
        "message": "Database for my website!"
    }
    response = make_response(
        response_body,
        200
    )
    return response 

@app.route("/emails", methods=['GET','POST'])
@cross_origin()
def emails():
    emails = Email.query.all()

    if not emails:
        response_body = {
            "message": "Email not in database."
        }
        response = make_response(
            response_body,
            404
        )
        return response

    elif request.method == 'GET':
        emails_dict = [emails.to_dict() for emails in emails]
        response = make_response(
            jsonify(emails_dict),
            200
        )
        return response
    
    elif request.method == 'POST':
        new_email = Email(
            name = request.get_json()['name'],
            email = request.get_json()['email'],
            comment = request.get_json()['comment']
        )
        db.session.add(new_email)
        db.session.commit()

        new_email_dict = new_email.to_dict()
        response = make_response(
            jsonify(new_email_dict),
            201
        )
        return response


# class Home(Resource):
#     def get(self):

#         response_dict = {
#             "message": "RESTful Backend",
#         }

#         response = make_response(
#             response_dict,
#             200,
#         )

#         return response

# api.add_resource(Home, '/')

# class Emails(Resource):
    
#     def get(self):
#         emails = Email.query.all()
#         emails_dict = [email.to_dict() for email in emails]
#         response = make_response(
#             jsonify(emails_dict),
#             200
#         )
#         return response
    
#     def post(self):
#         try:

#             new_email = Email(
#                 name = request.get_json()['name'],
#                 email = request.get_json()['email'],
#                 comment = request.get_json()['comment']
#             )
#             db.session.add(new_email)
#             db.session.commit()

#             new_email_dict = new_email.to_dict()
#             response = make_response(
#                 jsonify(new_email_dict),
#                 201
#             )
#         except ValueError:
#             response = make_response({ "error": "Invalid input" }, 400)
#         return response
        
# api.add_resource(Emails, '/emails')



if __name__ == "__main__":
    app.run(port="5555", debug=True)