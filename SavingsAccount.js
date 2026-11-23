import { BankAccount } from './BankAccount.js';

export class SavingsAccount extends BankAccount {
  #rate;

  constructor(owner, balance, isBlocked, rate) {
    super(owner, balance, isBlocked);
    this.#rate = rate;
  }

  get rate() { return this.#rate; }
  set rate(value) { this.#rate = value; }

  blockAccount() {
    console.log('Накопительный счёт нельзя заблокировать');
  }

  show() {
    super.show();
    console.log(`Процент: ${this.#rate}%`);
  }

  delete() {
    super.delete();
    this.#rate = null;
  }

  copy() {
    return this;
  }

  static clone(acc) {
    return new SavingsAccount(acc.owner, acc.balance, acc.isBlocked, acc.rate);
  }
}
