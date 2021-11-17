import {AccountDto} from './AccountDto'
import { ClientDto } from './ClientDto';

export class CreateAccountDto{

  constructor(accountDto: AccountDto, clientDto : ClientDto){
    this.accountDto = accountDto;
    this.clientDto = clientDto;
  }

  accountDto: AccountDto;
  clientDto : ClientDto
}
