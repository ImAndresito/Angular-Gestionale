import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  ngOnInit() {
    this.toggleNavBarCollapse();
  }

  private toggleNavBarCollapse() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 992) {
      this.addCollapseClass();
    } else {
      this.removeCollapseClass();
    }
  }

  private addCollapseClass() {
    const navbarCollapse = document.getElementById('navbarNavAltMarkup');
    // Metto if (navbarCollapse) per controllare che non sia null o undefined, ma che sia stato trovato l'elemento con ID navbarNav....
    if (navbarCollapse) {
      navbarCollapse.classList.add('collapse');
    }
  }

  private removeCollapseClass() {
    const navbarCollapse = document.getElementById('navbarNavAltMarkup');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('collapse');
    }
  }
}
