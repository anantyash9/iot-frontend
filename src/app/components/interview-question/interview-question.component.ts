import { Component, OnInit, OnDestroy,HostListener } from '@angular/core';
import {InterviewService} from '../../services/interview.service'
import {KeycloakService} from 'keycloak-angular'
import { IoService } from '../../services/io.service';
import {EventService} from '../../services/event.service'
import { MicrophoneComponent } from '../microphone/microphone.component';
import { Router} from '@angular/router';

@Component({
  providers: [MicrophoneComponent],
  selector: 'app-interview-question',
  templateUrl: './interview-question.component.html',
  styleUrls: ['./interview-question.component.css']
})
export class InterviewQuestionComponent implements OnInit {
  color="#d90202"
  heading=''
  subheading=''
  dataloaded=false
  subscription;
  text='';
  question;
  score;
  questionid;
  public innerWidth: any;
  public innerHeight: any;

  constructor(private router: Router,public interviewservice:InterviewService, public keycloakservice:KeycloakService,public ioService: IoService,public eventService:EventService,public microphone: MicrophoneComponent) 
  {this.heading=this.interviewservice.questionset.name+' Interview' ;
  let me=this; 
  console.log('constructer called')
   this.ioService.receiveStream('transcript', function(transcript) {
    console.log(transcript);
    me.text+=" "+transcript;
  });  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.dataloaded=false
    this.subscription=undefined;
    this.text='';
    this.question=undefined;
    this.score=undefined;
    this.questionid=undefined;
    this.interviewservice.getCurrentQuestion().subscribe(data=>{
      let me =this
      console.log(data)
      if(data.status==200){
      this.questionid=data.body.id
      this.subheading=data.body.question.question;
      this.question=data.body.question;
      this.dataloaded=true;
      this.ioService.sendMessage('tts', { text:this.subheading,audio:{language:''} });
      this.subscription= this.eventService.audioStopping.subscribe(() => {
        console.log("audio stopped playing")
        this.microphone.onStart()
      });


      }
      
    },error=>{this.router.navigate(['/interviewoutro'])});

  }
  next(){
    this.subscription.unsubscribe();
    this.microphone.onStop();
    this.microphone.reset();
    if (!this.text.replace(/\s/g, '').length) 
    {
      this.score=0;
      this.interviewservice.updateScore(Number(this.score),this.text,this.questionid).subscribe(()=>{ this.ngOnInit()})
    }
    else{
    this.interviewservice.getsimilarity(this.question.answer,this.text).subscribe(data=>{
      this.score=data.score;
      this.interviewservice.updateScore(Number(this.score),this.text,this.questionid).subscribe(()=>{ this.ngOnInit()})
    });
  }
  }

  @HostListener('unloaded')
  ngOnDestroy() {

  }

}
