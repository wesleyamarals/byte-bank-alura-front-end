import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateAccountDto } from '../shared/model/CreateAccountDto';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministrativeService {

  apiUrl = 'http://localhost:8080/byteBankAluraAdministrative/createAccount'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public createAccount(createAccountDto : CreateAccountDto): Observable<string>{
    /*return this.httpClient.post<string>(this.apiUrl,createAccountDto,this.httpOptions);*/
    console.log(createAccountDto);
    return of("Sucesso");

  }
}
