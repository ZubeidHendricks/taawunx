import blockchain

class CharitySystem:
    """
    A system for managing charities and distributing zakat.
    """
    def __init__(self):
        self.approved_charities = {}

    def add_charity(self, charity_id, charity_name):
        """
        Add a charity to the system.

        Args:
            charity_id (str): The unique ID of the charity.
            charity_name (str): The name of the charity.
        """
        self.approved_charities[charity_id] = charity_name

    def distribute_zakat(self, zakat_amount):
        """
        Distribute zakat to approved charities.

        Args:
            zakat_amount (float): The amount of zakat to distribute.
        """
        # distribute zakat to approved charities
        for charity_id, charity_name in self.approved_charities.items():
            blockchain.store_zakat_distribution(charity_id, zakat_amount)
            self.send_zakat_to_charity(charity_id, zakat_amount)
    def send_zakat_to_charity(self, charity_id, zakat_amount):
        """
        Send zakat to a charity using blockchain.

        Args:
            charity_id (str): The ID of the charity.
            zakat_amount (float): The amount of zakat to send.
        """
        # send zakat to charity using blockchain
        blockchain.send_zakat(charity_id, zakat_amount)
