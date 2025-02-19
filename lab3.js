var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Owner = /** @class */ (function () {
    function Owner(_surname, _name, _patronymic, _birthDate, _documentType, _documentSeries, _documentNumber) {
        this._surname = _surname;
        this._name = _name;
        this._patronymic = _patronymic;
        this._birthDate = _birthDate;
        this._documentType = _documentType;
        this._documentSeries = _documentSeries;
        this._documentNumber = _documentNumber;
    }
    Object.defineProperty(Owner.prototype, "surname", {
        get: function () { return this._surname; },
        set: function (value) { this._surname = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "name", {
        get: function () { return this._name; },
        set: function (value) { this._name = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "patronymic", {
        get: function () { return this._patronymic; },
        set: function (value) { this._patronymic = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "birthDate", {
        get: function () { return this._birthDate; },
        set: function (value) { this._birthDate = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "documentType", {
        get: function () { return this._documentType; },
        set: function (value) { this._documentType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "documentSeries", {
        get: function () { return this._documentSeries; },
        set: function (value) { this._documentSeries = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "documentNumber", {
        get: function () { return this._documentNumber; },
        set: function (value) { this._documentNumber = value; },
        enumerable: false,
        configurable: true
    });
    Owner.prototype.printOwnerInfo = function () {
        return "\u0424\u0430\u043C\u0438\u043B\u0438\u044F: ".concat(this._surname, "\n\u0418\u043C\u044F: ").concat(this._name, "\n \u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E: ").concat(this._patronymic, "\n \u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(this._birthDate.toLocaleDateString(), "\n \u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ").concat(this._documentType, "\n \u0421\u0435\u0440\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ").concat(this._documentSeries, "\n \u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ").concat(this._documentNumber);
    };
    return Owner;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle(_brand, _model, _year, _vin, _registrationNumber, _owner) {
        this._brand = _brand;
        this._model = _model;
        this._year = _year;
        this._vin = _vin;
        this._registrationNumber = _registrationNumber;
        this._owner = _owner;
    }
    Object.defineProperty(Vehicle.prototype, "brand", {
        get: function () { return this._brand; },
        set: function (value) { this._brand = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "year", {
        get: function () { return this._year; },
        set: function (value) { this._year = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "vin", {
        get: function () { return this._vin; },
        set: function (value) { this._vin = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "registrationNumber", {
        get: function () { return this._registrationNumber; },
        set: function (value) { this._registrationNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.printVehicleInfo = function () {
        return "\u041C\u0430\u0440\u043A\u0430: ".concat(this._brand, "\n \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this._model, "\n \u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ").concat(this._year, "\nVIN: ").concat(this._vin, "\n \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ").concat(this._registrationNumber);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, year, vin, registrationNumber, owner, _bodyType, _carClass) {
        var _this = _super.call(this, brand, model, year, vin, registrationNumber, owner) || this;
        _this._bodyType = _bodyType;
        _this._carClass = _carClass;
        return _this;
    }
    Object.defineProperty(Car.prototype, "bodyType", {
        get: function () { return this._bodyType; },
        set: function (value) { this._bodyType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "carClass", {
        get: function () { return this._carClass; },
        set: function (value) { this._carClass = value; },
        enumerable: false,
        configurable: true
    });
    Car.prototype.printVehicleInfo = function () {
        _super.prototype.printVehicleInfo.call(this);
        return _super.prototype.printVehicleInfo.call(this) + "\n \u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this._bodyType, "\n \u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ").concat(this._carClass);
    };
    return Car;
}(Vehicle));
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(brand, model, year, vin, registrationNumber, owner, _frameType, _isSport) {
        var _this = _super.call(this, brand, model, year, vin, registrationNumber, owner) || this;
        _this._frameType = _frameType;
        _this._isSport = _isSport;
        return _this;
    }
    Object.defineProperty(Motorbike.prototype, "frameType", {
        get: function () { return this._frameType; },
        set: function (value) { this._frameType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorbike.prototype, "isSport", {
        get: function () { return this._isSport; },
        set: function (value) { this._isSport = value; },
        enumerable: false,
        configurable: true
    });
    Motorbike.prototype.printVehicleInfo = function () {
        _super.prototype.printVehicleInfo.call(this);
        return _super.prototype.printVehicleInfo.call(this) + "\n \u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this._frameType, "\n \u0414\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0430: ").concat(this._isSport);
    };
    return Motorbike;
}(Vehicle));
var VehicleStorage = /** @class */ (function () {
    function VehicleStorage() {
        this._created = new Date();
        this._data = [];
    }
    Object.defineProperty(VehicleStorage.prototype, "created", {
        get: function () { return this._created; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleStorage.prototype, "data", {
        get: function () { return this._data; },
        enumerable: false,
        configurable: true
    });
    VehicleStorage.prototype.getAll = function () {
        return this._data;
    };
    VehicleStorage.prototype.save = function (data) {
        this._data.push(data);
    };
    VehicleStorage.prototype.remove = function (index) {
        this._data.splice(index, 1);
    };
    return VehicleStorage;
}());
var owner = new Owner("Иванов", "Иван", "Иванович", new Date(1980, 1, 1), DocType.PASSPORT, "1234", "567890");
var car = new Car("Toyota", "Corolla", 2015, "12345678901234567", "A123BC", owner, BodyType.SEDAN, CarClass.COMFORT);
var motorbike = new Motorbike("Yamaha", "YZF-R1", 2020, "98765432109876543", "M123XY", owner, "Стальная", true);
var vehicleStorage = new VehicleStorage();
vehicleStorage.save(car);
vehicleStorage.save(motorbike);
console.log(owner.printOwnerInfo());
console.log(car.printVehicleInfo());
console.log(motorbike.printVehicleInfo());
vehicleStorage.getAll().forEach(function (vehicle) { return console.log(vehicle.printVehicleInfo()); });
