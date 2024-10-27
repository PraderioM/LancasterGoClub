import {Component, Input, OnInit} from '@angular/core';
import {getLinkFromAssetName} from "../utils";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() isAggressive: boolean = false;
  @Input() isLUSUPage: boolean = false;
  meetingDetails: any = [];


  constructor(private http: HttpClient) {
    this.http.get('https://raw.githubusercontent.com/PraderioM/LancasterGoClub/refs/heads/master/src/assets/meeting_times.json')
      .subscribe(data => this.meetingDetails = data);
  }

    protected readonly getLinkFromAssetName = getLinkFromAssetName;
}
