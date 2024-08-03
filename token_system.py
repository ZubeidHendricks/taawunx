import blockchain
import reputation_system

class TokenSystem:
    def __init__(self):
        self.token_balances = {}

    def _calculate_zakat(self, token_balance):
        zakat_rate = 0.025  # 2.5% zakat rate
        zakat_amount = token_balance * zakat_rate
        self.charity_system.distribute_zakat(zakat_amount)
        blockchain.update_zakat_distribution(zakat_amount)
        return zakat_amount

    def distribute_profit(self, sme_id, profit):
        # distribute profit based on SME's reputation score
        reputation_score = reputation_system.get_reputation(sme_id)
        token_amount = profit * reputation_score
        zakat_amount = self._calculate_zakat(token_amount)
        token_amount -= zakat_amount
        self.token_balances[sme_id] = token_amount
        blockchain.store_token_balance(sme_id, token_amount)
