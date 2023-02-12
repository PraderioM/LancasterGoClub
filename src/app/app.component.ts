import {Component} from '@angular/core';
import {getHeaderClass} from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeSelected = true;
  rulesSelected = false;
  josekleSelected = false;
  resourcesSelected = false;

  isAggressive = false;
  isLevelUp = false;

  deselectAll(): void {
    this.homeSelected = false;
    this.josekleSelected = false;
    this.rulesSelected = false;
    this.resourcesSelected = false;
  }

  selectHome(): void {
    this.deselectAll();
    this.homeSelected = true;
  }

  selectRules(): void {
    this.deselectAll();
    this.rulesSelected = true;
  }

  selectJosekle(): void {
    this.deselectAll();
    this.josekleSelected = true;
  }

  selectResources(): void {
    this.deselectAll();
    this.resourcesSelected = true;
  }

  toggleIsAggressive(): void {
    this.isAggressive = !this.isAggressive;
  }

  toggleIsLevelUp(): void {
    this.isLevelUp = !this.isLevelUp;
  }

  getHomeHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.homeSelected;
    return headerClass;
  }

  getJosekleHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.josekleSelected;
    return headerClass;
  }

  getAggressiveHeaderClass(): object {
    return getHeaderClass();
  }

  getLevelUpHeaderClass(): object {
    return getHeaderClass();
  }

  getIsAggressiveText(): string {
    return this.isAggressive? "Calm mode" : "Aggressive mode";
  }

  getIsLevelUpText(): string {
    return this.isLevelUp? "Level down" : "Level Up";
  }

  getRulesHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.rulesSelected;
    return headerClass;
  }

  getResourcesHeaderClass(): object {
    const headerClass: any = getHeaderClass();
    headerClass['w3-selected'] = this.resourcesSelected;
    return headerClass;
  }
}
