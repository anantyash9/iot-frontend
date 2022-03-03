import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from '../app/components/landing/landing.component';
import {InterviewSelectionComponent} from '../app/components/interview-selection/interview-selection.component';
import {IntroComponent} from '../app/components/intro/intro.component';
import {OutroComponent} from '../app/components/outro/outro.component';
import {InterviewQuestionComponent} from '../app/components/interview-question/interview-question.component';
import {InterviewResultComponent} from '../app/components/interview-result/interview-result.component'
import {InterviewdetailsComponent} from '../app/components/interviewdetails/interviewdetails.component'
import { RegisterComponent } from './components/register/register.component';
import { CaptureComponent } from './components/capture/capture.component';
import { AttendenceViewComponent } from './components/attendence-view/attendence-view.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';


const routes: Routes = [{ path: '', component: LandingComponent },
{ path: 'admin', component: AdminViewComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'capture', component: CaptureComponent },
{ path: 'attendence', component: AttendenceViewComponent },
{ path: 'interviewintro', component: IntroComponent },
{ path: 'interviewoutro', component: OutroComponent },
{ path: 'interviewquestion', component: InterviewQuestionComponent },
{ path: 'interviewresults', component: InterviewResultComponent },
{path: 'interviewdetails', component:InterviewdetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
