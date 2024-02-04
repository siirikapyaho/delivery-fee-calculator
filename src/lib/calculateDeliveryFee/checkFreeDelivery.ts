export default function checkFreeDelivery(cartValue: number) {
    const FREE_DELIVERY_LIMIT = 200;

    if (cartValue >= FREE_DELIVERY_LIMIT) {
        return true;
    }

    else return false;
}