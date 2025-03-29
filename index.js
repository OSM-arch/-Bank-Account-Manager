class BankAccount {
    #balance;
    #name;

    constructor (name) {
        this.#name = name;
        this.#balance = 0;
    }

    setName (newName) {
        this.#name = newName;
    }
    getName () {return this.#name;}

    setBalance (newBalance) {
        this.#balance = newBalance;
    }
    getBalance () {return this.#balance;}

    deposit (amount) {
        this.#balance += amount;
    }

    withdraw (amount, message) {
        if (amount <= this.#balance) {
            message.textContent = "";
            this.#balance -= amount;
        }
        else {
            return message.textContent = "Insufficient funds!";
        }
    }
}

let displayBalance = document.getElementById('displayBalance');
let InsufficientMessage = document.getElementById('InsufficientMessage');
let transactionList = document.getElementById('transactionList');

var object = new BankAccount();

function createAccount() {
    let accountName = document.getElementById('accountName').value;
    object = new BankAccount(accountName);
    
    document.getElementById('displayName').textContent = object.getName();

    let hiddens = document.getElementsByClassName('hidden');
    for (i of hiddens) i.style.display = "block";
    document.getElementById('accountControls').style.display = "none";
}


function Deposit() {
    let amountInput = Number(document.getElementById('amountInput').value);
    
    object.deposit(amountInput);

    InsufficientMessage.textContent = "";
    displayBalance.textContent = object.getBalance();

    let li = document.createElement('li');
    li.textContent = '+ $' + amountInput;
    transactionList.appendChild(li);
}

function Withdraw() {
    let amountInput = Number(document.getElementById('amountInput').value);
    
    object.withdraw(amountInput, InsufficientMessage);
    displayBalance.textContent = object.getBalance();

    if (InsufficientMessage.textContent != 'Insufficient funds!') {
        let li = document.createElement('li');
        li.textContent = '- $' + amountInput;
        transactionList.appendChild(li);
    }
}