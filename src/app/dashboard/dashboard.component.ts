import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  ngOnInit() {}

  isMenuShowed = false;
  isLargeScreen = window.innerWidth > 768;

  showMenu() {
    this.isMenuShowed = !this.isMenuShowed;
  }

  //FAR SI CHE CONTROLLI LA DIMENSIONE DEL DISPOSITO SENZA DOVER RICARE LA PAGINA
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth > 768;
  }
}
