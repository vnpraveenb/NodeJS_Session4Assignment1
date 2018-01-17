var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(name, description, vehicleType, costPerKilometer) {
        this.name = name;
        this.description = description;
        this.vehicleType = vehicleType;
        this.costPerKilometer = costPerKilometer;
    }
    Vehicle.prototype.vehicleInfo = function (wheeler) {
        if (wheeler === void 0) { wheeler = 0; }
        console.log("Name: " + this.name + "\nDescription: " + this.description + "\nType: " + this.vehicleType + "\nCost:" + this.costPerKilometer);
    };
    return Vehicle;
}());
var TwoWheeler = /** @class */ (function (_super) {
    __extends(TwoWheeler, _super);
    function TwoWheeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwoWheeler.prototype.vehicleInfo = function (wheeler) {
        if (wheeler === void 0) { wheeler = 2; }
        _super.prototype.vehicleInfo.call(this, wheeler);
    };
    return TwoWheeler;
}(Vehicle));
var FourWheeler = /** @class */ (function (_super) {
    __extends(FourWheeler, _super);
    function FourWheeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FourWheeler.prototype.vehicleInfo = function (wheeler) {
        if (wheeler === void 0) { wheeler = 4; }
        _super.prototype.vehicleInfo.call(this, wheeler);
        console.log("Fuel Type: " + this.fuelType);
    };
    return FourWheeler;
}(Vehicle));
var two = new TwoWheeler("Scooter", "A Scooter", "Two Wheeler", 50);
var four = new FourWheeler("Car", "A car", "Four Wheeler", 30);
four.fuelType = "CNG";
two.vehicleInfo(2);
console.log();
four.vehicleInfo(4);
