import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSidenav } from "@angular/material/sidenav";
import { Router } from "@angular/router";

@Component({
  selector: "app-header-nav",
  templateUrl: "./header-nav.component.html",
  styleUrls: ["./header-nav.component.scss"],
})
export class HeaderNavComponent implements OnInit {


  @Input() activeMenuName: any;

  @Input() sidenav!: MatSidenav;

  notificationList = [
    {
      title: "Daily challenges",
      subtitle: "Your submission has been accepted",
      date: "Nov 06, 9:37 AM",
      status: "read",
    },
    {
      title: "Daily challenges",
      subtitle: "Your submission has been accepted",
      date: "Nov 06, 9:37 AM",
      status: "unread",
    },
    {
      title: "Daily challenges",
      subtitle: "Your submission has been accepted",
      date: "Nov 06, 9:37 AM",
      status: "read",
    },
  ];

  messageList = [
    {
      title: "Daily challenges",
      subtitle: "Your submission has been accepted",
      date: "Nov 06, 9:37 AM",
      status: "read",
    },
    {
      title: "Daily challenges",
      subtitle: "Your submission has been accepted",
      date: "Nov 06, 9:37 AM",
      status: "unread",
    },
    {
      title: "Daily challenges",
      subtitle: "Your submission has been accepted",
      date: "Nov 06, 9:37 AM",
      status: "read",
    },
  ];

  shortcutList = [
    { title: "Changelog", subtitle: "Latest version: v1.2" },
    { title: "Changelog", subtitle: "Latest version: v1.2" },
    { title: "Changelog", subtitle: "Latest version: v1.2" },
    { title: "Changelog", subtitle: "Latest version: v1.2" },
    { title: "Changelog", subtitle: "Latest version: v1.2" },
    { title: "Changelog", subtitle: "Latest version: v1.2" },
  ];

  constructor(
    // private userService: UserService,
    private router: Router,
    // private _getLoggedUserDetailsService: GetLoggedUserDetailsService,
    private _openDialog: MatDialog
  ) {
    // this.getLoggedUserDetails();
  }

  ngOnInit(): void {}
  // async getLoggedUserDetails() {
  //   // console.log(
  //   //   this.userService.getloggeduserDetails,
  //   //   "this.userService.getloggeduserDetails"
  //   // );
  //   if (this.userService.getloggeduserDetails) {
  //     this.currentLoggedUserDetails = this.userService.getloggeduserDetails;
  //   }
  //   const loggedUserId = this.currentLoggedUserDetails.LoggedUserId;
  //   if (loggedUserId) {
  //     if (GetLoggedUserDetailsService._loggedUserData) {
  //       this._loggedUserData = GetLoggedUserDetailsService._loggedUserData;
  //       this._loggeedUserImageurl =
  //         GetLoggedUserDetailsService._loggeedUserImageurl;
  //     } else {
  //       await this._getLoggedUserDetailsService.getLoggedUserFN(loggedUserId);
  //       this._loggedUserData = GetLoggedUserDetailsService._loggedUserData;
  //       this._loggeedUserImageurl =
  //         GetLoggedUserDetailsService._loggeedUserImageurl;
  //         // console.log(this._loggeedUserImageurl,"this Url")
  //       // console.log(this._loggedUserData.employeedetailsiduniquekey, "this._loggedUserData");
  //     }
  //     // console.log(this._loggeedUserImageurl,"this Url")
  //   }
  //   console.log(this._loggedUserData.employeedetailsiduniquekey);
  //   if (this._loggedUserData.employeedetailsiduniquekey === undefined) {
  //     this.LogOut();
  //   }
  //   //***********Get Logged User Details Block End ***************//
// /

  // prepareDataToBePassedInEditProfile() {
  //   const loggedUserId = this.currentLoggedUserDetails.LoggedUserId;

  //   // console.log(loggedUserId, "employeeid")
  //   return {
  //     loggedUserId: this.currentLoggedUserDetails.LoggedUserId,
  //   };
  // }
  // editProfileDialog() {
  //   const dialogRef = this._openDialog.open(EditProfileComponent, {
  //     panelClass: "full-screen-dialog",
  //     data: {
  //       ...this.prepareDataToBePassedInEditProfile(),
  //     },
  //   });
  //   dialogRef.afterClosed();
  // }

  // changepassword() {
  //   const dialogRef = this._openDialog.open(ChangePasswordComponent, {
  //     panelClass: "full-screen-dialog",
  //     data: {
  //       ...this.prepareDataToBePassedInEditProfile(),
  //     },
  //   });
  //   dialogRef.afterClosed();
  // }
}
