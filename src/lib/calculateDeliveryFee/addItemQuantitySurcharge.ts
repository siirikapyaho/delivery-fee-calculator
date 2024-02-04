export default function addItemQuantitySurcharge(itemQuantity: number) {
  const ITEMS_LIMIT = 4;
  const SURCHARGE_COEFFICIENT = 0.5;
  const BULK_LIMIT = 12;
  const BULK_FEE = 1.2;
  
  let surcharge = 0;

    if (itemQuantity > ITEMS_LIMIT) {
        surcharge += (itemQuantity - ITEMS_LIMIT) * SURCHARGE_COEFFICIENT;
    
        if (itemQuantity > BULK_LIMIT) {
          surcharge += BULK_FEE;
        }
      }
    console.log(`Adding an extra surcharge of ${surcharge} € for item quantity`);
    return surcharge;
} 