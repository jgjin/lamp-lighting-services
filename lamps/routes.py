import flask

from lamps import app, db
from lamps.models import Lamp


@app.route("/lamps", methods=["GET"])
def list_all_lamps():
    all_lamps = [{
        "id": 3,
        "name": "Desk lamp"
    }, {
        "id": 6,
        "name": "Floor lamp"
    }]

    return flask.jsonify(all_lamps)


@app.route("/lamps", methods=["POST"])
def create_lamp():
    body = flask.request.get_json()
    lamp = Lamp(
        name=body["name"],
        image_url=body["image_url"],
    )

    db.session.add(lamp)
    db.session.commit()

    return flask.jsonify({})


@app.route("/lamps/<lamp_id>")
def get_lamp(lamp_id):
    lamp = {"id": 3, "name": "Desk lamp"}

    return flask.jsonify(lamp)
