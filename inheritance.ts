 
class Vehicle{
    name:string;
    description:string;
    vehicleType:string;
    costPerKilometer:number;

    constructor(name:string, description:string, vehicleType:string, costPerKilometer:number){
        this.name = name;
        this.description= description;
        this.vehicleType= vehicleType;
        this.costPerKilometer=costPerKilometer;
    }

    vehicleInfo(wheeler: number = 0){
        console.log("Name: " + this.name +"\nDescription: " + this.description + "\nType: " +this.vehicleType + "\nCost:" +this.costPerKilometer);
    }

}
 
class TwoWheeler extends Vehicle{
    
    vehicleInfo(wheeler=2){
        super.vehicleInfo(wheeler);
    }
}

class FourWheeler extends Vehicle{
    fuelType:string;

    vehicleInfo(wheeler=4){
        super.vehicleInfo(wheeler);
        console.log("Fuel Type: " + this.fuelType );
    }
    
}

var two = new TwoWheeler("Scooter", "A Scooter", "Two Wheeler", 50);
var four= new FourWheeler("Car", "A car", "Four Wheeler", 30);
four.fuelType="CNG";

two.vehicleInfo(2);
console.log();
four.vehicleInfo(4);
 
 
 