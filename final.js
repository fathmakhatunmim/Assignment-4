// problem-1

function totalFine( fare ) { 
          // You have to write your code here 
          if( typeof fare !== "number" || fare <= 0){
            return  "Invalid";
          }
          
          fine = fare + fare * (20/100) + 30 ;
          return fine;

} 

// problem-2

function  onlyCharacter( str ) { 
          // You have to write your code here 

          if( typeof str !== "string"){
            return  "Invalid";
          }
         let result = str.replace(/\s+/g,"");
          let upperText = result.toUpperCase();

         return upperText;

}

// problem-3

function  bestTeam( player1, player2 ) { 
          // You have to write your code here
          if( typeof player1 !== "object" || player1 === null || typeof player2 !== "object" || player2=== null )
            {
            return "Invalid" ;
          }

        let player1score= player1.foul + player1.cardY + player1.cardR;
        let players2core=player2.foul + player2.cardY + player2.cardR;

        if(player1score < players2core)
            {
            return player1.name;
        }
        else if(player1score > players2core){
            return player2.name ;
        }
        else if(player1score == players2core){
            return "Tie";
        }


}

// problem-4
function  isSame(arr1 , arr2 ) { 
          // You have to write your code here 
          if(!Array.isArray(arr1) || !Array.isArray(arr2)){
            return "Invalid" ;
            
          }

         if (arr1.length !== arr2.length){
            return false;
         }
         for(let i = 0; i<arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
         }
         return true;

}
// problem-5
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