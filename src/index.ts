interface Trip {
    length: number;
}

function roundTripDistance<T extends Trip>(oneWayTrip: T): number {
    return oneWayTrip.length * 2;
}

console.log(roundTripDistance({ length: 100 })); // 200
console.log(roundTripDistance("난관지연")); // 200

function makeEmptyArray<T>(): T[] {
    return [];
}

const messages = makeEmptyArray(); // string[]
messages.push("안녕?");