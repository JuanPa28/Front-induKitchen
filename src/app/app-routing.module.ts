import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './layout/pages-layout/pages-layout.component';

// DEMO PAGES

// Dashboards

import {AnalyticsComponent} from './demo-pages/dashboards/analytics/analytics.component';

// Pages

import {ForgotPasswordBoxedComponent} from './demo-pages/user-pages/forgot-password-boxed/forgot-password-boxed.component';
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
// import {TabsComponent} from './DemoPages/Components/tabs/tabs.component';
import {CarouselComponent} from './demo-pages/components/carousel/carousel.component';
import {ModalsComponent} from './demo-pages/components/modals/modals.component';
import {ProgressBarComponent} from './demo-pages/components/progress-bar/progress-bar.component';
import {PaginationComponent} from './demo-pages/components/pagination/pagination.component';
import {TooltipsPopoversComponent} from './demo-pages/components/tooltips-popovers/tooltips-popovers.component';

// Tables

import {TablesMainComponent} from './demo-pages/tables/tables-main/tables-main.component';

// Widgets

import {ChartBoxes3Component} from './demo-pages/widgets/chart-boxes3/chart-boxes3.component';

// Forms Elements

import {ControlsComponent} from './demo-pages/forms/Elements/controls/controls.component';
import {LayoutComponent} from './demo-pages/forms/Elements/layout/layout.component';
import { ProductsComponent } from './demo-pages/dashboards/products/products.component';



const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // Dashboads

      {path: '', component: AnalyticsComponent, data: {extraParameter: 'dashboardsMenu'}},
      {path: 'products', component: ProductsComponent, data: {extraParameter: 'dashboardsMenu'}},

      // Elements

      {path: 'elements/buttons-standard', component: StandardComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/dropdowns', component: DropdownsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/icons', component: IconsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/cards', component: CardsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/list-group', component: ListGroupsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/timeline', component: TimelineComponent, data: {extraParameter: 'elementsMenu'}},

      // Components

      // {path: 'components/tabs', component: TabsComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/accordions', component: AccordionsComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/modals', component: ModalsComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/progress-bar', component: ProgressBarComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/tooltips-popovers', component: TooltipsPopoversComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/carousel', component: CarouselComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/pagination', component: PaginationComponent, data: {extraParameter: 'componentsMenu'}},

      // Tables

      {path: 'tables/bootstrap', component: TablesMainComponent, data: {extraParameter: 'tablesMenu'}},

      // Widgets

      {path: 'widgets/chart-boxes-3', component: ChartBoxes3Component, data: {extraParameter: 'pagesMenu3'}},

      // Forms Elements

      {path: 'forms/controls', component: ControlsComponent, data: {extraParameter: 'formElementsMenu'}},
      {path: 'forms/layouts', component: LayoutComponent, data: {extraParameter: 'formElementsMenu'}},

    ]

  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [

      // User Pages

      {path: 'pages/login-boxed', component: LoginBoxedComponent, data: {extraParameter: ''}},
      {path: 'pages/register-boxed', component: RegisterBoxedComponent, data: {extraParameter: ''}},
      {path: 'pages/forgot-password-boxed', component: ForgotPasswordBoxedComponent, data: {extraParameter: ''}},
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
