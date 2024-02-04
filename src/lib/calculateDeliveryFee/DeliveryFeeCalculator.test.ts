import { expect, test } from 'vitest'
import DeliveryFeeCalculator from './DeliveryFeeCalculator'

type FactoryParams = {
    minimumCartValue? : number
    freeDeliveryLimit? : number
    baseFare? : number
    baseDistance? : number
    additionalDistance? : number
    additionalFee? : number
}

function deliveryFeeCalculatorFactory(params?: FactoryParams){
    
    const defaultValues = {
        minimumCartValue: 10,
        freeDeliveryLimit: 200,
        baseFare: 2,
        baseDistance: 1000,
        additionalDistance: 500,
        additionalFee: 1
    }

    return new DeliveryFeeCalculator({...defaultValues, ...params})
}

test('if the cart value is less than minimum, cart value surcharge equals the difference', () => {
    const cartValue = 7;
    const calculator = deliveryFeeCalculatorFactory();
    expect(calculator.calculateCartValueSurcharge(cartValue)).toBe(calculator.minimumCartValue - cartValue)
})

test('if the cart value is less than minimum, cart value surcharge equals the difference', () => {
    const MINIMUM_VALUE = 10;
    const BASE_FARE = 2;
    const cartValues = [3,5,7];
    const expectedSums = cartValues.map(v=>(MINIMUM_VALUE - v))

    const params = {
        minimumCartValue: MINIMUM_VALUE,
        baseFare: BASE_FARE
    }

    const calculator = deliveryFeeCalculatorFactory(params);
    for(let i = 0; i < cartValues.length; i++){
       expect(calculator.calculateCartValueSurcharge(cartValues[i])).toBe(expectedSums[i])
    }
})

test('if the cart value is equal to or more than minimum, no surcharge is added', () => {
    const cartValue = 10;

    const calculator = deliveryFeeCalculatorFactory();
    expect(calculator.calculateCartValueSurcharge(cartValue)).toBe(0);
})

test('if the cart value is equal to or more than free delivery limit, delivery is free', () => {
    const cartValue = 200;

    const calculator = deliveryFeeCalculatorFactory();
    expect(calculator.calculateCartValueSurcharge(cartValue)).toBe(0);
})

test('if distance is equal to or less than base distance, the surcharge equals base fare', () => {
    const distance = 1000;

    const calculator = deliveryFeeCalculatorFactory();
    expect(calculator.calculateDistanceSurcharge(distance)).toBe(calculator.baseFare);
})

/*test('if distance exceeds base distance, an additional fee is added according to additional distance', () => {
    const distances = [1001, 1499, 1500, 1501];
    const BASE_DISTANCE = 1000;
    const ADDITIONAL_DISTANCE = 500;
    const BASE_FARE = 2;
    const ADDITIONAL_FEE = 1;
    const params = {
        baseFare: 2,
        baseDistance: 1000,
        additionalDistance: 500,
        additionalFee: 1
    }
    const expectedSums = distances.map((distance: number) => {
      return BASE_FARE + ADDITIONAL_FEE * ((distance - BASE_DISTANCE) % ADDITIONAL_DISTANCE)
    })
    // If the delivery distance is longer than that, 1€ is added for every additional DISTANCE 
    //const expectedSums = [3, 3, 3, 4];

    const calculator = deliveryFeeCalculatorFactory(params);
    for(let i = 0; i < distances.length; i++){
       expect(calculator.calculateDistanceSurcharge(distances[i])).toBe(expectedSums[i])
    }
})*/