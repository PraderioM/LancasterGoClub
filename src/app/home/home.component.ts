import {Component, Input, OnInit} from '@angular/core';
import {getImageLinkFromId} from "../utils";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() isAggressive: boolean = false;
  lusuPage: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.lusuPage = window.location.href === 'https://lancastersu.co.uk/groups/lancaster-go-club'
  }

    protected readonly getImageLinkFromId = getImageLinkFromId;
}
