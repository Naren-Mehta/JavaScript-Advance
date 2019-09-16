

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

function isFullAges(el){
    return el>18;
}

function maxHeartRate(el){
    if(el>=18 && el<=81){
        return Math.round(206.9 - (0.67 * el))
    }else{
        return -1;
    }
}

var ages=arrayCalc(years,calculateAge);
console.log(ages);

var fullAges= arrayCalc(ages, isFullAges);
console.log(fullAges);

var heartRates= arrayCalc(ages, maxHeartRate);
console.log(heartRates);
