import { Transport } from "./lab4.js";
import DocType = Transport.DocType;
import BodyType = Transport.BodyType;
import CarClass = Transport.CarClass;
import Owner = Transport.Owner;
import Car = Transport.Car;
import Motorbike = Transport.Motorbike;
import IVehicle = Transport.IVehicle;
import VehicleStorage = Transport.VehicleStorage;

const owner = new Owner("Романов", "Роман", "Романович", new Date(1990, 1, 2), DocType.PASSPORT, "1234", "567890");
const car = new Car("BMW", "M8", 2015, "12345678901234567", "A123BC", owner, BodyType.SEDAN, CarClass.COMFORT);
const motorbike = new Motorbike("Yamaha", "YZF-R1", 2020, "98765432109876543", "M123XY", owner, "Стальная", true);

const vehicleStorage = new VehicleStorage<IVehicle>();
vehicleStorage.save(car);
vehicleStorage.save(motorbike);

console.log(owner.printOwnerInfo());
console.log(car.printVehicleInfo());
console.log(motorbike.printVehicleInfo());

vehicleStorage.getAll().forEach(vehicle => console.log(vehicle.printVehicleInfo()));