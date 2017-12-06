import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { MenuMock } from './shared/mockdata/menu';
import { SearchMock } from './shared/mockdata/search';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogThemeComponent } from './shared/dialog/dialog-theme/dialog-theme.component';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'lk-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent implements OnInit {

  // Mock Menu
  mainMenu = MenuMock.root;
  // Mock search item
  searchItems = SearchMock.items;
  searchItem: any;
  showTopnavSearch: boolean;
  activeSubMenuName: string;
  date: Date;
  snackBarRef: any;

  constructor(private appService: AppService,
              private dialog: MatDialog,
              private translate: TranslateService,
              private router: Router,
              private snackBar: MatSnackBar) {
    // Change your page title here
    appService.getState().topnavTitle = 'Loading';
    translate.addLangs(['en', 'zh-cn']);
    translate.setDefaultLang(appService.getState().defaultLang);
    this.date = new Date();
    setInterval(() => {
      this.date = new Date();
    }, 1000);
    this.snackBarRef = this.snackBar.open('Launch success!', 'Done', {duration: 5000,});
  }

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    let bodyWidth: number = document.body.clientWidth;
    if (bodyWidth > 960) {
      if (this.appService.getState().sidenavMode !== 'side') {
        this.appService.getState().sidenavOpen = true;
      }
      this.appService.getState().sidenavMode = 'side';
    } else if (bodyWidth <= 960 && bodyWidth > 600) {
      this.appService.getState().sidenavMode = 'push';
      this.appService.getState().sidenavOpen = false;
    } else if (bodyWidth <= 600) {
      this.appService.getState().sidenavMode = 'over';
      this.appService.getState().sidenavOpen = false;
    }
  }

  toggleTopnavSearch() {
    if (this.appService.getState().sidenavMode === 'over') {
      this.showTopnavSearch = false;
    } else {
      this.showTopnavSearch = !this.showTopnavSearch;
    }
  }

  toggleSidenavCollapse() {
    if (this.appService.getState().sidenavCollapse) {
      this.resizeSidenav();
    }
  }

  toggleSidenav() {
    this.appService.getState().sidenavOpen = !this.appService.getState().sidenavOpen;
    this.resizeSidenav();
  }

  closeSidenav() {
    this.appService.getState().sidenavOpen = false;
    this.resizeSidenav();
  }

  openSidenav() {
    this.closeMessagePanel();
    this.appService.getState().sidenavOpen = true;
    this.resizeSidenav();
  }

  resizeSidenav() {
    if (this.appService.getState().sidenavMode === 'side') {
      let resizeEvent = document.createEvent('HTMLEvents');
      resizeEvent.initEvent('resize', true, true);
      document.dispatchEvent(resizeEvent);
    }
  }

  toggleSidenavMenu(menuName: string, isSub: boolean, isParent: boolean) {
    if (isParent) {
      this.activeSubMenuName = this.activeSubMenuName === menuName ? null : menuName;
      return;
    }

    if (isSub) {
      if (this.appService.getState().sidenavMode === 'push' ||
        this.appService.getState().sidenavMode === 'over') {
        this.toggleSidenav();
      }
      return;
    }

    this.activeSubMenuName = null;
    if (this.appService.getState().sidenavMode === 'push' ||
      this.appService.getState().sidenavMode === 'over') {
      this.toggleSidenav();
    }
  }

  toggleMessagePanel() {
    this.appService.getState().messagePanelOpen = !this.appService.getState().messagePanelOpen;
  }

  openMessagePanel() {
    if (this.appService.getState().sidenavMode === 'push' ||
      this.appService.getState().sidenavMode === 'over') {
      this.closeSidenav();
    }
    this.appService.getState().messagePanelOpen = true;
  }

  closeMessagePanel() {
    this.appService.getState().messagePanelOpen = false;
  }

  toggleFullscreen() {
    $(document).toggleFullScreen();
  }

  selectedSearchItem(event) {
    if (this.searchItems) {
      for (let item of this.searchItems) {
        if (item.link === this.searchItem) {
          this.router.navigate([this.searchItem]);
          break;
        }
      }
    }
  }

  openThemeDialog() {
    let dialogRef = this.dialog.open(DialogThemeComponent);
  }

}
