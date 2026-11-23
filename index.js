import { SavingsAccount } from './SavingsAccount.js';

const accounts = [
  new SavingsAccount('Конопелько Анастасия', 1500, false, 7),
  new SavingsAccount('Иванов Иван', 300, true, 5),
];

accounts.forEach(acc => acc.show());

const ref = accounts[0].copy();
console.log('copy:', ref === accounts[0]);  

const cl = SavingsAccount.clone(accounts[0]);
console.log('clone:', cl === accounts[0]);   

accounts[0].blockAccount();

cl.delete();
try {
  cl.show();
} catch (e) {
  console.log(e.message); 
}
