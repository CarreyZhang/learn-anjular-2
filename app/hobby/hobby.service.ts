export class Hobby {    
    constructor(public id: number, public name: string) {
        // code...
    }
}

const HOBBY = [
    new Hobby(1, 'running'),
    new Hobby(2, 'playing basketball'),
    new Hobby(3, 'ping bang')
]

let hobbyPromise = Promise.resolve(HOBBY);

import { Injectable } from '@angular/core';

@Injectable()
export class HobbyService {
    getHobbyes() {return hobbyPromise};
}
