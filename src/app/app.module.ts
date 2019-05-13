import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CreatepollComponent } from './poll/createpoll/createpoll.component';
import { EditpollComponent } from './poll/editpoll/editpoll.component';
import { DeletepollComponent } from './poll/deletepoll/deletepoll.component';
import { CastvoteComponent } from './vote/castvote/castvote.component';
import { VoteresultsComponent } from './vote/voteresults/voteresults.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CreatepollComponent,
    EditpollComponent,
    DeletepollComponent,
    CastvoteComponent,
    VoteresultsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
