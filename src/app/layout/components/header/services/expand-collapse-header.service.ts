import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpandCollapseHeaderService {
  private isCollapseSingleDisabled$: Subject<boolean> = new Subject<boolean>();

  private expandCollapseSingle$: Subject<boolean> = new Subject<boolean>();

  private expandCollapseAll$: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  public setIsCollapseSingleDisabled(isDisabled: boolean) {
    console.log('setIsCollapseSingleDisabled', isDisabled);
    this.isCollapseSingleDisabled$.next(isDisabled);
  }

  public setExpandCollapseSingle(isExpanded: boolean) {
    this.expandCollapseSingle$.next(isExpanded);
  }

  public setExpandCollapseAll(isExpanded: boolean) {
    this.expandCollapseAll$.next(isExpanded);
  }

  public get isCollapseSingleDisabled() {
    return this.isCollapseSingleDisabled$;
  };


  public get expandCollapseSingle() {
    return this.expandCollapseSingle$;
  }

  public get expandCollapseAll() {
    return this.expandCollapseAll$;
  }
}
