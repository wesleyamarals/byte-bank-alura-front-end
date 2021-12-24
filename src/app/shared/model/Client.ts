export class Client{

  constructor(name : string, document : string|number, password : string, telephones : string[]|number[] ){
    this.name = name;
    this.document = document;
    this.password = password;
    this.telephones = telephones;
  }

    name : string;
    document : string|number;
    password : string;
    telephones : string[]|number[];
}

