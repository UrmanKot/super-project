import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthModule} from './auth/auth.module';
import {AuthGuard} from './auth/auth.guard';
import {AuthInterceptor} from './auth/auth.interceptor';
import {ConfirmationModule} from './confirmation/confirmation.module';
import {ProductStructureModule} from './product-structure/product-structure.module';
import {DeliveryChainsModule} from './delivery-chains/delivery-chains.module';
import {GuideModule} from './guide/guide.module';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule,
    AuthModule,
    LayoutModule,
    ConfirmationModule,
    ProductStructureModule,
    DeliveryChainsModule,
    GuideModule,
  ],
  providers: [
    INTERCEPTOR_PROVIDER,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
