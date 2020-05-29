import { Component, OnInit, Input } from '@angular/core';
import { Flower } from '../flower';
import { FlowerAddService } from './flower-add.service';

import { Observable, of} from 'rxjs';

@Component({
  selector: 'app-flowers-add',
  templateUrl: './flowers-add.component.html',
  styleUrls: ['./flowers-add.component.css']
})
export class FlowersAddComponent implements OnInit {


  constructor(private flowerAddService : FlowerAddService) { }

  private flower = new Flower();

  flowers : Flower[];

  ngOnInit() {
  }

  addFlower() : void{
    console.log("Inside add flower");
    this.flowerAddService.add(this.flower).subscribe(flower => this.flowers.push(flower));
  }
  
}
