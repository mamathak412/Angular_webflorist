import { Component, OnInit, Input } from '@angular/core';
import { Flower } from './flower';
import { FLOWERS } from '../mock-flowers';
import { FlowerService } from './flower.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {

  private flowers : Flower[] = [];

  selectedFlower : Flower;

  flower : Flower;

  @Input()
  customer : string;

  private flowersUrl = 'http://localhost:8080/rest/webflorist/list';  

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.getFlowers();
  }

  onSelect(flower : Flower): void{
    console.log(flower);
    this.selectedFlower = flower;
  }

  getFlowers() : void {
    console.log("Inside component "+ this.flowers);
  }

}
