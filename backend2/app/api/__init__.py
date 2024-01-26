from flask import Blueprint

# Create the api Blueprint
api = Blueprint('api', __name__)

# Import views to ensure they are registered with the Blueprint
from . import views
