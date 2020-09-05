class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.checkingAcct = BankAccount(0, 0)
        self.savingsAcct = BankAccount(0.05, 0)

    def make_deposit(self, which_acct):
        if which_acct == "checkings":
            self.checkingAcct.deposit(amount)
        self.account_balance += amount
        return self

    def make_withdrawal(self, which_amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self, which_acct):
        print(f"User:{self.name}, Balance: ${self.account_balance}")
        return self

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        return self


class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        print(f"depositing ${amount}...")
        self.balance += amount
        return self

    def withdrawal(self, amount):
        if self.balance >= amount:
            print(f"Withdrawaling $-{amount}")
            self.balance -= amount
        else:
            print(f"Insufficient Funds,(Loser), deducting $5")
            self.balance -= 5
        return self

    def display_info(self):
        print(f"Account Balance: ${self.balance}")
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance = (self.int_rate * self.balance) + self.balance
        return self



user1 = User("John", "john@gmail.com")
user2 = User("Robert", "robert@gmail.com")
user3 = User("Mike", "mike@gmail.com")

account1 = BankAccount(0.035, 0)
account1.deposit(500).deposit(500).deposit(1200).display_info().withdrawal(
    750).display_info().yield_interest().display_info()
print("*"*100)
print("*"*100)
account2 = BankAccount(0.05, 0)
account1.deposit(6000).deposit(6000).display_info().withdrawal(750).withdrawal(
    750).withdrawal(750).withdrawal(750).display_info().yield_interest().display_info()



print(user1.checkingAcct.balance)