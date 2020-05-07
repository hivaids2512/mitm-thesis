from flask import (Blueprint, flash, g, redirect, render_template, request, session, url_for)
from flask import jsonify
prediction_bp = Blueprint('prediction', __name__, url_prefix='/predict')
from ..services.tree import decision_tree
from ..services.forest import random_forest
# print decision_tree.predict('s')

@prediction_bp.route('/tree', methods=('GET', 'POST'))
def decision_tree_controller():
  content = request.get_json(silent=False)
  return jsonify(decision_tree.predict(content))

@prediction_bp.route('/forest', methods=('GET', 'POST'))
def random_forest_controller():
  content = request.get_json(silent=False)
  return jsonify(random_forest.predict(content))
