function  onlyCharacter( str ) { 
          // You have to write your code here 

          if( typeof str !== "string"){
            return  "Invalid";
          }
         let result = str.replace(/\s+/g,"");
          let upperText = result.toUpperCase();

         return upperText;

}
console.log(onlyCharacter( ["hack", "me"]   ));
console.log(onlyCharacter( "  h e llo wor   ld" ));
console.log(onlyCharacter( "Cy   bar- At  tac k  "  ));
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
console.log(onlyCharacter("Serv er : : Do wn"));
console.log(onlyCharacter(12345));
console.log(onlyCharacter(true));