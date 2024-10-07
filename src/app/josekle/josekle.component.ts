import { Component, OnInit } from '@angular/core';
import {getImageLinkFromId} from "../utils";

@Component({
  selector: 'app-josekle',
  templateUrl: './josekle.component.html',
  styleUrls: ['./josekle.component.css']
})
export class JosekleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  protected readonly getImageLinkFromId = getImageLinkFromId;
}
