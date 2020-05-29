export class Flower{
    flowerId ?: number;
    flowerName : string;
    noOfFlowers ?: number;
    costOfFlowers : number;
    discount ?: number;
    image ?: any;

    constructor(flowerId? : number, flowerName? : string, noOfFlowers? : number, costOfFlowers? : number,
    discount? : number){
        this.flowerId = flowerId;
        this.flowerName = flowerName;
        this.noOfFlowers = noOfFlowers;
        this.discount = discount;
        this.costOfFlowers = costOfFlowers;
    }
}