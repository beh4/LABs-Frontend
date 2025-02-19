export declare namespace Transport {
    enum DocType {
        PASSPORT = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
        DRIVER_LICENSE = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435",
        INTERNATIONAL_PASSPORT = "\u0417\u0430\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u043F\u0430\u0441\u043F\u043E\u0440\u0442"
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
        SEDAN = "\u0421\u0435\u0434\u0430\u043D",
        HATCHBACK = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A",
        SUV = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",
        COUPE = "\u041A\u0443\u043F\u0435"
    }
    enum CarClass {
        ECONOMY = "\u042D\u043A\u043E\u043D\u043E\u043C",
        COMFORT = "\u041A\u043E\u043C\u0444\u043E\u0440\u0442",
        BUSINESS = "\u0411\u0438\u0437\u043D\u0435\u0441",
        LUXURY = "\u041B\u044E\u043A\u0441"
    }
    class Owner implements IOwner {
        private _surname;
        private _name;
        private _patronymic;
        private _birthDate;
        private _documentType;
        private _documentSeries;
        private _documentNumber;
        constructor(_surname: string, _name: string, _patronymic: string, _birthDate: Date, _documentType: DocType, _documentSeries: string, _documentNumber: string);
        get surname(): string;
        set surname(value: string);
        get name(): string;
        set name(value: string);
        get patronymic(): string;
        set patronymic(value: string);
        get birthDate(): Date;
        set birthDate(value: Date);
        get documentType(): DocType;
        set documentType(value: DocType);
        get documentSeries(): string;
        set documentSeries(value: string);
        get documentNumber(): string;
        set documentNumber(value: string);
        printOwnerInfo(): string;
    }
    class Vehicle implements IVehicle {
        private _brand;
        private _model;
        private _year;
        private _vin;
        private _registrationNumber;
        private _owner;
        constructor(_brand: string, _model: string, _year: number, _vin: string, _registrationNumber: string, _owner: IOwner);
        get brand(): string;
        set brand(value: string);
        get model(): string;
        set model(value: string);
        get year(): number;
        set year(value: number);
        get vin(): string;
        set vin(value: string);
        get registrationNumber(): string;
        set registrationNumber(value: string);
        get owner(): IOwner;
        set owner(value: IOwner);
        printVehicleInfo(): string;
    }
    class Car extends Vehicle implements ICar {
        private _bodyType;
        private _carClass;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: IOwner, _bodyType: BodyType, _carClass: CarClass);
        get bodyType(): BodyType;
        set bodyType(value: BodyType);
        get carClass(): CarClass;
        set carClass(value: CarClass);
        printVehicleInfo(): string;
    }
    class Motorbike extends Vehicle implements IMotorbike {
        private _frameType;
        private _isSport;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: IOwner, _frameType: string, _isSport: boolean);
        get frameType(): string;
        set frameType(value: string);
        get isSport(): boolean;
        set isSport(value: boolean);
        printVehicleInfo(): string;
    }
    class VehicleStorage<T extends IVehicle> {
        private _created;
        private _data;
        get created(): Date;
        get data(): T[];
        getAll(): T[];
        save(data: T): void;
        remove(index: number): void;
    }
}
