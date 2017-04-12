import * as $ from 'jquery';
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { MaterialModule, MdTabsModule } from '@angular/material';
import { Md2Module } from 'md2/module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, NoPreloading } from '@angular/router';
import { DialogExampleComponent } from './shared/dialog/dialog-example/dialog-example.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ComponentDialogComponent } from './pages/component-dialog/component-dialog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComponentButtonsComponent } from './pages/component-buttons/component-buttons.component';
import { ComponentProgressComponent } from './pages/component-progress/component-progress.component';
import { ChartsChartjsComponent } from './pages/charts-chartjs/charts-chartjs.component';
import { TablesDynamicComponent } from './pages/tables-dynamic/tables-dynamic.component';
import { TablesBasicComponent } from './pages/tables-basic/tables-basic.component';
import { FormsTreeComponent } from './pages/forms-tree/forms-tree.component';
import { ComponentCardComponent } from './pages/component-card/component-card.component';
import { ComponentBootstrapComponent } from './pages/component-bootstrap/component-bootstrap.component';
import { ComponentNotificationsComponent } from './pages/component-notifications/component-notifications.component';
import { ComponentRadioButtonComponent } from './pages/component-radio-button/component-radio-button.component';
import { ComponentCheckboxComponent } from './pages/component-checkbox/component-checkbox.component';
import { ComponentChipsComponent } from './pages/component-chips/component-chips.component';
import { ComponentDatePickerComponent } from './pages/component-date-picker/component-date-picker.component';
import { ComponentListComponent } from './pages/component-list/component-list.component';
import { ComponentMediaPlayerComponent } from './pages/component-media-player/component-media-player.component';
import { ComponentMenuComponent } from './pages/component-menu/component-menu.component';
import { ComponentGridListComponent } from './pages/component-grid-list/component-grid-list.component';
import { ComponentTextEditorComponent } from './pages/component-text-editor/component-text-editor.component';
import { ComponentSelectComponent } from './pages/component-select/component-select.component';
import { ComponentSlideToggleComponent } from './pages/component-slide-toggle/component-slide-toggle.component';
import { ComponentSliderComponent } from './pages/component-slider/component-slider.component';
import { ComponentTabsComponent } from './pages/component-tabs/component-tabs.component';
import { ComponentToolbarComponent } from './pages/component-toolbar/component-toolbar.component';
import { ComponentTooltipComponent } from './pages/component-tooltip/component-tooltip.component';
import { IconWeatherComponent } from './pages/icon-weather/icon-weather.component';
import { MapsGoogleComponent } from './pages/maps-google/maps-google.component';
import { IconFontawesomeComponent } from './pages/icon-fontawesome/icon-fontawesome.component';
import { FormsValidationComponent } from './pages/forms-validation/forms-validation.component';
import { FormsWizardComponent } from './pages/forms-wizard/forms-wizard.component';
import { FormsAutocompleteComponent } from './pages/forms-autocomplete/forms-autocomplete.component';
import { FormsUploadComponent } from './pages/forms-upload/forms-upload.component';
import { ChartsPeityComponent } from './pages/charts-peity/charts-peity.component';
import { WidgetsComponent } from './pages/widgets/widgets.component';
import { LayoutFlexComponent } from './pages/layout-flex/layout-flex.component';
import { LayoutTabsComponent } from './pages/layout-tabs/layout-tabs.component';
import { LayoutEdgesComponent } from './pages/layout-edges/layout-edges.component';
import { LayoutCardsComponent } from './pages/layout-cards/layout-cards.component';
import { LayoutFullscreenComponent } from './pages/layout-fullscreen/layout-fullscreen.component';
import { PagesErrorComponent } from './pages/pages-error/pages-error.component';
import { PagesLockscreenComponent } from './pages/pages-lockscreen/pages-lockscreen.component';
import { PagesInvoiceComponent } from './pages/pages-invoice/pages-invoice.component';
import { PagesNotfoundComponent } from './pages/pages-notfound/pages-notfound.component';
import { PagesSigninComponent } from './pages/pages-signin/pages-signin.component';
import { PagesSignupComponent } from './pages/pages-signup/pages-signup.component';
import { AppsCalendarComponent } from './pages/apps-calendar/apps-calendar.component';
import { AppsExplorerComponent } from './pages/apps-explorer/apps-explorer.component';
import { AppsMailComponent } from './pages/apps-mail/apps-mail.component';
import { MapsVectorExampleComponent } from './pages/maps-vector/maps-vector.component';
import { IconMaterialComponent } from './pages/icon-material/icon-material.component';
import { ScheduleModule } from './shared/schedule/schedule.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FileUploadModule } from 'ng2-file-upload';
import { TreeModule } from 'angular2-tree-component';
import { ChartModule } from './shared/chart/chart.module';
import { MapModule } from './shared/maps/maps.module';
import { MediaModule } from './shared/media/media.module';
import { WidgetModule } from './shared/widget/widget.module';
import { CustomFormsModule } from 'ng2-validation';
import { DashboardEdgeComponent } from './pages/dashboard-edge/dashboard-edge.component';
import { DialogThemeComponent } from './shared/dialog/dialog-theme/dialog-theme.component';
import { TranslateStaticLoader, TranslateLoader, TranslateModule } from 'ng2-translate';
import { QuillEditorComponent } from './shared/editor/quill-editor.component';
/**
 * Root Module
 *
 * App bootstrap here, add your component (Page) to var [declarations] for load.
 */
