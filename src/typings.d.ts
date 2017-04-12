/* SystemJS module definition */
declare var module: {
  id: string;
};
declare module '*';
declare module 'clappr';
declare module 'c3';
declare module 'd3';
/**
 * Added JQuery plugin definition here.
 */
// Peity
declare namespace JQuery.peity {
  interface PeityStatic {
    (type: string, options?: any): any;
  }
}
// Datatable
declare namespace JQuery.dataTable {
  interface DataTableStatic {
    (options?: any): any;
  }
}
// Unslider
declare namespace JQuery.unslider {
  interface UnsliderStatic {
    (options?: any): any;
  }
}
// VectorMap
declare namespace JQuery.vectorMap {
  interface VectorMapStatic {
    (options: any): any;
  }
}
// FullCalendar
declare namespace JQuery.fullCalendar {
  interface FullCalendarStatic {
    (options: any): any;
  }
}
// Fullscreen
declare namespace JQuery.fullScreen {
  interface FullScreenStatic {
    (options?: any): any;
  }
  interface ToggleFullScreenStatic {
    (): any;
  }
}
interface JQuery {
  peity: JQuery.peity.PeityStatic;
  dataTable: JQuery.dataTable.DataTableStatic;
  unslider: JQuery.unslider.UnsliderStatic;
  vectorMap: JQuery.vectorMap.VectorMapStatic;
  fullCalendar: JQuery.fullCalendar.FullCalendarStatic;
  fullScreen: JQuery.fullScreen.FullScreenStatic;
  toggleFullScreen: JQuery.fullScreen.ToggleFullScreenStatic;
}
