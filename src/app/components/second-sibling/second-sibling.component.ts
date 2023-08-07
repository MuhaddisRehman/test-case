import { Component } from '@angular/core';
import { SiblingCommunicationService } from 'src/app/services/sibling-communication.service';

@Component({
  selector: 'app-second-sibling',
  templateUrl: './second-sibling.component.html',
  styleUrls: ['./second-sibling.component.css'],
})
export class SecondSiblingComponent {
  sharedData!: string;
  constructor(private sharedService: SiblingCommunicationService) {
    this.sharedService.sharedData$.subscribe((data) => {
      this.sharedData = data;
    });
  }
  updateSharedData = () => {
    this.sharedService.setData('New data from Component A');
  };
}
