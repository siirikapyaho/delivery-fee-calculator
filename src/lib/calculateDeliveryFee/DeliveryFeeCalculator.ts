import { DeliveryFeeBaseValues } from "@/types/DeliveryFeeBaseValues"

export default class DeliveryFeeCalculator {
    minimumCartValue: number;
    freeDeliveryLimit: number;
    baseFare: number;
    baseDistance: number;
    additionalDistance: number;
    additionalFee: number;

    constructor(baseValues: DeliveryFeeBaseValues){
        this.minimumCartValue = baseValues.minimumCartValue;
        this.freeDeliveryLimit = baseValues.freeDeliveryLimit;
        this.baseFare = baseValues.baseFare;
        this.baseDistance = 1000;
        this.additionalDistance = 500;
        this.additionalFee = 1;
    }

    calculateCartValueSurcharge(cartValue: number) {
        if(cartValue >= this.freeDeliveryLimit) {
            return 0;
        }
        else if(cartValue <= this.minimumCartValue) {
            return (this.minimumCartValue - cartValue);
        }
        else {
            return 0;
        }
    }

    calculateDistanceSurcharge(distance: number) {
        let surcharge = 0;

        surcharge += this.baseFare;
      
        if (distance > this.baseDistance) {
            for (let i = this.baseDistance; i < distance; i += this.additionalDistance) {
            surcharge += this.additionalFee;
          }
        }
    
        return surcharge;
    }
}