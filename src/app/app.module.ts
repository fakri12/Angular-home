import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpNavBarComponent } from './component/up-nav-bar/up-nav-bar.component';
import { DownNavBarComponent } from './component/down-nav-bar/down-nav-bar.component';
import { LogosSlideComponent } from './component/logos-slide/logos-slide.component';
import { PaymentComponent } from './component/payment/payment.component';

import { SearchHomeComponent } from './component/search-home/search-home.component';
import { WelcomeHomeComponent } from './component/welcome-home/welcome-home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CarComponentComponent } from './component/car-component/car-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { DesccomponentComponent } from './component/desccomponent/desccomponent.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    UpNavBarComponent,
    DownNavBarComponent,
    LogosSlideComponent,
    PaymentComponent,
    CarComponentComponent,
    DesccomponentComponent,
    FooterComponent,
    SearchHomeComponent,
    WelcomeHomeComponent,
    SignUpComponent,
    SignInComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '464593590767-toohchk4t3qf1c39jgjtkeqvbc87vuk5.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('260961339443983')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
