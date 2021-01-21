
// problem-1 solution
function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        let meter = kilometer * 1000;
        return meter;
    }
    else return "please Enter a Valid Number!";
}

// problem-2 solution
function budgetCalculator(noOfWatch, noOfPhone, noOfLaptop) {
    if (noOfPhone < 0) {
        return "Please Eneter Valid number Of Phone";
    }
    else if (noOfWatch < 0) {
        return "Please Eneter Valid number Of Watch";
    }
    else if (noOfLaptop < 0) {
        return "Please Eneter Valid number Of Laptop";
    }
    else {
        let totalWatchPrice = noOfWatch * 50;
        let totalPhonePrice = noOfPhone * 100;
        let totalLaptopPrice = noOfLaptop * 500;
        let totalBudget = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
        return totalBudget;
    }
}

// problem-3 solution
function hotelCost(totalDays) {
    if (totalDays > 0 && totalDays <= 10) {
        let totalCostInHotel = totalDays * 100;
        return totalCostInHotel;
    }
    else if (totalDays > 10 && totalDays <= 20) {
        let totalDaysUnderDiscount = totalDays - 10;
        let totalCostUnderDiscount = totalDaysUnderDiscount * 80;
        let totalCostInHotel = 1000 + totalCostUnderDiscount;
        return totalCostInHotel;
    }
    else if (totalDays > 20) {
        let totalDaysUnderDiscount = totalDays - 20;
        let totalCostUnderDiscount = totalDaysUnderDiscount * 50;
        let totalCostInHotel = 1000 + 800 + totalCostUnderDiscount;
        return totalCostInHotel;
    }
    else {
        return "Your days must be greater than 0 or enter a valid number!";
    }
}


// problem-4 solution
function megaFriend(arrayOfAllNames) {
    if (arrayOfAllNames.length == 0)
        return "please Enter Names!";
    else {
        count = 0;
        var letterCounter = arrayOfAllNames[0].length;
        for (var j = 0; j < arrayOfAllNames.length; j++) {
            if (arrayOfAllNames[j].length == letterCounter) {
                count++;
            }
        }
        if (count == arrayOfAllNames.length) {
            return "all names length are equal!";
        }
        else {
            var biggestName = arrayOfAllNames[0];
            var biggestLength = arrayOfAllNames[0].split(" ").join("").length;
            for (var i = 0; i < arrayOfAllNames.length; i++) {
                var smallestLength = arrayOfAllNames[i].split(" ").join("").length;
                if (biggestLength < smallestLength) {
                    biggestLength = smallestLength;
                    biggestName = arrayOfAllNames[i];
                }
            }
        }
    }

    return biggestName;
}
