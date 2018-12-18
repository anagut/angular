import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Angular';
  nombre:string= 'Ana';
  edad:number = 25;

  getName():string{
    return this.nombre+" "+this.title+" "+this.edad;
  }
}
