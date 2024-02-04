export default function addCartValueSurcharge(cartValue: number) {

    const MINIMUM_VALUE = 10;
    let surcharge = 0;

    if (cartValue < MINIMUM_VALUE) {
        surcharge = MINIMUM_VALUE - cartValue;
        console.log(`Adding an extra surcharge of ${surcharge} € for cart value`);
    }

    return surcharge;
}