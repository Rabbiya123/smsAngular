import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentSignupComponent } from './agent-signup/agent-signup.component';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { AgentHomeComponent } from './agent-home/agent-home.component';
import { AgentChatComponent } from './agent-chat/agent-chat.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { Socket } from 'socket.io-client';
const routes: Routes = [
  {
    path: 'agent-signup',
    component: AgentSignupComponent,
  },
  {
    path: 'agent-login',
    component: AgentLoginComponent,
  },
  {
    path: 'agent-home',
    component: AgentHomeComponent,
  },
  {
    path: 'agent-chat',
    component: AgentChatComponent,
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
