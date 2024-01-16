// info-dipendente.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dipendente } from 'src/app/interface/dipendente';

@Component({
  selector: 'app-info-dipendente',
  templateUrl: './info-dipendente.component.html',
  styleUrls: ['./info-dipendente.component.css'],
})
export class InfoDipendenteComponent implements OnInit {
  dipendente!: Dipendente;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      const state = window.history.state;
      this.dipendente = state.dipendente;
    });
  }
}
