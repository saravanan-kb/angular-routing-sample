import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  private loadedJson: any;
  public setJson(value: any) {
    this.loadedJson = value;
  }
  public getJson(): any {
    return this.loadedJson;
  }
}
