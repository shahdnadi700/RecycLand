import { Routes } from '@angular/router';
import { AddNewTypeComponent } from './add-new-type/add-new-type.component';
import { PricesComponent } from './prices/prices.component';
import { LandsharesComponent } from './landshares/landshares.component';
import { ScrapPricesComponent } from './pages/scrap-prices/scrap-prices.component';
import { ControlComponent } from './control/control.component';
import { UsersMangmentComponent } from './users-mangment/users-mangment.component';
import { AgentsMangmentComponent } from './agents-mangment/agents-mangment.component';
import { BalanceComponent } from './balance/balance.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RequestesComponent } from './requestes/requestes.component';
import { LogoutComponent } from './logout/logout.component';


export const routes: Routes = [{
path:"ScrapPrices",
component:ScrapPricesComponent
}, 
{
path:"landshares",
component:LandsharesComponent
}, 

{
    path:"control",
    component:ControlComponent
    } ,

{
   path:"usermanagement",
    component:UsersMangmentComponent
    } ,

{
    path:"agentmanagement",
    component:AgentsMangmentComponent
    } ,

{
    path:"balance",
    component:BalanceComponent
    } ,

{
    path:"notifications",
    component:NotificationsComponent
    } ,

{
    path:"requestes",
    component:RequestesComponent
    } , 

    {
        path:"logout",
        component:LogoutComponent
        }   
       
];
