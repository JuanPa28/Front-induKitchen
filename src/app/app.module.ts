import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';

import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

// BOOTSTRAP COMPONENTS

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

// LAYOUT

import {BaseLayoutComponent} from './layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './layout/pages-layout/pages-layout.component';
import {PageTitleComponent} from './layout/components/page-title/page-title.component';

// HEADER

import {HeaderComponent} from './layout/components/header/header.component';
import {SearchBoxComponent} from './layout/components/header/elements/search-box/search-box.component';
import {UserBoxComponent} from './layout/components/header/elements/user-box/user-box.component';

// SIDEBAR

import {SidebarComponent} from './layout/components/sidebar/sidebar.component';
import {LogoComponent} from './layout/components/sidebar/elements/logo/logo.component';

// FOOTER

import {FooterComponent} from './layout/components/footer/footer.component';

// DEMO PAGES

// Dashboards

import {AnalyticsComponent} from './demo-pages/dashboards/analytics/analytics.component';

// Pages

import {
    ForgotPasswordBoxedComponent
} from './demo-pages/user-pages/forgot-password-boxed/forgot-password-boxed.component';
import {LoginBoxedComponent} from './demo-pages/user-pages/login-boxed/login-boxed.component';
import {RegisterBoxedComponent} from './demo-pages/user-pages/register-boxed/register-boxed.component';

// Elements

import {StandardComponent} from './demo-pages/elements/Buttons/standard/standard.component';
import {DropdownsComponent} from './demo-pages/elements/dropdowns/dropdowns.component';
import {CardsComponent} from './demo-pages/elements/cards/cards.component';
import {ListGroupsComponent} from './demo-pages/elements/list-groups/list-groups.component';
import {TimelineComponent} from './demo-pages/elements/timeline/timeline.component';
import {IconsComponent} from './demo-pages/elements/icons/icons.component';

// Components

import {AccordionsComponent} from './demo-pages/components/accordions/accordions.component';
import {TabsComponent} from './demo-pages/components/tabs/tabs.component';
import {CarouselComponent} from './demo-pages/components/carousel/carousel.component';
import {ModalsComponent} from './demo-pages/components/modals/modals.component';
import {ProgressBarComponent} from './demo-pages/components/progress-bar/progress-bar.component';
import {PaginationComponent} from './demo-pages/components/pagination/pagination.component';
import {TooltipsPopoversComponent} from './demo-pages/components/tooltips-popovers/tooltips-popovers.component';

// Tables

import {RegularComponent} from './demo-pages/tables/regular/regular.component';
import {TablesMainComponent} from './demo-pages/tables/tables-main/tables-main.component';

// Widgets

import {ChartBoxes3Component} from './demo-pages/widgets/chart-boxes3/chart-boxes3.component';

// Forms Elements

import {ControlsComponent} from './demo-pages/forms/Elements/controls/controls.component';
import {LayoutComponent} from './demo-pages/forms/Elements/layout/layout.component';
import {ProductosComponent} from './demo-pages/dashboards/productos/productos.component';
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {RatingModule} from "primeng/rating";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {BadgeModule} from "primeng/badge";
import {TooltipModule} from "primeng/tooltip";
import {TagModule} from "primeng/tag";
import {CarritoComponent} from "./demo-pages/dashboards/carrito/carrito.component";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [

        // LAYOUT

        AppComponent,
        BaseLayoutComponent,
        PagesLayoutComponent,
        PageTitleComponent,

        // HEADER

        HeaderComponent,
        SearchBoxComponent,
        UserBoxComponent,

        // SIDEBAR

        SidebarComponent,
        LogoComponent,

        // FOOTER

        FooterComponent,

        // DEMO PAGES

        // Dashboards

        AnalyticsComponent,
        ProductosComponent,
        CarritoComponent,

        // User Pages

        ForgotPasswordBoxedComponent,
        LoginBoxedComponent,
        RegisterBoxedComponent,

        // Elements

        StandardComponent,
        IconsComponent,
        DropdownsComponent,
        CardsComponent,
        ListGroupsComponent,
        TimelineComponent,

        // Components

        AccordionsComponent,
        TabsComponent,
        CarouselComponent,
        ModalsComponent,
        ProgressBarComponent,
        PaginationComponent,
        TooltipsPopoversComponent,

        // Tables

        RegularComponent,
        TablesMainComponent,

        // Dashboard Boxes

        ChartBoxes3Component,

        // Form Elements

        ControlsComponent,
        LayoutComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CommonModule,
        LoadingBarRouterModule,

        // Angular Bootstrap Components

        PerfectScrollbarModule,
        NgbModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        DataViewModule,
        DropdownModule,
        RatingModule,
        ButtonModule,
        InputTextModule,
        BadgeModule,
        TooltipModule,
        TagModule,
        ToastModule,
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
