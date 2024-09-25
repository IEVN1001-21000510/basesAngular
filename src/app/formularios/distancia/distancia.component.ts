import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!: FormGroup;
  distancia: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      x1: new FormControl('', Validators.required),
      y1: new FormControl('', Validators.required),
      x2: new FormControl('', Validators.required),
      y2: new FormControl('', Validators.required)
    });
  }

  calcularDistancia(): void {
    const x1 = this.formulario.get('x1')?.value;
    const y1 = this.formulario.get('y1')?.value;
    const x2 = this.formulario.get('x2')?.value;
    const y2 = this.formulario.get('y2')?.value;

    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    this.distancia = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  }
}
