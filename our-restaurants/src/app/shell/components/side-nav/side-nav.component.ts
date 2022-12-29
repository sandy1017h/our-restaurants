import { MediaMatcher } from "@angular/cdk/layout";
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { Router } from "@angular/router";
import { animateText, onSideNavChange } from "../../animations/animations";
@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
  animations: [onSideNavChange, animateText],
})
export class SideNavComponent implements OnInit {
  @Input() sidenav!: MatSidenav;
  public sideNavState: boolean = false;
  public linkText: boolean = false;
  selectedSidenavMenu: any;
  selectedMainMenu: any;

  @Output() selectedMenu = new EventEmitter<string>();

  // pages = [
  //   {
  //     id: "dashboardmenu",
  //     name: "Dashboard",
  //     display: true,
  //     parentLink: "dashboard",
  //     link: "main-view",
  //     icon: "home",
  //   },

  //   {
  //     id: "bookings",
  //     name: "Bookings/Calender",
  //     display: true,
  //     parentLink: "bookings",
  //     link: "main-view",
  //     icon: "event",
  //   },

  //   {
  //     id: "employeesmenu",
  //     name: "Employees",
  //     display: true,
  //     parentLink: "employees",
  //     link: "main-view",
  //     icon: "people",
  //   },
  //   {
  //     id: "clientsmenu",
  //     name: "Clients",
  //     display: true,
  //     parentLink: "clients",
  //     link: "main-view",
  //     icon: "people_outline",
  //   },
  // ];

