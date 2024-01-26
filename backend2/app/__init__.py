from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('../config.py', silent=True)
    CORS(app)

    from app.api.views import api
    app.register_blueprint(api, url_prefix='/api')

    return app
