export class BankAccount {
  #owner;
  #balance;
  #isBlocked;
  #deleted = false;

  constructor(owner, balance, isBlocked) {
    this.#owner = owner;         
    this.#balance = balance;     
    this.#isBlocked = isBlocked; 
  }

  #check() {
    if (this.#deleted) throw new Error('Счёт удалён');
  }

  get owner() { this.#check(); return this.#owner; }
  set owner(value) { this.#check(); this.#owner = value; }

  get balance() { this.#check(); return this.#balance; }
  set balance(value) {
    this.#check();
    if (value < 0) return console.log('Баланс не может быть меньше 0');
    this.#balance = value;
  }

  get isBlocked() { this.#check(); return this.#isBlocked; }
  set isBlocked(value) { this.#check(); this.#isBlocked = value; }

  #block() {
    this.#isBlocked = true;
  }

  blockAccount() {
    this.#check();
    this.#block();
    console.log(`Счёт ${this.#owner} заблокирован`);
  }

  show() {
    this.#check();
    console.log(`Владелец: ${this.#owner}, баланс: ${this.#balance}, заблокирован: ${this.#isBlocked}`);
  }

  delete() {
    this.#owner = null;
    this.#balance = null;
    this.#isBlocked = null;
    this.#deleted = true;
  }

  copy() {
    return this;
  }

  static clone(acc) {
    return new BankAccount(acc.owner, acc.balance, acc.isBlocked);
  }
}
