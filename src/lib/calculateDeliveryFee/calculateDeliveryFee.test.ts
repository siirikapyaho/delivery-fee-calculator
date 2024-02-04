import { expect, test } from 'vitest'
import calculateDeliveryFee from '.'
import { DeliveryFeeItems } from '@/types/DeliveryFeeItems';
import checkFreeDelivery from './checkFreeDelivery';
import addDistanceSurcharge from './addDistanceSurcharge'

test('if the cart value is less than minimum, delivery fee equals the difference plus base fare of 2', () => {
    const MINIMUM_VALUE = 10;
    const BASE_FARE = 2;
    const cart_value = 7;
    const expected_sum = (MINIMUM_VALUE - cart_value) + BASE_FARE;
    const params: DeliveryFeeItems = {cartValue: cart_value, deliveryDistance: 0, itemQuantity: 0}
    expect(calculateDeliveryFee(params)).toBe(expected_sum)
})

test('if the distance is less than 1000 meters, surcharge equals base fare of 2', () => {
    const distance = 999;
    expect(addDistanceSurcharge(distance)).toBe(2);
})

test('if the distance is up to 1500 meters, surcharge equals base fare of 2 + 1', () => {
    const distance = 1499;
    expect(addDistanceSurcharge(distance)).toBe(3);
})

test('if the distance is up to 1500 meters, surcharge equals base fare of 2 + 1', () => {
    const distance = 1500;
    expect(addDistanceSurcharge(distance)).toBe(3);
})

test('if the distance is more than 1000 meters, every additional 500 meters increases the surcharge by 1', () => {
    const distance = 1501;
    expect(addDistanceSurcharge(distance)).toBe(4);
})

test('if the cart value is more than maximum, free delivery is true', () => {
    const cartValue = 200;
    expect(checkFreeDelivery(cartValue)).toBe(true);
})

test('if the cart value is less than maximum, free delivery is false', () => {
    const cartValue = 199;
    expect(checkFreeDelivery(cartValue)).toBe(false);
})

test('if the cart value is more than maximum, delivery fee equals 0', () => {
    const cartValue = 200;
    const params: DeliveryFeeItems = {cartValue: cartValue, deliveryDistance: 0, itemQuantity: 0}
    expect(calculateDeliveryFee(params)).toBe(0);
})