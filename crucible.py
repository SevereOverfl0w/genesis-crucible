from flask import Flask, render_template, request
from flask.ext.classy import FlaskView
from flask.json import jsonify

app = Flask(__name__)
app.config['DEBUG'] = True 

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
    def post(self):
        new = request.get_json(force=True)
        print new
        for key, value in new.iteritems():
            store[key] = value
        return jsonify(store)


StoreView.register(app)

@app.route('/')
def index():
    return render_template('index.html')
