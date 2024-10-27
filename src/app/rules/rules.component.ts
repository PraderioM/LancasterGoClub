import {Component, Input, OnInit} from '@angular/core';
import {getLinkFromAssetName} from "../utils";

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  @Input() isLevelUp: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly getImageLinkFromId = getLinkFromAssetName;
}
