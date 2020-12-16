import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private keycloak: KeycloakService) { }

  ngOnInit(): void {
  }
  logout(){
    console.log("logout called");
    this.keycloak.logout();
  }

}
