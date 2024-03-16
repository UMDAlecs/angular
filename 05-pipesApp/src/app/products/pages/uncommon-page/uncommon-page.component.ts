import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Alejandro';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male':'invitarlo',
    'female':'invitarla',
  }

  changeClient(): void {
    this.name = 'Melissa'
    this.gender = 'female'
  }

  //i18nPlural and slice
  public clients: string[] = ['Alejandro','Melissa','Carolina','Martin','Fernando','Raul','Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient():void {
    this.clients.shift();
  }

  // keyvalue and json
  public person = {
    name: 'Alejandro',
    age : 18,
    address: 'Sinaloa, Mexico'
  }


  // async
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap: ', value))
  );

  public promiseValue = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa')
      console.log('Tenemos data en la promesa');
  }, 3500);
  });

}
