import {Account} from './Account'
import { Client } from './Client';

export class CreateAccountDto{

  constructor(account: Account, client : Client){
    this.account = account;
    this.client = client;
  }

  account: Account;
  client : Client;
}
