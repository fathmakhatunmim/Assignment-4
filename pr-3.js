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
console.log(bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 }, 
{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 } ));
