#!/usr/bin/env python
from flask.ext.script import Manager, Server
from crucible import app

manager = Manager(app)
manager.add_command("runserver", Server(host='localhost', port=5566))

if __name__ == "__main__":
    manager.run()
