import { MediaMatcher } from "@angular/cdk/layout";
import { isPlatformBrowser } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from "@angular/core";
import { onMainContentChange } from "./animations/animations";
@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.scss"],
  animations: [onMainContentChange],
})
export class ShellComponent implements OnInit, OnDestroy {
  public onSideNavChange!: boolean;

  activeMenuName = "";

  mobileQuery!: MediaQueryList;

  private _mobileQueryListener!: () => void;

  browser: any;

  constructor(
    @Inject(PLATFORM_ID) platformId: any,
    private changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    if (isPlatformBrowser(platformId)) {
      this.mobileQuery = media.matchMedia("(max-width: 600px)");
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addEventListener("change", this._mobileQueryListener);
    }
  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
  }
  switchContentAfterMenuSelected(menuName: string) {
    this.activeMenuName = menuName;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change", this._mobileQueryListener);
  }

}
