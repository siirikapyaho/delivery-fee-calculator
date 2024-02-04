export default function addDistanceSurcharge(distance: number) {
    const BASE_FARE = 2;
    const BASE_DISTANCE = 1000;
    const ADDITIONAL_DISTANCE = 500;
    const ADDITIONAL_FEE = 1;

    let surcharge = 0;

    console.log(`Adding a base fare of 2 €`);
    surcharge += BASE_FARE;
  
    if (distance > BASE_DISTANCE) {
        for (let i = BASE_DISTANCE; i < distance; i += ADDITIONAL_DISTANCE) {
        surcharge += ADDITIONAL_FEE;
      }
  
      console.log(`Adding an extra surcharge of ${surcharge} € for delivery distance of ${distance} meters`);
    }

    return surcharge;
}