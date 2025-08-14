function totalFine( fare ) { 
          // You have to write your code here 
          if( typeof fare !== "number" || fare <= 0){
            return "invalid";
          }
          
          fine = fare + fare * (20/100) + 30 ;
          return fine;



} 
console.log(totalFine(-50));
console.log(totalFine("mim"));
console.log(totalFine(200));
console.log(totalFine(552));
console.log(totalFine(0));
