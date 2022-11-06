import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserEffects } from 'app/@state/effects';
import { ConfirmationService, MessageService } from 'primeng/api';

import { AuthGuard } from './@core/guards/auth.guard';
import { JwtInterceptor } from './@core/http-interceptors/jwt.interceptor';
import { AuthService } from './@core/services/auth.service';
import { metaReducers, ROOT_REDUCERS } from './@state/reducers';
import { AppCommonModule } from './app.common.module';
import { AppComponent } from './app.component';
import { AppConfigComponent } from './app.config.component';
import { AppFooterComponent } from './app.footer.component';
import { AppMainComponent } from './app.main.component';
import { AppMenuComponent } from './app.menu.component';
import { MenuService } from './app.menu.service';
import { AppMenuitemComponent } from './app.menuitem.component';
import { NgPrimeModule } from './app.ngprime.module';
import { AppProfileComponent } from './app.profile.component';
import { AppRoutingModule } from './app.routing.module';
import { AppTopBarComponent } from './app.topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppMenuitemComponent,
    AppMenuComponent,
    AppConfigComponent,
    AppProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppCommonModule,
    BrowserAnimationsModule,
    NgPrimeModule,
    AmplifyAuthenticatorModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),
    StoreDevtoolsModule.instrument({
      name: 'Titanium Thread',
    }),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [
    ConfirmationService,
    MessageService,
    AuthService,
    AuthGuard,
    MenuService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
