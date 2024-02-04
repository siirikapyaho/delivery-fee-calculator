
import { DeliveryFeeItems } from "@/types/DeliveryFeeItems"
import checkRushHour from "./checkRushHour";
import addCartValueSurcharge from "./addCartValueSurcharge";
import addDistanceSurcharge from "./addDistanceSurcharge";
import addItemQuantitySurcharge from "./addItemQuantitySurcharge";
import checkFreeDelivery from "./checkFreeDelivery";

export default function calculateDeliveryFee(value: DeliveryFeeItems): number {

  if(checkFreeDelivery(value.cartValue)) {
    console.log("Free delivery!");
    return 0;
  }

  const SURCHARGE_LIMIT = 15;
  const FRIDAY_RUSH_SURCHARGE_COEFFICIENT = 1.2;
  
  let totalFee = 0;
  
  // Adding the surcharge based on cart value
  totalFee += addCartValueSurcharge(value.cartValue);

  // Adding the surcharge for the delivery
  totalFee += addDistanceSurcharge(value.deliveryDistance);

  // Adding the surcharge for the number of items
  totalFee += addItemQuantitySurcharge(value.itemQuantity);

  // Adding the Friday Rush surcharge
  if (checkRushHour()) {
    console.log(`The fee before rush hour surcharge is ${totalFee} €. Multiplying this by 1.2`);
    totalFee *= FRIDAY_RUSH_SURCHARGE_COEFFICIENT;
  }

  // The final fee never exceeds 15 €
  if (totalFee > SURCHARGE_LIMIT) {
    totalFee = SURCHARGE_LIMIT;
  }

  console.log(`The delivery fee is ${totalFee} €`);
  return totalFee;
  
  }