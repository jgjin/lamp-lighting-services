from http import HTTPStatus

import flask

from lamps import app, db
from lamps.models import Lamp


@app.route("/lamps", methods=["GET"])
def list_all_lamps():
    lamps = db.session.query(Lamp).all()
    lamps = list(map(lambda lamp: lamp.to_dict(), lamps))

    return flask.jsonify(lamps)


@app.route("/lamps", methods=["POST"])
def create_lamp():
    body = flask.request.get_json()
    lamp = Lamp(
        name=body["name"],
        image_url=body["imageUrl"],
    )

    db.session.add(lamp)
    db.session.commit()

    return flask.jsonify({}), HTTPStatus.CREATED


@app.route("/lamps/<int:lamp_id>")
def get_lamp(lamp_id: int):
    lamp = db.get_or_404(Lamp, lamp_id)

    return flask.jsonify(lamp.to_dict())
