from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///lamps.sqlite"

db = SQLAlchemy()
db.init_app(app)

import lamps.routes

with app.app_context():
    db.create_all()
