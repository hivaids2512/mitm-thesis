import os
from flask import Flask
path = os.path.abspath(__file__)
dir_path = os.path.dirname(path)
import sys
sys.path.insert(0, dir_path)

def create_app(test_config=None):
    from . import routes
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    routes.init_app(app)
    return app
    