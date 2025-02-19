enum DocType {
    PASSPORT = "Паспорт",
    DRIVER_LICENSE = "Водительское удостоверение",
    INTERNATIONAL_PASSPORT = "Заграничный паспорт"
}

interface IOwner {
    surname: string;
    name: string;
    patronymic: string;
    birthDate: Date;
    documentType: DocType;
    documentSeries: string;
    documentNumber: string;
    printOwnerInfo: () => string;
}

interface IVehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: IOwner;
    printVehicleInfo: () => string;
}

interface ICar extends IVehicle {
    bodyType: BodyType;
    carClass: CarClass;
}

interface IMotorbike extends IVehicle {
    frameType: string;
    isSport: boolean;
}

enum BodyType {
    SEDAN = "Седан",
    HATCHBACK = "Хэтчбек",
    SUV = "Внедорожник",
    COUPE = "Купе"
}

enum CarClass {
    ECONOMY = "Эконом",
    COMFORT = "Комфорт",
    BUSINESS = "Бизнес",
    LUXURY = "Люкс"
}

class Owner implements IOwner {
    constructor(
        private _surname: string,
        private _name: string,
        private _patronymic: string,
        private _birthDate: Date,
        private _documentType: DocType,
        private _documentSeries: string,
        private _documentNumber: string
    ) {}

    get surname(): string { return this._surname; }
    set surname(value: string) { this._surname = value; }

    get name(): string { return this._name; }
    set name(value: string) { this._name = value; }

    get patronymic(): string { return this._patronymic; }
    set patronymic(value: string) { this._patronymic = value; }

    get birthDate(): Date { return this._birthDate; }
    set birthDate(value: Date) { this._birthDate = value; }

    get documentType(): DocType { return this._documentType; }
    set documentType(value: DocType) { this._documentType = value; }

    get documentSeries(): string { return this._documentSeries; }
    set documentSeries(value: string) { this._documentSeries = value; }

    get documentNumber(): string { return this._documentNumber; }
    set documentNumber(value: string) { this._documentNumber = value; }

    printOwnerInfo(): string {
        return `Фамилия: ${this._surname}\nИмя: ${this._name}\n Отчество: ${this._patronymic}\n Дата рождения: ${this._birthDate.toLocaleDateString()}\n Тип документа: ${this._documentType}\n Серия документа: ${this._documentSeries}\n Номер документа: ${this._documentNumber}`;
    }
}

class Vehicle implements IVehicle {
    constructor(
        private _brand: string,
        private _model: string,
        private _year: number,
        private _vin: string,
        private _registrationNumber: string,
        private _owner: IOwner
    ) {}

    get brand(): string { return this._brand; }
    set brand(value: string) { this._brand = value; }

    get model(): string { return this._model; }
    set model(value: string) { this._model = value; }

    get year(): number { return this._year; }
    set year(value: number) { this._year = value; }

    get vin(): string { return this._vin; }
    set vin(value: string) { this._vin = value; }

    get registrationNumber(): string { return this._registrationNumber; }
    set registrationNumber(value: string) { this._registrationNumber = value; }

    get owner(): IOwner { return this._owner; }
    set owner(value: IOwner) { this._owner = value; }

    printVehicleInfo(): string {
        return `Марка: ${this._brand}\n Модель: ${this._model}\n Год выпуска: ${this._year}\nVIN: ${this._vin}\n Регистрационный номер: ${this._registrationNumber}`;
    }
}

class Car extends Vehicle implements ICar {
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: IOwner,
        private _bodyType: BodyType,
        private _carClass: CarClass
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
    }

    get bodyType(): BodyType { return this._bodyType; }
    set bodyType(value: BodyType) { this._bodyType = value; }

    get carClass(): CarClass { return this._carClass; }
    set carClass(value: CarClass) { this._carClass = value; }

    printVehicleInfo(): string {
        super.printVehicleInfo();
        return super.printVehicleInfo() + `\n Тип кузова: ${this._bodyType}\n Класс автомобиля: ${this._carClass}`;
    }
}

class Motorbike extends Vehicle implements IMotorbike {
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: IOwner,
        private _frameType: string,
        private _isSport: boolean
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
    }

    get frameType(): string { return this._frameType; }
    set frameType(value: string) { this._frameType = value; }

    get isSport(): boolean { return this._isSport; }
    set isSport(value: boolean) { this._isSport = value; }

    printVehicleInfo(): string {
        super.printVehicleInfo();
        return super.printVehicleInfo() + `\n Тип рамы: ${this._frameType}\n Для спорта: ${this._isSport}`;
    }
}

interface IVehicleStorage<T extends IVehicle> {
    created: Date;
    data: T[];
    getAll(): T[];
    save(data: T): void;
    remove(index: number): void;
}

class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
    private _created: Date;
    private _data: T[];

    constructor() {
        this._created = new Date();
        this._data = [];
    }

    get created(): Date { return this._created; }
    get data(): T[] { return this._data; }

    getAll(): T[] {
        return this._data;
    }

    save(data: T): void {
        this._data.push(data);
    }

    remove(index: number): void {
        this._data.splice(index, 1);
    }
}

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