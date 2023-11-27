import flask

from lamps import app, db
from lamps.models import Lamp


@app.route("/lamps", methods=["GET"])
def list_all_lamps():
    lamps = db.session.query(Lamp).all()
    lamps = list(map(lambda lamp: lamp.to_dict(), lamps))

    return jsonify(lamps)


@app.route("/lamps", methods=["POST"])
def create_lamp():
    body = flask.request.get_json()
    lamp = Lamp(
        name=body["name"],
        image_url=body["image_url"],
    )

    db.session.add(lamp)
    db.session.commit()

    return jsonify({})


@app.route("/lamps/<int:lamp_id>")
def get_lamp(lamp_id: int):
    lamp = db.get_or_404(Lamp, lamp_id)

    return jsonify(lamp.to_dict())


def jsonify(response):
    response = flask.jsonify(response)
    response.headers.add("Access-Control-Allow-Origin",
                         "http://localhost:3000")

    return response
