import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { profileService }from './profile.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [profileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
