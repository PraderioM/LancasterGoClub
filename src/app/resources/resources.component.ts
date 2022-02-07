import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  mail = 'jabonesconalma@hotmail.com';

  constructor() { }

  ngOnInit(): void {
  }

  getBody(name: string, body: string, clientEmail: string): string {
    console.log(name);
    console.log(body);
    console.log(clientEmail);

    const messageStart = 'Buenos, dias, me llamo ' + name + 'y me pongo en contacto con usted por el siguiente motivo:\n';
    const messageClosure = '\n\nPongase en contacto conmigo a través del siguiente correo electrónico o contestando a este mensaje\n';
    return messageStart + body + messageClosure + clientEmail;
  }
}
