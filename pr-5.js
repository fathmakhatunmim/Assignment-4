function  resultReport( marks ) { 
          // You have to write your code here 
   if(!Array.isArray(marks)){
            return "Invalid" ;
            
          }
          if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }



             let sum = 0;
             let passCount = 0;
              let failCount = 0;
          for(i=0; i < marks.length; i++){
              sum += marks[i];
              if (marks[i]>= 40){
               passCount++;
              }
              else{
               failCount++;
              }
             

          

          } 
            finalScore =Math.round(sum / marks.length);
           return { finalScore: finalScore, pass: passCount, fail: failCount };

        




 }

console.log(resultReport([])) ;

console.log(resultReport([98, 87, 67, 91, 92, 33, 87] )) ;

console.log(resultReport([99, 87, 67, 12 ,87] )) ;

console.log(resultReport([99])) ;

console.log(resultReport(100)) ;

