import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CreatepollComponent } from './poll/createpoll/createpoll.component';
import { DeletepollComponent } from './poll/deletepoll/deletepoll.component';
import { EditpollComponent } from './poll/editpoll/editpoll.component';
import { CastvoteComponent } from './vote/castvote/castvote.component';
import { VoteresultsComponent } from './vote/voteresults/voteresults.component';

const routes: Routes = [
  {path: '', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createpoll', component: CreatepollComponent},
  {path: 'deletepoll', component: DeletepollComponent},
  {path: 'editpoll', component: EditpollComponent},
  {path: 'editpoll', component: EditpollComponent},
  {path: 'castvote', component: CastvoteComponent},
  {path: 'voteresults', component: VoteresultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
