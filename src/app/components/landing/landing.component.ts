import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "keycloak-angular";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public innerWidth: any;
  public innerHeight: any;
  public color: any;
  constructor(private keycloakservice:KeycloakService) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.color = "#383838";
    
  }
  
}
