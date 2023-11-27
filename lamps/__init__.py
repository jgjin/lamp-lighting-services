from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy.orm import DeclarativeBase

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://127.0.0.1:5432/lamps"

cors = CORS(app, resources={"/lamps/*": {"origins": "http://localhost:3000"}})


class Base(DeclarativeBase):
    pass


db = SQLAlchemy(model_class=Base)
db.init_app(app)

import lamps.models
import lamps.routes

with app.app_context():
    db.create_all()
