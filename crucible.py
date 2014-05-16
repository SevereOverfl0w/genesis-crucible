from flask import Flask
from flask.ext.classy import FlaskView
from flask.json import jsonify

app = Flask(__name__)

# A key/value store.
store = {
        "title": "Welcome to Crucible Network!",
        "welcomemsg": "We are an amazing minecraft network!",
        "name": "Crucible Network",
        "ip": "cru.ci",
}

class StoreView(FlaskView):
    def index(self):
        return jsonify(store)

StoreView.register(app)
