import blockchain

class ReputationSystem:
    def __init__(self):
        self.reputation_scores = {}

    def rate_sme(self, sme_id, rating):
        if sme_id in self.reputation_scores:
            self.reputation_scores[sme_id] = (self.reputation_scores[sme_id] + rating) / 2
        else:
            self.reputation_scores[sme_id] = rating
        blockchain.store_reputation_score(sme_id, self.reputation_scores[sme_id])

    def get_reputation(self, sme_id):
        return self.reputation_scores.get(sme_id, 0)
