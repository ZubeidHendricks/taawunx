import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

from reputation_system import ReputationSystem

class MatchingAlgorithm:
    def __init__(self):
        self.model = RandomForestClassifier()
        self.reputation_system = ReputationSystem()

    def load_data(self, file_path):
        self.data = pd.read_csv(file_path)

    def train(self, X, y):
        self.model.fit(X, y)

    def predict(self, X):
        return self.model.predict(X)

    def evaluate(self, X, y):
        accuracy = self.model.score(X, y)
        print(f"Model accuracy: {accuracy:.3f}")

    def update_model(self, new_X, new_y):
        self.data = pd.concat([self.data, pd.DataFrame(new_X)], ignore_index=True)
        self.model.fit(self.data.drop('target', axis=1), self.data['target'])
