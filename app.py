from flask import Flask, request, jsonify
import flask_cors

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
