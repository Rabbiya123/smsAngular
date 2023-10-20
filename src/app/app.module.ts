import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgentSignupComponent } from './agent-signup/agent-signup.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { AgentHomeComponent } from './agent-home/agent-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentSignupComponent,
    AgentLoginComponent,
    AgentHomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
