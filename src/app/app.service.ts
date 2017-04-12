import {Injectable} from '@angular/core';

/**
 * Internal State
 *
 * Declare your custom state key any type here.
 */
export type InternalStateType = {
  [key: string]: any,
  appName: string,
  darkMode: boolean,
  defaultLang: string,
  topnavTitle: string,
  messagePanelOpen: boolean,
  sidenavOpen: boolean,
  sidenavMode: string,
  sidenavCollapse: boolean,
  pageFullscreen: boolean,
  pageFooter: boolean,
  initial: boolean,
};

/**
 * App service
 */
@Injectable()
export class AppService {

  // Set your states default value.
  private state: InternalStateType = {
    appName: 'Lokra UI Starter',
    darkMode: false,
    defaultLang: 'en',
    topnavTitle: 'Lokra',
    messagePanelOpen: false,
    sidenavOpen: false,
    sidenavMode: 'over',
    sidenavCollapse: true,
    pageFullscreen: false,
    pageFooter: false,
    initial: false,
  };

  /**
   * Get entire states.
   *
   * @return  {InternalStateType} State do not respond to changes.
   */
  public cloneState(): InternalStateType {
    return JSON.parse(JSON.stringify(this.state));
  }

  /**
   * Reload entire states.
   *
   * @param state
   */
  public reloadState(state: InternalStateType) {
    this.state = state;
  }

  /**
   * Get state by key.
   *
   * You can get state value like:
   *
   * Store:
   * 1. appName: string = appService.getState.appName;
   * 2. appName: string = appService.getState['appName'];
   *
   * Change:
   * 1. appService.getState.appName = appName;
   * 2. appService.getState['appName'] = appName;
   *
   * @param prop State key name.
   * @return {InternalStateType} State respond to changes.
   */
  public getState(prop?: any): InternalStateType {
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  /**
   * Set state by key and value.
   *
   * @param prop State key name.
   * @param value State value.
   * @return {any} State value.
   */
  public setState(prop: string, value: any) {
    return this.state[prop] = value;
  }
}
