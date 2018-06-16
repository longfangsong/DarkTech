import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SideBarComponent} from "./side-bar/side-bar.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from './app.component';
import {
  MatSidenav,
  MatSidenavContent,
  MatSidenavContainer,
  MatNavList,
  MatListItem,
  MatRipple,
  MatFormField,
  MatInput,
  MatCard,
  MatCardTitle,
  MatCardContent
} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {BasicMathComponent} from './basic-math/basic-math.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CalculusComponent} from './calculus/calculus.component';
import {CalculationDisplayCardComponent} from './calculation-display-card/calculation-display-card.component';

const routes: Routes = [
  {path: 'basic-math', component: BasicMathComponent},
  {path: 'calculus', component: CalculusComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    SideBarComponent,
    MatNavList,
    MatListItem,
    MatRipple,
    BasicMathComponent,
    MatFormField,
    MatInput,
    CalculusComponent,
    MatCard,
    MatCardTitle,
    MatCardContent,
    CalculationDisplayCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
