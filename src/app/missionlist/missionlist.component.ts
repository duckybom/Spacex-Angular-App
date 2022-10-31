import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  list: any;
  constructor(
    private spacexapiService: SpacexapiService,
  ) {
  }

  ngOnInit(): void {
    this.spacexapiService.getMissions().subscribe((data) => {
      this.list = data;
      console.log(data);
    })
  }
}
