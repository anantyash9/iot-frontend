import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Admin=false;
  constructor(private keycloak: KeycloakService) { }

  ngOnInit(): void {
    console.log(this.keycloak.getUsername());
  }
  logout(){
    console.log("logout called");
    this.keycloak.logout();
  }

}
