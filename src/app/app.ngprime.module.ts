import { NgModule } from '@angular/core';
import { BlockUIModule } from 'primeng/blockui';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MegaMenuModule } from 'primeng/megamenu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  exports: [
    InputTextModule,
    ButtonModule,
    PanelModule,
    ToastModule,
    MegaMenuModule,
    TableModule,
    MessageModule,
    CardModule,
    ProgressSpinnerModule,
    OverlayPanelModule,
    BreadcrumbModule,
    CalendarModule,
    SidebarModule,
    DynamicDialogModule,
    InputTextareaModule,
    MessagesModule,
    SelectButtonModule,
    RadioButtonModule,
    DropdownModule,
    ConfirmDialogModule,
    BlockUIModule,
    TooltipModule,
    TabViewModule,
  ],
})
export class NgPrimeModule {}
