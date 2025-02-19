export namespace Transport {
    export enum DocType {
        PASSPORT = "Паспорт",
        DRIVER_LICENSE = "Водительское удостоверение",
        INTERNATIONAL_PASSPORT = "Заграничный паспорт"
    }
    
    export interface IOwner {
        surname: string;
        name: string;
        patronymic: string;
        birthDate: Date;
        documentType: DocType;
        documentSeries: string;
        documentNumber: string;
        printOwnerInfo: () => string;
    }
    
    export interface IVehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: IOwner;
        printVehicleInfo: () => string;
    }
    
    export interface ICar extends IVehicle {
        bodyType: BodyType;
        carClass: CarClass;
    }
    
    export interface IMotorbike extends IVehicle {
        frameType: string;
        isSport: boolean;
    }
    
    export enum BodyType {
        SEDAN = "Седан",
        HATCHBACK = "Хэтчбек",
        SUV = "Внедорожник",
        COUPE = "Купе"
    }
    
    export enum CarClass {
        ECONOMY = "Эконом",
        COMFORT = "Комфорт",
        BUSINESS = "Бизнес",
        LUXURY = "Люкс"
    }
    
    export class Owner implements IOwner {
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
            return `Фамилия: ${this._surname}\nИмя: ${this._name}\nОтчество: ${this._patronymic}\nДата рождения: ${this._birthDate.toLocaleDateString()}\nТип документа: ${this._documentType}\nСерия документа: ${this._documentSeries}\nНомер документа: ${this._documentNumber}`;
        }
    }
    
    export class Vehicle implements IVehicle {
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
            return `Марка: ${this._brand}\nМодель: ${this._model}\nГод выпуска: ${this._year}\nVIN: ${this._vin}\nРегистрационный номер: ${this._registrationNumber}`;
        }
    }
    
    export class Car extends Vehicle implements ICar {
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
            return `${super.printVehicleInfo()}\nТип кузова: ${this._bodyType}\nКласс автомобиля: ${this._carClass}`;
        }
    }
    
    export class Motorbike extends Vehicle implements IMotorbike {
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
            return `${super.printVehicleInfo()}\nТип рамы: ${this._frameType}\nДля спорта: ${this._isSport}`;
        }
    }
    
    export class VehicleStorage<T extends IVehicle> {
        private _created: Date = new Date();
        private _data: T[] = [];
    
        get created(): Date { return this._created; }
        get data(): T[] { return this._data; }
    
        getAll(): T[] {
            return this._data;
        }
    
        save(data: T): void {
            this._data.push(data);
        }
    
        remove(index: number): void {
            if (index >= 0 && index < this._data.length) {
                this._data.splice(index, 1);
            }
        }
    }
}