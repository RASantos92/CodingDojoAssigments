class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f"User:{self.name}, Balance: ${self.account_balance}")
        return self

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount        
        other_user.account_balance += amount
        return self

user1 = User("John", "john@gmail.com")
user2 = User("Robert", "robert@gmail.com")
user3 = User("Mike", "mike@gmail.com")

# print(user1.name, user1.email)
user1.make_deposit(500).make_deposit(100).make_deposit(100).make_withdrawal(50).display_user_balance()

user2.make_deposit(1000).make_deposit(500).make_withdrawal(100).make_withdrawal(50).display_user_balance()

user3.make_deposit(12000).make_withdrawal(4000).make_withdrawal(175).make_withdrawal(8000).display_user_balance()

user2.transfer_money(user3, 500).display_user_balance()
user3.display_user_balance()





