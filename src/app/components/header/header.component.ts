import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor() { }

  name: string | null = localStorage.getItem("nomeUsuario");

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }



}
