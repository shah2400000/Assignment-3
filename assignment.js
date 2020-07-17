//feetToMile//

function feetToMile(feet) {
    var mile = feet / 5280
    return mile;
}
var result = feetToMile(52800);
console.log(result);




// woodCalculator//

function woodCalculator(chair, table, bed){
    var chairFeet =1 * 35.31;
    var tableFeet =3 * 35.31;
    var bedFeet =5 * 35.31;
    var totalFeet = chairFeet + tableFeet + bedFeet;
    return totalFeet;
}
var result = woodCalculator(1 * 3 * 5);
console.log(result);




// brickCalculator//

function brickCalculator(first, second, third){
    var firstTenFloor = 15 * 1000;
    var secondTenFloor = 12 * 1000;
    var thirdTenFloor = 10 * 1000;
    var totalFloor = firstTenFloor + secondTenFloor + thirdTenFloor;
    return totalFloor; 
}
var result = brickCalculator(15 * 12 * 10);
console.log(result);



// tinyFriend// 

function tinyFriend(names) {
    var tiny = names[0];
    for (var i = 0; i < names.length; i++) {
        var friendList = names[i];
        if (friendList.length < tiny.length) {
            tiny = friendList;
        }
    }
return tiny
}
var friendList = ['Muntazir', 'Jibon', 'AlamKhan', 'Ahmmed', 'Shahin', 'Shah'];
console.log(tinyFriend(friendList));