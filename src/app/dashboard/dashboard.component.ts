import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isMenuShowed = false;

  // isLarge è true solo se la dimensione della finestra è superiore a 768.
  isLargeScreen = window.innerWidth > 768;

  onClickShowMenu() {
    this.isMenuShowed = !this.isMenuShowed;
  }

  // HostListener "controlla" cosa succede nel component ogni volta che avviene un'azione.In questo caso HostListener andrà in esecuzione ogni volta che la dimensione della finestra viene cambiata.
  @HostListener('window:resize', ['$event']) onWindowResize(resize: any) {
    this.isLargeScreen = resize.target.innerWidth > 768;
  }
  // $event è una variabile che rappresenza l'evento che viene scatenato, in questo caso prende il valore di resize:any e lo da a window:resize
  //Quando usato come parametro in un event binding, quest'ultimo prende i dati dell'evento e li passa al metodo associato.

  // window:resize è un'evento che "controlla" il ridimensionamento della finestra.
  // $event è un placeholder per evento dell'oggetto. Le quadre ([]) indicano che ci sarà da passare un evento all'oggetto come parametro alla funzione onWindowResize
}
