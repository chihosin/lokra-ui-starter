import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-forms-autocomplete',
  templateUrl: './forms-autocomplete.component.html',
  styleUrls: [
    './forms-autocomplete.component.scss'
  ]
})
export class FormsAutocompleteComponent implements OnInit {

  items: any = ItemsMock.items;
  item: any;

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Autocomplete';
  }

  ngOnInit() {
  }

}

class ItemsMock {
  static items = [
    {
      name: 'dashboard',
      title: 'Dashboard',
      faIcon: 'fa-tachometer',
      link: '/dashboard'
    },
    {
      name: 'buttons',
      title: 'Buttons',
      link: '/component-buttons'
    },
    {
      name: 'progress',
      title: 'Progress',
      link: '/component-progress'
    },
    {
      name: 'card',
      title: 'Card',
      link: '/component-card'
    },
    {
      name: 'general',
      title: 'General',
      link: '/component-general'
    },
    {
      name: 'dialog',
      title: 'Dialog',
      link: '/component-dialog'
    },
    {
      name: 'notifications',
      title: 'Notifications',
      link: '/component-notifications'
    },
    {
      name: 'checkbox',
      title: 'Checkbox',
      link: '/component-checkbox'
    },
    {
      name: 'chips',
      title: 'Chips',
      link: '/component-chips'
    },
    {
      name: 'date-picker',
      title: 'Date Picker',
      link: '/component-date-picker'
    },
    {
      name: 'list',
      title: 'List',
      link: '/component-list'
    },
    {
      name: 'media-player',
      title: 'Media Player',
      link: '/component-media-player'
    },
    {
      name: 'menu',
      title: 'Menu',
      link: '/component-menu'
    },
    {
      name: 'select',
      title: 'Select',
      link: '/component-select'
    },
    {
      name: 'slide-toggle',
      title: 'Slide Toggle',
      link: '/component-slide-toggle'
    },
    {
      name: 'slider',
      title: 'Slider',
      link: '/component-slider'
    },
    {
      name: 'tabs',
      title: 'Tabs',
      link: '/component-tabs'
    },
    {
      name: 'text-editor',
      title: 'Text Editor',
      link: '/component-text-editor'
    },
    {
      name: 'toolbar',
      title: 'Toolbar',
      link: '/component-toolbar'
    },
    {
      name: 'tooltip',
      title: 'Tooltip',
      link: '/component-tooltip'
    }
  ];
}
