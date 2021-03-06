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

  private flowersUrl = 'http://135.253.163.44:9002/webflorist/list';  

  constructor(private http: HttpClient, private flowerService: FlowerService) { }

  ngOnInit() {
      this.getFlowers();
  }

  onSelect(flower : Flower): void{
    console.log(flower);
    this.selectedFlower = flower;
  }

  getFlowers() : void {
    console.log("Inside component "+ this.flowers);
    this.flowerService
    .getFlowers()
    .subscribe((data:any) => {
      console.log(data);
      this.flowers = data;
    });
  }
}
