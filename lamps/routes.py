import flask

from lamps import app


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
    raise NotImplementedError


@app.route("/lamps/<lamp_id>")
def get_lamp(lamp_id):
    lamp = {"id": 3, "name": "Desk lamp"}

    return flask.jsonify(lamp)
