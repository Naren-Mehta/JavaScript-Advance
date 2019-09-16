//Immidiate invoked function expression (IIFE)


// function game(){
//     var score= Math.random()*10;
//     console.log(score >=5);
// }

// game();

(function(){
    var score= Math.random()*10;
    console.log(score >=5);
})();


(function(goodluck){
    var score= Math.floor(Math.random()*10);
    console.log(score)
    console.log(score >=5-goodluck);
})(1);