@NgModule({
  declarations: [
    // Page
    AppComponent,
    DialogExampleComponent,
    DialogThemeComponent,
    ComponentDialogComponent,
    DashboardComponent,
    DashboardEdgeComponent,
    ComponentButtonsComponent,
    ComponentProgressComponent,
    ComponentCardComponent,
    ComponentBootstrapComponent,
    ComponentDialogComponent,
    ComponentNotificationsComponent,
    ComponentRadioButtonComponent,
    ComponentCheckboxComponent,
    ComponentChipsComponent,
    ComponentDatePickerComponent,
    ComponentListComponent,
    ComponentMediaPlayerComponent,
    ComponentMenuComponent,
    ComponentGridListComponent,
    ComponentSelectComponent,
    ComponentSlideToggleComponent,
    ComponentSliderComponent,
    ComponentTabsComponent,
    ComponentTextEditorComponent,
    ComponentToolbarComponent,
    ComponentTooltipComponent,
    ComponentRadioButtonComponent,
    IconWeatherComponent,
    IconMaterialComponent,
    IconFontawesomeComponent,
    MapsGoogleComponent,
    MapsVectorExampleComponent,
    FormsValidationComponent,
    FormsWizardComponent,
    FormsAutocompleteComponent,
    FormsUploadComponent,
    FormsTreeComponent,
    TablesBasicComponent,
    TablesDynamicComponent,
    ChartsChartjsComponent,
    ChartsPeityComponent,
    WidgetsComponent,
    LayoutFlexComponent,
    LayoutTabsComponent,
    LayoutEdgesComponent,
    LayoutCardsComponent,
    LayoutFullscreenComponent,
    PagesErrorComponent,
    PagesLockscreenComponent,
    PagesInvoiceComponent,
    PagesNotfoundComponent,
    PagesSigninComponent,
    PagesSignupComponent,
    AppsCalendarComponent,
    AppsExplorerComponent,
    AppsMailComponent,
    QuillEditorComponent
  ],
  imports: [
    // Angular Imports
    BrowserModule,
    BrowserAnimationsModule,
    MdTabsModule,
    FormsModule,
    HttpModule,
    // Lokra Imports
    ScheduleModule,
    ChartModule,
    MapModule,
    MediaModule,
    WidgetModule,
    // Extra Plugin Imports
    NgxDatatableModule,
    // If you using lazy loading, var [preloadingStrategy] can change to PreloadAllModules or NoPreloading.
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: NoPreloading}),
    MaterialModule,
    FlexLayoutModule,
    Md2Module,
    NgxDatatableModule,
    FileUploadModule,
    CustomFormsModule,
    TreeModule,
    // Replace to your Google map API key.
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC4-U6Eo0eHV7UFGjAIO6ZRB4X5z7hWS-8'
    }),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [
    // Global service (Global state)
    AppService
  ],
  entryComponents: [
    // Customize dialog must be import here.
    DialogExampleComponent,
    DialogThemeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