  newSideNav = [
    // {
    //   id: "restaurantdashboardmenu",
    //   name: "Cahier Dashboard",
    //   display: true,
    //   parentRouteName: "restaurant-dashboard",
    //   routeName: "main-view",
    //   icon: "account_balance_wallet",
    //   child: [],
    // },

    // {
    //   id: 'roomsdashboardmenu',
    //   name: 'Rooms Dashboard',
    //   display: true,
    //   parentRouteName: 'restaurant-dashboard',
    //   routeName: 'main-view',
    //   icon: 'account_balance_wallet',
    //   child: [],
    // },

    // {
    //   id: 'functionhallsdashboardmenu',
    //   name: 'Functions Halls Dashboard',
    //   display: true,
    //   parentRouteName: 'restaurant-dashboard',
    //   routeName: 'main-view',
    //   icon: 'account_balance_wallet',
    //   child: [],
    // },

    // {
    //   id: 'cashierdashboardmenu',
    //   name: 'Cashier Dashboard',
    //   display: true,
    //   parentRouteName: 'not-using',
    //   routeName: null,
    //   icon: 'account_balance_wallet',
    //   child: [
    //     {
    //       id: 'restaurantdashboardmenu',
    //       name: 'Restaurant Dashboard',
    //       display: true,
    //       parentRouteName: 'cashier-dashboard',
    //       routeName: 'main-view',
    //       icon: 'account_balance_wallet',
    //     },
    //     {
    //       id: 'roomsdashboardmenu',
    //       name: 'Rooms Dashboard',
    //       display: true,
    //       parentRouteName: 'cashier-dashboard',
    //       routeName: 'main-view',
    //       icon: 'account_balance_wallet',
    //     },
    //     {
    //       id: 'functionhallsdashboardmenu',
    //       name: 'Function Halls Dashboard',
    //       display: true,
    //       parentRouteName: 'cashier-dashboard',
    //       routeName: 'main-view',
    //       icon: 'account_balance_wallet',
    //     },
    //   ],
    // },

    // {
    //   id: "waiterdashboardmenu",
    //   name: "Waiter Dashboard",
    //   display: true,
    //   parentRouteName: "waiter-dashboard",
    //   routeName: "waiter-main",
    //   icon: "person",
    //   child: [],
    // },

    {
      id: "cashierdashboardmenu",
      name: "CASHIER_DASHBOARD",
      display: true,
      parentRouteName: "not-using",
      routeName: null,
      icon: "account_balance_wallet",
      child: [


        {
          id: "cashierDboardmenu",
          name: "Cashier-Dashboard",
          display: true,
          parentRouteName: "cashierdashboardP",
          routeName: "cashierdashboardC",
          icon: "people_outline",
        },

      ],
    },

    {
      id: "branchesmenu",
      name: "BRANCHES",
      display: true,
      parentRouteName: "not-using",
      routeName: null,
      icon: "app_registration",
      child: [
        {
          id: "branchesmenu",
          name: "BRANCHES_MAIN_VIEW",
          display: true,
          parentRouteName: "branchesP",
          routeName: "branchesC",
          icon: "account_balance",
        },
      ],
    },



    {
      id: "employeesmenu",
      name: "Staff / Clients",
      display: true,
      parentRouteName: "not-using",
      routeName: null,
      icon: "people",
      child: [
        {
          id: "employeesmenu",
          name: "Employees",
          display: true,
          parentRouteName: "employees",
          routeName: "main-view",
          icon: "people",
        },
        {
          id: "clientsmenu",
          name: "Clients",
          display: true,
          parentRouteName: "clients",
          routeName: "main-view",
          icon: "people_outline",
        },
        {
          id: "magmamenu",
          name: "OTHER EXAMPLE 1",
          display: true,
          parentRouteName: "magmaP",
          routeName: "magmaC",
          icon: "people_outline",
        },
        
       
      ],
    },


    // {
    //   id: "branchesmenu",
    //   name: "BRANCHES",
    //   display: true,
    //   parentRouteName: "not-using",
    //   routeName: null,
    //   icon: "app_registration",
    //   child: [
    //     {
    //       id: "branches",
    //       name: "BRANCHES_MAIN_VIEW",
    //       display: true,
    //       parentRouteName: "branchesmainviewP",
    //       routeName: "branchesmainviewC",
    //       icon: "people",
    //     }
    //   ],
    // },

    // {
    //   id: "configure",
    //   name: "Configure",
    //   display: true,
    //   parentRouteName: "not-using",
    //   routeName: null,
    //   icon: "app_registration",
    //   child: [
    //     {
    //       id: "brancheslocationsmenu",
    //       name: "Branches",
    //       display: true,
    //       parentRouteName: "branches",
    //       routeName: "main-view",
    //       icon: "account_balance",
    //     },

    //     {
    //       id: "functionhallsmenu",
    //       name: "Function Halls",
    //       display: true,
    //       parentRouteName: "function-halls",
    //       routeName: "main-view",
    //       icon: "account_balance",
    //     },

    //     {
    //       id: "restaurentroomsmenu",
    //       name: "Hotel Rooms",
    //       display: true,
    //       parentRouteName: "restaurent-rooms",
    //       routeName: "main-view",
    //       icon: "account_balance",
    //     },

    //     {
    //       id: "restaurenttablesmenu",
    //       name: "Dine in tables",
    //       display: true,
    //       parentRouteName: "restaurent-tables",
    //       routeName: "main-view",
    //       icon: "account_balance",
    //     },

    //     {
    //       id: "restaurentmenuitems",
    //       name: "Menu Items",
    //       display: true,
    //       parentRouteName: "restaurent-menu-items",
    //       routeName: "main-view",
    //       icon: "account_balance",
    //     },
    //     {
    //       id: "menucategories",
    //       name: "Menu Categories",
    //       display: true,
    //       parentRouteName: "menu-categories",
    //       routeName: "categories-main",
    //       icon: "category",
    //     },
    //   ],
    // },

    // {
    //   id: "pricing",
    //   name: "Pricing",
    //   display: true,
    //   parentRouteName: "not-using",
    //   routeName: null,
    //   icon: "paid",
    //   child: [
    //     {
    //       id: "functionhallpackagesmenu",
    //       name: "Function Hall Packages",
    //       display: true,
    //       parentRouteName: "functionhall-packages",
    //       routeName: "main-view",
    //       icon: "card_membership",
    //     },
    //   ],
    // },

    // {
    //   id: "invoicemenu",
    //   name: "Analytics",
    //   display: true,
    //   parentRouteName: "not-using",
    //   routeName: null,
    //   icon: "receipt",
    //   child: [
    //     {
    //       id: "salereport",
    //       name: "Sale Report",
    //       display: true,
    //       parentRouteName: "salereport",
    //       routeName: "sale-report",
    //       icon: "receipt",
    //     },
    //     {
    //       id: "saleitemreport",
    //       name: "Sale Report by Items",
    //       display: true,
    //       parentRouteName: "saleitems",
    //       routeName: "sale-items",
    //       icon: "receipt",
    //     },

    //     {
    //       id: "salereportdashboardmenu",
    //       name: "Sales Dashboard Graphical View",
    //       display: true,
    //       parentRouteName: "salereportdashboard",
    //       routeName: "main-view",
    //       icon: "dashboard",
    //     },
    //     {
    //       id: "salereportdashboardgridviewmenu",
    //       name: "Sales Dashboard Grid View",
    //       display: true,
    //       parentRouteName: "salereportdashboardgridview",
    //       routeName: "main-view",
    //       icon: "dashboard"
    //     },
    //   ],
    // },

    // {
    //   id: "fooditemsinventory",
    //   name: "Items Inventory",
    //   display: true,
    //   parentRouteName: "not-using",
    //   routeName: null,
    //   icon: "food_bank",
    //   child: [
    //     {
    //       id: "itemsdata",
    //       name: "Items List",
    //       display: true,
    //       parentRouteName: "items-list",
    //       routeName: "items-main",
    //       icon: "food_bank",
    //       child: [],
    //     },
    //     {
    //       id: "purchaseditems",
    //       name: "Purchased Items ",
    //       display: true,
    //       parentRouteName: "purchased-data",
    //       routeName: "puchased-main",
    //       icon: "food_bank",
    //       child: [],
    //     },

    //     {
    //       id: "vendordetails",
    //       name: "Vendors Data",
    //       display: true,
    //       parentRouteName: "vendor-data",
    //       routeName: "vendor-main",
    //       icon: "food_bank",
    //       child: [],
    //     },
    //     // {
    //     //   id: 'paymentsforfooditems ',
    //     //   name: 'Payments for Food Items ',
    //     //   display: true,
    //     //   parentRouteName: 'payments for food items ',
    //     //   routeName: 'items-list-main',
    //     //   icon: 'food_bank',
    //     //   child: [],
    //     // },
    //     // {
    //     //   id: 'fooditemsusedineachmenuitems ',
    //     //   name: 'Food Items Used in Each Menu Items ',
    //     //   display: true,
    //     //   parentRouteName: 'food items used in each menu items ',
    //     //   routeName: 'main-view',
    //     //   icon: 'food_bank',
    //     //   child: [],
    //     // },
    //   ],
    // },
  ];

