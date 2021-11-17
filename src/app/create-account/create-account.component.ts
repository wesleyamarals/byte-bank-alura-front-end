import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministrativeService } from '../service/administrative.service';
import { AccountDto } from '../shared/model/AccountDto';
import { ClientDto } from '../shared/model/ClientDto';
import { CreateAccountDto } from '../shared/model/CreateAccountDto';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  public createAccountForm : FormGroup;
  public responseMessage: string;

  constructor(private formBuilder : FormBuilder, private administrativeService : AdministrativeService) {}

  ngOnInit(): void {
    this.createAccountForm = this.formBuilder.group({
      number: ['',Validators.required],
      agency: ['',Validators.required],
      name: ['',Validators.required],
      document: ['',Validators.required],
      password: ['',Validators.required],
      telephones: ['',Validators.required],
    })
  }

  createAccount(){
    let accountDto = new AccountDto(this.createAccountForm.value.number, this.createAccountForm.value.agency);
    let clientDto = new ClientDto(this.createAccountForm.value.name, this.createAccountForm.value.document,
      this.createAccountForm.value.password, [this.createAccountForm.value.telephones]);
    let createAccountDto = new CreateAccountDto(accountDto,clientDto);

    this.administrativeService.createAccount(createAccountDto).subscribe(
      (response) => this.responseMessage = response);
      this.createAccountForm.reset();
  }

}
