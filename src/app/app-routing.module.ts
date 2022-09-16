import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PricingComponent } from './pages/pricing/pricing.component';
import { HeaderComponent } from './shader/header/header.component';


const app_routes:Routes = [
    { path: '', component:HeaderComponent},
    { path: 'pricing', component:PricingComponent},
    { path: '**', pathMatch:'full',redirectTo:''},

]


@NgModule({

    imports:[
        RouterModule.forRoot(app_routes)
    ],
    exports:[
        RouterModule
    ]

})

 export class AppRoutingModule{

}