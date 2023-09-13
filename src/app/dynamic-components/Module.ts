import { Component, Type } from "@angular/core";

export class Module {
    static id: number = 0;
    private _moduleId: number;
    constructor(
        private _name: string,
        private _shortName: string,
        private _intro: string,
        private _component: Type<any>
    ) { this._moduleId = Module.id + 1; 
    Module.id++}

    get name() {
        return this._name;
    }

    get shortName() {
        return this._shortName;
    }

    get id() {
        return this._moduleId;
    }

    get intro() {
        return this._intro;
    }

    get component() {
        return this._component;
    }
}
