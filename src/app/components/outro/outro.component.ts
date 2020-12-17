import { Component, OnInit, OnDestroy,HostListener  } from '@angular/core';
import {InterviewService} from '../../services/interview.service'
import {KeycloakService} from 'keycloak-angular'
import { IoService } from '../../services/io.service';
import {EventService} from '../../services/event.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-outro',
  templateUrl: './outro.component.html',
  styleUrls: ['./outro.component.css']
})
export class OutroComponent implements OnInit {
  color="#d90202"
  heading;
  subheading;
  subscription;
  name;

  constructor(public interviewservice:InterviewService, public keycloakservice:KeycloakService,public ioService: IoService,public eventService:EventService,private router: Router,) 
  { this.keycloakservice.loadUserProfile().then(data=>{this.heading="Thats it "+data.firstName +" !"; this.name =data.firstName; } )}

  ngOnInit(): void {
    this.subheading="Thanks for taking the interview for  "+this.interviewservice.questionset.name
    this.subscription=this.eventService.audioStopping.subscribe(() => {
      console.log("audio stopped playing")
    });
    let text=this.interviewservice.questionset.outro.replace(/#named#/gi,this.name );
    this.ioService.sendMessage('tts', { text:text,audio:{language:''} });

  }
  start(){
    this.router.navigate([''])
  }
  @HostListener('unloaded')
  ngOnDestroy() {
    this.subscription.unsubscribe();
    window.location.reload();
  }
}