import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  misson!: Mission;


  constructor(
    private spacexapiService: SpacexapiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.spacexapiService
      .getMissionByID(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.misson = data;

      });
  }
}
