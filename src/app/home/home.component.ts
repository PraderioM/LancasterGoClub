import {Component, Input, OnInit} from '@angular/core';
import {getImageLinkFromId} from "../utils";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() isAggressive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

    protected readonly getImageLinkFromId = getImageLinkFromId;
}
