const dayjs = require('dayjs'); 
const relativeTime = require('dayjs/plugin/relativeTime'); 
function getShipArrivalTime() { dayjs.extend(relativeTime); 
  const remainingTime = dayjs().to(dayjs('2022-10-01')); 
  console.log(remainingTime); } 
  getShipArrivalTime(); 