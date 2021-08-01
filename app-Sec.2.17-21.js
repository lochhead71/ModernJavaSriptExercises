 // SWITCHES, BITCHES!
 
 const color = 'yellow';

 switch(color){
   case 'blue':
      console.log('Go Blue!');
   break;
   case 'green':
      console.log('Sparty Sucks!');
   break;
   case 'red':
      console.log('Ohio State is the WORST!');
   break;
   default:
      console.log('You must not be in the B1G...');
 }

 let day;

 switch(new Date().getDay()){
   case 0:
      day = 'Sunday';
   break;
   case 1:
      day = 'Monday';
   break;
   case 2:
      day = 'Tuesday';
   break;
   case 3:
      day = 'Wednesday';
   break;
   case 4:
      day = 'Thursday';
   break;
 }

 console.log(`${day}`);