import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PenguinService } from './service/penguin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public constructor(private titleService: Title,  public penguinService: PenguinService) {
    this.titleService.setTitle('Penguin Statistics - 明日方舟素材掉落统计');
    this.penguinService.updateStageList().subscribe();
    this.penguinService.updateItemList().subscribe();
  }

  collapseNav() {
    this.penguinService.isCollapsed = true;
  }
  
}
