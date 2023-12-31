import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SiblingCommunicationService {
  private sharedDataSubject = new BehaviorSubject<string>('Initial Value');
  sharedData$ = this.sharedDataSubject.asObservable();

  setData(data: string) {
    this.sharedDataSubject.next(data);
  }
}
