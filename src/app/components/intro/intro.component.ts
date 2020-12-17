import { Component, OnInit, OnDestroy,HostListener  } from '@angular/core';
import {InterviewService} from '../../services/interview.service'
import {KeycloakService} from 'keycloak-angular'
import { IoService } from '../../services/io.service';
import {EventService} from '../../services/event.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit , OnDestroy {
  color="#d90202"
  heading;
  subheading;
  subscription;
  name;
  public innerWidth: any;
  public innerHeight: any;
  
  constructor(public interviewservice:InterviewService, public keycloakservice:KeycloakService,public ioService: IoService,public eventService:EventService,private router: Router,) {this.keycloakservice.loadUserProfile().then(data=>{this.heading="Hi "+data.firstName; this.name =data.firstName; } ) }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.subheading="This is an interview for "+this.interviewservice.questionset.name
    this.subscription=this.eventService.audioStopping.subscribe(() => {
      console.log("audio stopped playing")
    });
    let text=this.interviewservice.questionset.intro.replace(/#named#/gi, this.name);
    this.ioService.sendMessage('tts', { text:text,audio:{language:''} });

  }
  start(){
    this.router.navigate(['/interviewquestion'])
  }
  @HostListener('unloaded')
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
