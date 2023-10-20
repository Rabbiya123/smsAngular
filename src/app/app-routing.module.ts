import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentSignupComponent } from './agent-signup/agent-signup.component';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { AgentHomeComponent } from './agent-home/agent-home.component';
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
