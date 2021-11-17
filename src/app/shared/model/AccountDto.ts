

export class AccountDto{

  constructor(number : string|number, agency : string|number){
    this.number = number,
    this.agency = agency;
  }

  number : string|number;
  agency : string|number;
}
