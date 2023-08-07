import { Component } from '@angular/core';
import { SiblingCommunicationService } from 'src/app/services/sibling-communication.service';

@Component({
  selector: 'app-first-sibling',
  templateUrl: './first-sibling.component.html',
  styleUrls: ['./first-sibling.component.css'],
})
export class FirstSiblingComponent {
  sharedData!: string;

  constructor(private sharedService: SiblingCommunicationService) {
    this.sharedService.sharedData$.subscribe((data) => {
      this.sharedData = data;
    });
  }
  updateSharedData(newData: any) {
    this.sharedService.setData(newData.value);
  }
}
