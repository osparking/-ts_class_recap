interface Trip {
    distance: number;
}

function roundTripDistance<T extends Trip>(oneWayTrip: T): number {
    return oneWayTrip.distance * 2;
}

console.log(roundTripDistance({ distance: 100 })); // 200
// console.log(roundTripDistance("난관지연")); // 200