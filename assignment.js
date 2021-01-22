
function kilometerToMeter(number) {
    if (number < 0) {
        return "Distence can't be negative";
    }
    else {
        var meter = number * 1000;
    }

    return meter;
}
// var value1 = kilometerToMeter(-5);
// var result1 = console.log(value1);
// var value2 = kilometerToMeter(50);
// var result2 = console.log(value2);


function budgetCalculator(watch, phone, laptop) {
    if (watch <= 0 && phone <= 0 && laptop <= 0) {
        return "You didn't bought anything!";

    }
    else if (watch <= 0) {

        var totalPhonePrice = phone * 100;
        var totalLaptopPrice = laptop * 500;
        return totalLaptopPrice + totalPhonePrice + " you didn't  bought any watch";
    }
    else if (phone <= 0) {

        var totalWatchPrice = watch * 50;
        var totalLaptopPrice = laptop * 500;
        return totalLaptopPrice + totalWatchPrice + " you didn't  bought any phone";
    }
    else if (laptop <= 0) {

        var totalWatchPrice = watch * 50;
        var totalPhonePrice = phone * 100;
        return totalPhonePrice + totalWatchPrice + " you didn't  bought any laptop";
    }
    else {
        var totalWatchPrice = watch * 50;
        var totalPhonePrice = phone * 100;
        var totalLaptopPrice = laptop * 500;

        var totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

        return totalPrice;
    }
}
// var ElectronicGoods = budgetCalculator(2, 1, 1);
// var budget = console.log(ElectronicGoods);
// var ElectronicGoods = budgetCalculator(-1, 1, 1);
// var budget = console.log(ElectronicGoods);
// var ElectronicGoods = budgetCalculator(0, 0, 0);
// var budget = console.log(ElectronicGoods);

function hotelCost(days) {
    var rent = 0;
    if (days < 0) {
        return "days can't be negative. ";
    }
    if (days <= 10) {
        rent = days * 100;
    }
    else if (days <= 20) {
        var rentOfFirstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var rentOfSecondTenDays = remainingDays * 80;

        rent = rentOfFirstTenDays + rentOfSecondTenDays;
    }
    else {
        var rentOfFirstTenDays = 10 * 100;
        var rentOfSecondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var rentOfLastDays = remainingDays * 50;

        rent = rentOfFirstTenDays + rentOfSecondTenDays + rentOfLastDays;
    }
    return rent;
}
// var numberOfDays = hotelCost(-8);
// var bill = console.log(numberOfDays);
// var numberOfDays = hotelCost(5);
// var bill = console.log(numberOfDays);
// var numberOfDays = hotelCost(15);
// var bill = console.log(numberOfDays);
// var numberOfDays = hotelCost(25);
// var bill = console.log(numberOfDays);

function megaFriend(nameList) {
    var largestName = nameList[0];
    for (var i = 0; i < nameList.length; i++) {
        var test = nameList[i];
        if (test.length > largestName.length) {
            largestName = test;
        }

    }
    return largestName;
}
var friendList = ['Shahadat', 'jalal', 'Anisulislam', 'jobbar', 'rofiq', 'shofiq', 'Ehtasham'];
//var result = console.log(megaFriend(friendList));