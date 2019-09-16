

function retirement(retirementAge){
    var a=' years left until retirement.'
    return function(yearOfBirth){
        var age= 2019-yearOfBirth;
        console.log((retirementAge-age)+a) ;
    }
}

var retirementUS = retirement(66);
retirementUS(1989);

var retirementIN = retirement(60);
retirementIN(1989);

retirement(60)(1970);
