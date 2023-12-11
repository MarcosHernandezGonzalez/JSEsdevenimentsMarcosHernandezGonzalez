import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-esdeveniments',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './esdeveniments.component.html',
  styleUrl: './esdeveniments.component.css'
})
export class EsdevenimentsComponent {
  azul() {
    // @ts-ignore
    document.getElementById("body").style.backgroundColor = "blue"
  }
  taronja() {
    // @ts-ignore
    document.getElementById("body").style.backgroundColor = "orange"
  }
  teclaP = ' ';
  llistaTecla: string[] = []
  tecla(event: KeyboardEvent) {
    this.teclaP = event.key.toUpperCase();
    this.llistaTecla.push(this.teclaP)
    let llista = document.getElementById("llista")!

    // @ts-ignore
    llista.innerHTML = this.llistaTecla
  }
  noTecla() {
    this.teclaP = ' '
  }
  num = 0
  suma() {
    this.num++
  }
  reset() {
    this.num = 0
  }
  text = '';
  mostra = false
  comp() {
    this.mostra = this.text === 'QWERTY'
    let iframe = document.getElementById('iframe')
    if(this.mostra) {
        // @ts-ignore
        iframe.setAttribute('src', 'https://www.youtube.com/embed/RCA3EfKUJMw');
    }
  }
  nom = "";
  cognom = "";
  nomCognom = "";
  concatena() {
    this.nomCognom = this.nom + this.cognom
  }
}
