import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdministrativeService } from '../service/administrative.service';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { Account } from '../shared/model/Account';
import { Client } from '../shared/model/Client';
import { CreateAccountDto } from '../shared/model/CreateAccountDto';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  public createAccountForm : FormGroup;
  public responseMessage: string;

  constructor(private formBuilder : FormBuilder,
     private administrativeService : AdministrativeService, private dialog : MatDialog) {}

  ngOnInit(): void {
    this.createAccountForm = this.formBuilder.group({
      number: ['',Validators.required, Validators.pattern('\d+')],
      agency: ['',Validators.required, Validators.pattern('\d+')],
      name: ['',Validators.required],
      document: ['',Validators.required, Validators.pattern('\d+'), Validators.minLength(11), Validators.maxLength(11)],
      password: ['',Validators.required, Validators.minLength(4), Validators.maxLength(4)],
      telephones: ['',Validators.required]
    })
  }

  createAccount(){
    let accountDto = new Account(this.createAccountForm.value.number, this.createAccountForm.value.agency);
    let clientDto = new Client(this.createAccountForm.value.name, this.createAccountForm.value.document,
      this.createAccountForm.value.password, [this.createAccountForm.value.telephones]);
    let createAccountDto = new CreateAccountDto(accountDto,clientDto);

    this.administrativeService.createAccount(createAccountDto).subscribe(
      (response) => {
        if(response == true){
          this.dialog.open(DialogComponent, {data: {title: 'Sucesso', message: 'Conta criada com sucesso!'}});
        }else{
          this.dialog.open(DialogComponent, {data: {title: 'Erro', message: 'Erro na criação da conta!'}});
        }
      }, error => {
        this.dialog.open(DialogComponent, {data: {title: 'Erro', message: 'Erro na criação da conta!'}});
      });

      this.createAccountForm.reset();
  }

}
