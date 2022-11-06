import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationService } from 'primeng/api';

import { AppCommonModule } from '../../app.common.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MenuComponent, FooterComponent, AdminLayoutComponent],
  imports: [BrowserModule, AppCommonModule],
  exports: [LayoutComponent, HeaderComponent, MenuComponent, FooterComponent],
  providers: [ConfirmationService]
})
export class LayoutModule {}
