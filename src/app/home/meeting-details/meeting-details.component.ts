import {Component, Input, OnInit} from '@angular/core';
import {getLinkFromAssetName} from "../../utils";

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css']
})
export class MeetingDetailsComponent implements OnInit {
  @Input() meetingDay: string = '';
  @Input() meetingTime: string = '';
  @Input() linkToPlace: string = '';
  @Input() place: string = '';
  @Input() extraInformation: string = '';

  constructor() { }

  ngOnInit() {
  }

  protected readonly getImageLinkFromId = getLinkFromAssetName;
}