  mobileQuery!: MediaQueryList;

  private _mobileQueryListener!: () => void;
  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => {
      changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addEventListener("change", this._mobileQueryListener);
  }

  ngOnInit(): void {
    // To Display the selected menu name on header after page reload
    this.displayActiveMenuNameOnHeader();
  }

  displayActiveMenuNameOnHeader() {
    // setTimeout(() => {
    const selectedSideNav = this.router.parseUrl(this.router.url).root.children[
      "primary"
    ].segments[1];
    // console.log(selectedSideNav.path);
    if (selectedSideNav.path) {
      const selectedMenu = this.newSideNav.find(
        (menu) => menu.parentRouteName === selectedSideNav.path
      );
      // If we can able to get menu details here it is a menu without childs
      if (selectedMenu) {
        this.showMenu(selectedMenu.name, false);
      } else {
        // We have to loop throught the children menu
        mainLoop: for (let menu of this.newSideNav) {
          if (menu.child && menu.child.length) {
            const childMenu = menu.child.find(
              (childMenu) => childMenu.parentRouteName === selectedSideNav.path
            );
            if (childMenu) {
              this.showMenu(childMenu.name, true);
              break mainLoop;
            }
          }
        }
      }
    }
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this.selectedMainMenu = null;
    // this._sidenavService.sideNavState$.next(this.sideNavState);
  }

  showMenu(menuName: string, isChild: boolean) {
    // this.activeLink = menuName;
    this.selectedMenu.emit(menuName);
    this.selectedSidenavMenu = menuName;
    // console.log("this.selectedMenu-----------", menuName);

    if (isChild && this.mobileQuery.matches) {
      this.sidenav.close();
      // console.log("Close Side Nav from Child Menu Name");
    }
  }

  displayChildMenu(menuName: string, parentRouteName: string | null) {
    if (this.selectedMainMenu) {
      this.selectedMainMenu === menuName
        ? (this.selectedMainMenu = null)
        : (this.selectedMainMenu = menuName);
    } else {
      this.selectedMainMenu = menuName;
    }

    this.showMenu(menuName, false);

    if (parentRouteName && this.mobileQuery.matches) {
      this.sidenav.close();
      // console.log("Close Side Nav from Main Menu Name");
    }
  }
}
