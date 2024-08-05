from flask import Flask, request, jsonify
import flask_cors
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
