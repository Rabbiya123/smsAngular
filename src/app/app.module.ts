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
import { AgentChatComponent } from './agent-chat/agent-chat.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { Socket } from 'socket.io-client';
@NgModule({
  declarations: [
    AppComponent,
    AgentSignupComponent,
    AgentLoginComponent,
    AgentHomeComponent,
    AgentChatComponent,
    UserDashboardComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
