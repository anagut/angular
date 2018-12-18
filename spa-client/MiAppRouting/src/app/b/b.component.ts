import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/Pedido';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  pedidos: Pedido[] = null;

  constructor() { }

  ngOnInit() {
    this.pedidos = [
      new Pedido (1, "Pedido 1", 10),
      new Pedido (2, "Pedido 2", 20),
      new Pedido (3, "Pedido 3", 30),
      new Pedido (4, "Pedido 4", 40),
    ]
  }

}
