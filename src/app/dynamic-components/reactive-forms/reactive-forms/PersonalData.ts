export class PersonalData {
    private _name: string;
    private _surname: string;
    private _birthDate!: Date;
    private _address!: {
        _street: string;
        _building: number;
        _city: string;
    };
    private _login: string;
    private _password: string;
    
    constructor(name: string, surname: string, login: string, password: string, address: { street: string; building: number; city: string; } | undefined) {
        this._name = name;
        this._surname = surname;
        this._login = login;
        this._password = password;
        if (address)
            this._address = {
                _street: address.street,
                _building: address.building,
                _city: address.city
            };
    }

    setAdress(city?: string, street?: string, building?: number) {
        if (building)
            this._address._building = building;
        if (street)
            this._address._street = street;
        if (city)
            this._address._city = city
    }

    getData(): PersonalData {
        return this;
    }

    isValid() {
        return (this._name && this._surname && this._login && this._password);
    }
    get name(): string {
        return this._name;
    }

    get surname(): string {
        return this._surname;
    }

    get birthDate(): Date | undefined {
        return this._birthDate;
    }

    get address(): {
        street: string;
        building: number;
        city: string;
    } | undefined {
        if (this._address) {
            return {
                street: this._address._street,
                building: this._address._building,
                city: this._address._city
            };
        } else {
            return undefined;
        }
    }

    get login(): string {
        return this._login;
    }

    get password(): string {
        return this._password;
    }

    toString(): string {
        let addressString = '';
        if (this.address) {
            addressString = `Адрес: ${this.address.street}, дом ${this.address.building}, город ${this.address.city}\n`;
        }

        return `name: ${this.name}, surname: ${this.surname}, birth date: ${this.birthDate ? this.birthDate.toDateString() : 'none'}\n${addressString}, login: ${this.login}, password: ${this.password}`;
    }

}