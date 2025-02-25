var DocType;
(function (DocType) {
    DocType["PASSPORT"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    DocType["DRIVER_LICENSE"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    DocType["INTERNATIONAL_PASSPORT"] = "\u0417\u0430\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u043F\u0430\u0441\u043F\u043E\u0440\u0442";
})(DocType || (DocType = {}));
var BodyType;
(function (BodyType) {
    BodyType["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["HATCHBACK"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    BodyType["COUPE"] = "\u041A\u0443\u043F\u0435";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["ECONOMY"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["COMFORT"] = "\u041A\u043E\u043C\u0444\u043E\u0440\u0442";
    CarClass["BUSINESS"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    CarClass["LUXURY"] = "\u041B\u044E\u043A\u0441";
})(CarClass || (CarClass = {}));
class Owner {
    constructor(_surname, _name, _patronymic, _birthDate, _documentType, _documentSeries, _documentNumber) {
        this._surname = _surname;
        this._name = _name;
        this._patronymic = _patronymic;
        this._birthDate = _birthDate;
        this._documentType = _documentType;
        this._documentSeries = _documentSeries;
        this._documentNumber = _documentNumber;
    }
    get surname() { return this._surname; }
    set surname(value) { this._surname = value; }
    get name() { return this._name; }
    set name(value) { this._name = value; }
    get patronymic() { return this._patronymic; }
    set patronymic(value) { this._patronymic = value; }
    get birthDate() { return this._birthDate; }
    set birthDate(value) { this._birthDate = value; }
    get documentType() { return this._documentType; }
    set documentType(value) { this._documentType = value; }
    get documentSeries() { return this._documentSeries; }
    set documentSeries(value) { this._documentSeries = value; }
    get documentNumber() { return this._documentNumber; }
    set documentNumber(value) { this._documentNumber = value; }
    printOwnerInfo() {
        return `Фамилия: ${this._surname}\nИмя: ${this._name}\nОтчество: ${this._patronymic}\nДата рождения: ${this._birthDate.toLocaleDateString()}\nТип документа: ${this._documentType}\nСерия документа: ${this._documentSeries}\nНомер документа: ${this._documentNumber}`;
    }
}
class Vehicle {
    constructor(_brand, _model, _year, _vin, _registrationNumber, _owner) {
        this._brand = _brand;
        this._model = _model;
        this._year = _year;
        this._vin = _vin;
        this._registrationNumber = _registrationNumber;
        this._owner = _owner;
    }
    get brand() { return this._brand; }
    set brand(value) { this._brand = value; }
    get model() { return this._model; }
    set model(value) { this._model = value; }
    get year() { return this._year; }
    set year(value) { this._year = value; }
    get vin() { return this._vin; }
    set vin(value) { this._vin = value; }
    get registrationNumber() { return this._registrationNumber; }
    set registrationNumber(value) { this._registrationNumber = value; }
    get owner() { return this._owner; }
    set owner(value) { this._owner = value; }
    printVehicleInfo() {
        return `Марка: ${this._brand}\nМодель: ${this._model}\nГод выпуска: ${this._year}\nVIN: ${this._vin}\nРегистрационный номер: ${this._registrationNumber}`;
    }
}
class Car extends Vehicle {
    constructor(brand, model, year, vin, registrationNumber, owner, _bodyType, _carClass) {
        super(brand, model, year, vin, registrationNumber, owner);
        this._bodyType = _bodyType;
        this._carClass = _carClass;
    }
    get bodyType() { return this._bodyType; }
    set bodyType(value) { this._bodyType = value; }
    get carClass() { return this._carClass; }
    set carClass(value) { this._carClass = value; }
    printVehicleInfo() {
        return super.printVehicleInfo() + `\nТип кузова: ${this._bodyType}\nКласс автомобиля: ${this._carClass}`;
    }
}
class Motorbike extends Vehicle {
    constructor(brand, model, year, vin, registrationNumber, owner, _frameType, _isSport) {
        super(brand, model, year, vin, registrationNumber, owner);
        this._frameType = _frameType;
        this._isSport = _isSport;
    }
    get frameType() { return this._frameType; }
    set frameType(value) { this._frameType = value; }
    get isSport() { return this._isSport; }
    set isSport(value) { this._isSport = value; }
    printVehicleInfo() {
        return super.printVehicleInfo() + `\nТип рамы: ${this._frameType}\nДля спорта: ${this._isSport}`;
    }
    getFrameInfo() {
        return JSON.stringify({ frameType: this._frameType, isSport: this._isSport }, null, 2);
    }
}
class VehicleStorage {
    constructor() {
        this._created = new Date();
        this._data = [];
    }
    get created() { return this._created; }
    get data() { return this._data; }
    getAll() { return this._data; }
    save(data) { this._data.push(data); }
    remove(index) { this._data.splice(index, 1); }
    sortByOwnerSurname() {
        this._data.sort((a, b) => a.owner.surname.localeCompare(b.owner.surname));
    }
    findByOwnerDocumentPrefix(prefix) {
        return this._data.filter(vehicle => vehicle.owner.documentSeries.startsWith(prefix));
    }
    printOwners() {
        console.log("\n👤 Список владельцев транспортных средств:");
        this._data.forEach(vehicle => {
            console.log(vehicle.owner.printOwnerInfo());
        });
    }
}
const owner1 = new Owner("Иванов", "Иван", "Иванович", new Date(1990, 1, 2), DocType.PASSPORT, "1234", "567890");
const owner2 = new Owner("Петров", "Петр", "Петрович", new Date(1985, 5, 10), DocType.DRIVER_LICENSE, "5678", "123456");
const owner3 = new Owner("Сидоров", "Сидор", "Сидорович", new Date(1992, 8, 22), DocType.INTERNATIONAL_PASSPORT, "1234", "654321");
const car1 = new Car("BMW", "X5", 2020, "1A2B3C4D5E6F7G8H9", "A123BC", owner3, BodyType.SUV, CarClass.BUSINESS);
const car2 = new Car("Toyota", "Camry", 2018, "9H8G7F6E5D4C3B2A1", "B456CD", owner1, BodyType.SEDAN, CarClass.COMFORT);
const motorbike1 = new Motorbike("Yamaha", "YZF-R6", 2021, "1Y2A3M4A5H6A7", "M789XY", owner2, "Алюминиевая", true);
const vehicleStorage = new VehicleStorage();
vehicleStorage.save(car1);
vehicleStorage.save(car2);
vehicleStorage.save(motorbike1);
console.log("Данные до сортировки:");
vehicleStorage.printOwners();
vehicleStorage.getAll().forEach(vehicle => console.log(vehicle.printVehicleInfo()));
vehicleStorage.sortByOwnerSurname();
console.log("\nДанные после сортировки по фамилии владельца:");
vehicleStorage.getAll().forEach(vehicle => console.log(vehicle.printVehicleInfo()));
const foundVehicles = vehicleStorage.findByOwnerDocumentPrefix("1234");
console.log("\nНайденные ТС по серии документа '1234':");
foundVehicles.forEach(vehicle => console.log(vehicle.printVehicleInfo()));
console.log("\nИнформация о мотоцикле:");
console.log(motorbike1.getFrameInfo());
