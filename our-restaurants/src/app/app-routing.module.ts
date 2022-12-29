import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShellComponent } from "./shell/shell.component";

const routes: Routes = [
  { path: "", redirectTo: "home/employees", pathMatch: "full" },

  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./@modules/authentication/authentication.module').then(
  //       (m) => m.AuthenticationModule
  //     ),
  // },

  {
    path: "home",
    component: ShellComponent,
    children: [
      {
        path: "employees",
        loadChildren: () =>
          import("./@modules/employees/employees.module").then(
            (m) => m.EmployeesModule
          ),
      },

      {
        path: "clients",
        loadChildren: () =>
          import("./@modules/clients/clients.module").then(
            (m) => m.ClientsModule
          ),
      },
      
      {
        path: "magmaP",
        loadChildren: () =>
          import("./@modules/magma/magma.module").then(
            (m) => m.MagmaModule
          ),
      },

      {
        path: "cashierdashboardP",
        loadChildren: () =>
          import("./@modules/cashier-dashboard/cashier-dashboard.module").then(
            (m) => m.CashierDashboardModule
          ),
      },

      {
        path: "branchesP",
        loadChildren: () =>
          import("./@modules/branches/branches.module").then(
            (m) => m.BranchesModule
          ),
      },
     
    ],
    //   {
    //     path: 'salereportdashboardgridview',
    //     loadChildren: () =>
    //       import('./@modules/restaurant-sales-dashboard-grid-view/restaurant-sales-dashboard-grid-view.module').then(
    //         (m) => m.RestaurantSalesDashboardGridViewModule
    //       ),
    //   },
    //   {
    //     path: 'dashboard',
    //     loadChildren: () =>
    //       import('./@modules/dashboard/dashboard.module').then(
    //         (m) => m.DashboardModule
    //       ),
    //   },

    //   {
    //     path: 'branches',
    //     loadChildren: () =>
    //       import('./@modules/branches/branches.module').then(
    //         (m) => m.BranchesModule
    //       ),
    //   },

    //   {
    //     path: 'clients',
    //     loadChildren: () =>
    //       import('./@modules/clients/clients.module').then(
    //         (m) => m.ClientsModule
    //       ),
    //   },

    //   {
    //     path: 'restaurent-rooms',
    //     loadChildren: () =>
    //       import('./@modules/restaurent-rooms/restaurent-rooms.module').then(
    //         (m) => m.RestaurentRoomsModule
    //       ),
    //   },

    //   {
    //     path: 'restaurent-tables',
    //     loadChildren: () =>
    //       import('./@modules/restaurent-tables/restaurent-tables.module').then(
    //         (m) => m.RestaurentTablesModule
    //       ),
    //   },

    //   {
    //     path: 'function-halls',
    //     loadChildren: () =>
    //       import('./@modules/function-halls/function-halls.module').then(
    //         (m) => m.FunctionHallsModule
    //       ),
    //   },

    //   {
    //     path: 'functionhall-packages',
    //     loadChildren: () =>
    //       import(
    //         './@modules/functionhall-packages/functionhall-packages.module'
    //       ).then((m) => m.FunctionhallPackagesModule),
    //   },

    //   {
    //     path: 'restaurent-menu-items',
    //     loadChildren: () =>
    //       import(
    //         './@modules/restaurent-menu-items/restaurent-menu-items.module'
    //       ).then((m) => m.RestaurentMenuItemsModule),
    //   },

    //   {
    //     path: 'function-hall-bookings',
    //     loadChildren: () =>
    //       import(
    //         './@modules/function-hall-bookings/function-hall-bookings.module'
    //       ).then((m) => m.FunctionHallBookingsModule),
    //   },

    //   {
    //     path: 'restaurant-dashboard',
    //     loadChildren: () =>
    //       import('./@modules/cashier-dashboard/cashier-dashboard.module').then(
    //         (m) => m.CashierDashboardModule
    //       ),
    //   },

    //   {
    //     path: 'waiter-dashboard',
    //     loadChildren: () =>
    //       import('./@modules/waiter-dashboard/waiter-dashboard.module').then(
    //         (m) => m.WaiterDashboardModule
    //       ),
    //   },

    //   {
    //     path: 'kitchen-dashboard',
    //     loadChildren: () =>
    //       import('./@modules/kitchen-dashboard/kitchen-dashboard.module').then(
    //         (m) => m.KitchenDashboardModule
    //       ),
    //   },
    //   {
    //     path: 'items-list',
    //     loadChildren: () =>
    //       import('./@modules/items-list/items-list.module').then(
    //         (m) => m.ItemsListModule
    //       ),
    //   },

    //   {
    //     path: 'purchased-data',
    //     loadChildren: () =>
    //       import('./@modules/purchased-items/purchased-items.module').then(
    //         (m) => m.PurchasedItemsModule
    //       ),
    //   },

    //   {
    //     path: 'vendor-data',
    //     loadChildren: () =>
    //       import('./@modules/vendor-details/vendor-details.module').then(
    //         (m) => m.VendorDetailsModule
    //       ),
    //   },

    //   {
    //     path: 'menu-categories',
    //     loadChildren: () =>
    //       import('./@modules/menu-categories/menu-categories.module').then(
    //         (m) => m.MenuCategoriesModule
    //       ),
    //   },
    //   {
    //     path: 'billing',
    //     loadChildren: () =>
    //       import('./@modules/billing/billing.module').then(
    //         (m) => m.BillingModule
    //       ),
    //   },

    //   {
    //     path: 'salereport',
    //     loadChildren: () =>
    //       import('./@modules/invoice-details/invoice-details.module').then(
    //         (m) => m.InvoiceDetailsModule
    //       ),
    //   },

    //   {
    //     path: 'saleitems',
    //     loadChildren: () =>
    //       import('./@modules/invoice-details/invoice-details.module').then(
    //         (m) => m.InvoiceDetailsModule
    //       ),
    //   },
    // ],
    // canActivate: [AuthGuardService],
  },
  { path: "**", redirectTo: "home/employees" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
