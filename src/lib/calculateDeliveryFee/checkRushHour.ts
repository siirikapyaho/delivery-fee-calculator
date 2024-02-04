export default function checkRushHour() {
    const now = new Date();
    const FRIDAY = 5;
    const START_HOUR = 15;
    const END_HOUR = 19;
  
    if (now.getDay() == FRIDAY && now.getHours() >= START_HOUR && now.getHours() <= END_HOUR){
      return true;
    }
    else return false;
  }