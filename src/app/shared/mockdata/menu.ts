/**
 * Menu data mock
 */
export class MenuMock {
  static root = [
    {
      name: 'dashboard',
      title: 'Dashboard',
      faIcon: 'fa-tachometer',
      link: '/dashboard'
    },
    {
      name: 'dashboard-edge',
      title: 'Dashboard Edge',
      faIcon: 'fa-window-maximize',
      link: '/dashboard-edge',
      // Notify title
      notifyContent: 'new',
      // Notify title class
      notifyClass: 'bg-warn label',
    },
    {
      // Data menu name
      name: 'widgets',
      // Show title
      title: 'Widget',
      // Fontawesome icon class
      faIcon: 'fa-magic',
      // Router link
      link: '/widgets',
      // Notify title
      notifyContent: 'new',
      // Notify title class
      notifyClass: 'bg-primary label',
    },
    {
      name: 'component',
      title: 'Component',
      faIcon: 'fa-tasks',
      // Sub menu, only one level (Match Material Design)
      sub: [
        {
          name: 'bootstrap',
          title: 'Bootstrap',
          link: '/component-bootstrap'
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
          name: 'grid-list',
          title: 'Grid List',
          link: '/component-grid-list'
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
          name: 'radio-button',
          title: 'Radio Button',
          link: '/component-radio-button'
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
        },
      ]
    },
    {
      name: 'icon',
      title: 'Icon',
      faIcon: 'fa-check-circle-o',
      sub: [
        {
          name: 'material_icons',
          title: 'Material Icons',
          link: '/icon-material'
        },
        {
          name: 'fontawesome',
          title: 'Font Awesome',
          link: '/icon-fontawesome'
        },
        {
          name: 'weather_icons',
          title: 'Weather Icons',
          link: '/icon-weather'
        }
      ]
    },
    {
      name: 'apps',
      title: 'Apps',
      faIcon: 'fa-rocket',
      sub: [
        {
          name: 'calendar',
          title: 'Calendar',
          link: '/apps-calendar'
        },
        {
          name: 'explorer',
          title: 'Explorer',
          link: '/apps-explorer'
        },
        {
          name: 'mail',
          title: 'Mail',
          link: '/apps-mail'
        }
      ]
    },
    {
      name: 'maps',
      title: 'Maps',
      faIcon: 'fa-map-marker',
      notifyContent: '2',
      notifyClass: 'bg-warn label',
      sub: [
        {
          name: 'google_maps',
          title: 'Google Maps',
          link: '/maps-google'
        },
        {
          name: 'vector_maps',
          title: 'Vector Maps',
          link: '/maps-vector'
        }
      ]
    },
    {
      name: 'forms',
      title: 'Forms',
      notifyContent: '5',
      notifyClass: 'bg-accent label',
      faIcon: 'fa-pencil-square-o',
      sub: [
        {
          name: 'forms_validation',
          title: 'Validation Forms',
          link: '/forms-validation'
        },
        {
          name: 'forms_wizard',
          title: 'Wizard Forms',
          link: '/forms-wizard'
        },
        {
          name: 'forms_autocomplete',
          title: 'Autocomplete',
          link: '/forms-autocomplete'
        },
        {
          name: 'forms_upload',
          title: 'Upload',
          link: '/forms-upload'
        },
        {
          name: 'forms_tree',
          title: 'Tree',
          link: '/forms-tree'
        },
      ]
    },
    {
      name: 'tables',
      title: 'Tables',
      faIcon: 'fa-table',
      sub: [
        {
          name: 'basic',
          title: 'Basic',
          link: '/tables-basic'
        },
        {
          name: 'dynamic',
          title: 'Dynamic',
          link: '/tables-dynamic'
        },
      ]
    },
    {
      name: 'charts',
      title: 'Charts',
      faIcon: 'fa-line-chart',
      notifyContent: '3',
      notifyClass: 'bg-warn label',
      sub: [
        {
          name: 'chartjs',
          title: 'Chart.js',
          link: '/charts-chartjs'
        },
        {
          name: 'peity',
          title: 'Peity',
          link: '/charts-peity'
        },
      ]
    },
    {
      name: 'pages',
      title: 'Pages',
      faIcon: 'fa-pagelines',
      sub: [
        {
          name: 'signin',
          title: 'Sign In',
          link: '/pages-signin'
        },
        {
          name: 'signup',
          title: 'Sign Up',
          link: '/pages-signup'
        },
        {
          name: 'error',
          title: 'Error',
          link: '/pages-error'
        },
        {
          name: 'notfound',
          title: 'Not Found',
          link: '/pages-notfound'
        },
        {
          name: 'lockscreen',
          title: 'Lockscreen',
          link: '/pages-lockscreen'
        },
        {
          name: 'invoice',
          title: 'Invoice',
          link: '/pages-invoice'
        },
      ]
    },
    {
      name: 'layout',
      title: 'Layout',
      faIcon: 'fa-columns',
      sub: [
        {
          name: 'flex',
          title: 'Flex',
          link: '/layout-flex'
        },
        {
          name: 'tabs',
          title: 'Tabs',
          link: '/layout-tabs'
        },
        {
          name: 'edges',
          title: 'Edges',
          link: '/layout-edges'
        },
        {
          name: 'cards',
          title: 'Cards',
          link: '/layout-cards'
        },
        {
          name: 'fullscreen',
          title: 'Fullscreen',
          link: '/layout-fullscreen'
        },
      ]
    },
  ];
}
