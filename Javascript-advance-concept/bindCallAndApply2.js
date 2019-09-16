
var years=[1990,1965, 1937, 2005, 1998];
 
function arrayCalc(years, fn){
    var arrRes=[];
    for(var i=0;i<years.length;i++){
        arrRes.push(fn(years[i]));
    }

    return arrRes;
}

function calculateAge(year){
    return 2019-year;
}

function isFullAges(limit, el){
    return el>limit;
}

var ages=arrayCalc(years,calculateAge);
 
var fullJapan= arrayCalc(ages,isFullAges.bind(this,20));

console.log(ages);
console.log(fullJapan);