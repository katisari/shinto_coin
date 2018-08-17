import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent} from './details/details.component'
import { LedgerComponent } from './ledger/ledger.component';
import { SellBuyComponent } from './sell-buy/sell-buy.component';
import { MineComponent } from './mine/mine.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'mine_coins', component: MineComponent},
  {path: 'buy-sell/:option', component: SellBuyComponent},
  {path: 'browse', component: LedgerComponent},
  {path: 'transaction/:id', component: DetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
