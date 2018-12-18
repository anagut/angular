import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usuarios:User[] = [
    new User (1, 'Pepe', 'p@p.es', 23),
    new User (2, 'Federica', 'f@f.es', 31),
    new User (3, 'Juan', 'j@j.es', 46),
    new User (4, 'Luisa', 'l@l.es', 38),
  ]

  getUsuario():User[]{
    return this._usuarios;
  }

  constructor() { }
}
