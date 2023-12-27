
// Conditional Statements - Lab & Exercise
// 01. Excellent Result
// 02. Greater Number
// 03. Even or Odd
// 04. Password Guess
// 05. Number 100...200
// 06. Speed Info
// 07. Area of Figures
// Conditional Statements - Exercise (row 113)
// 01. Sum Seconds
// 02. Bonus Score
// 03. Time + 15 Minutes
// 04. Toy Shop
// 05. Godzilla vs. Kong
// 06. World Swimming Record
// 07. Shopping
// 08. Lunch Break


// 01. Excellent Result
function score(input){
    let theScore = Number(input[0])
    if (theScore >= 5.50) {
    console.log("Excellent!")
    }
}
score(["5.5"])

// 02. Greater Number

function numGT(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    if (num1 > num2) {console.log(num1)}
    else {console.log(num2)}
}
numGT(["35", "35"])

// 03. Even or Odd

function evenOdd(input){
    let num = Number(input[0])
    if (num % 2 == 0){console.log("even")}
    else {console.log("odd")}

}

evenOdd(["3"])

// 04. Password Guess

function pwdGuesser(input){
    let pwd = input[0];
    if (pwd == "s3cr3t!P@ssw0rd"){
        console.log("Welcome")
    }
    else {console.log("Wrong password!")}
}

pwdGuesser(["s3cr3t!P@ssw0rd"])

// 05. Number 100...200

function numChecker(input){
    let numm = Number(input[0])
    if (numm < 100){console.log("Less than 100")}
    else if (numm <= 200){console.log("Between 100 and 200")}
    else {console.log("Greater than 200")}

}

numChecker(["100"])

// 06. Speed Info

function speedChecker(input){
    let numm = Number(input[0])
    let info = ["slow", "average" , "fast", "ultra fast", "extremely fast"]
    if (numm <= 10){console.log(info[0])}
    else if ((numm > 10)&&(numm <= 50)){console.log(info[1])}
    else if ((numm > 50)&&(numm <= 150)){console.log(info[2])}
    else if ((numm > 150)&&(numm <= 1000)){console.log(info[3])}
    else {console.log(info[4])}

}

speedChecker(["1000"])

// 07. Area of Figures

function areaShaperator(input){
    let figure = input[0];
    let firstNum = Number(input[1]);
    let type = ["square", "rectangle", "circle", "triangle"];
    let result = Math.pow(firstNum, 2)
    if (figure == type[0]){result = Math.pow(firstNum, 2)}
    else if (figure === type[1]){result = firstNum * input[2]}
    else if (figure === type[2]){result = Math.PI * Math.pow(firstNum, 2)}
    else if (figure === type[3]){result = (firstNum * input[2]) / 2}


    console.log(result.toFixed(3))
    }
    
//areaShaperator(["square", "5"])
// areaShaperator(["rectangle", "7","2.5"])
// areaShaperator(["circle", "6"])
// areaShaperator(["triangle", "4.5", "20"])



// Conditional Statements - Exercise
// 01. Sum Seconds
// 02. Bonus Score
// 03. Time + 15 Minutes
// 04. Toy Shop
// 05. Godzilla vs. Kong
// 06. World Swimming Record
// 07. Shopping
// 08. Lunch Break

// 01. Sum Seconds

function sumSec(input){
    let fst = Number(input[0])
    let scnd = Number(input[1])
    let trd = Number(input[2])
    let ttl = (fst + scnd + trd);
    let minutes = Math.floor(ttl/60);
    let seconds = ttl % 60;
        if (seconds < 10){console.log(`${minutes}:0${seconds}`)}
    else {console.log(`${minutes}:${seconds}`)}
}

sumSec(["22", "7",
"34"])

// 02. Bonus Score

function bonScore(input){
    let initnum = Number(input[0]);
    let result = 0
    if (initnum <= 100) {result = initnum + 5}
    else if (initnum>1000){result = initnum * 1.1}
    else if (initnum>100){result = initnum * 1.2}
    if (initnum % 2 == 0){result += 1};
    if (initnum % 10 == 5){result += 2};
    console.log(`${result-initnum}\n${result}`)

}

bonScore(["2703"])


// 03. Time + 15 Minutes

function timePluser(input){
    let hours = Number(input[0])
    let minutes = Number(input[1])
    if ((minutes+15)>=60){
        minutes = minutes + 15 - 60;
        hours += 1;}
    else minutes += 15;
    if (minutes < 10){minutes = "0" + minutes};
    if (hours >= 24){hours = hours - 24}
    console.log(`${hours}:${minutes}`)
}

timePluser(["1", "46"])
// timePluser(["23", "59"])
// timePluser(["11", "08"])
// timePluser(["11", "08"])
// timePluser(["12", "49"])
// timePluser(["0", "44"])


// 04. Toy Shop
// Пъзел - 2.60 лв.
// Говореща кукла - 3 лв.
// Плюшено мече - 4.10 лв.
// Миньон - 8.20 лв.
// Камионче - 2 лв.

// function toyShop(input){
//     let price_list = ["puzzle", 2.60, "puppet", 3, "bear", 4.1, "minion", 8.2, "truck", 2]
//     let tour_price = Number(input[0])
//     let puzzle = Number(input[1])
//     let puppet = Number(input[2])
//     let bear = Number(input[3])
//     let minion = Number(input[4])
//     let truck = Number(input[5])
//     let amount = puzzle * price_list[1] + puppet*price_list[3] + bear*price_list[5] + minion*price_list[7] + truck*price_list[9]
//     let quantity =  puzzle + puppet + bear + minion + truck
//     if (quantity >= 50){amount *= 0.75};
//     if ((amount*0.9) >= tour_price){console.log(`Yes! ${((amount*0.9)-tour_price).toFixed(2)} lv left.`)}
//     else {console.log(`Not enough money! ${(tour_price - (amount*0.9)).toFixed(2)} lv needed.`)}
// }

// toyShop(["40.8","20","25","30","50","10"])
// toyShop(["320","8","2","5","5","1"])

// function toySho2(input){
//     let price_list = {"puzzle": 2.60, "puppet": 3, "bear": 4.1, "minion": 8.2, "truck": 2}
//     let tour_price = Number(input[0]);
//     let puzzle = Number(input[1]);
//     let puppet = Number(input[2]);
//     let bear = Number(input[3]);
//     let minion = Number(input[4]);
//     let truck = Number(input[5]);
//     let amount = puzzle * price_list["puzzle"] + puppet*price_list["puppet"] + bear*price_list["bear"] + minion*price_list["minion"] + truck*price_list["truck"]
//     let quantity =  puzzle + puppet + bear + minion + truck
//     if (quantity >= 50){amount *= 0.75};
//     if ((amount*0.9) >= tour_price){console.log(`Yes! ${((amount*0.9)-tour_price).toFixed(2)} lv left.`)}
//     else {console.log(`Not enough money! ${(tour_price - (amount*0.9)).toFixed(2)} lv needed.`)}
// }

// toySho2(["320","8","2","5","5","1"])


function toySho3(input){
    let price_list = {"puzzle": 2.60, "puppet": 3, "bear": 4.1, "minion": 8.2, "truck": 2}
    let item_list = {"puzzle": Number(input[1]), "puppet": Number(input[2]), "bear": Number(input[3]), "minion": Number(input[4]), "truck": Number(input[5])}
    let amount = 0
    let quantity = 0
    let tour_price = Number(input[0]);
    for (item in price_list){amount += item_list[item] * price_list[item];
    quantity += item_list[item];}
    if (quantity >= 50){amount *= 0.75};
    if ((amount*0.9) >= tour_price){console.log(`Yes! ${((amount*0.9)-tour_price).toFixed(2)} lv left.`)}
    else {console.log(`Not enough money! ${(tour_price - (amount*0.9)).toFixed(2)} lv needed.`)}
}
toySho3(["320","8","2","5","5","1"])



// 05. Godzilla vs. Kong
// Декорът за филма е на стойност 10% от бюджета. 
// При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.

function godzziKong(input){
    let budget = Number(input[0]);
    let decor = budget * 0.1;
    let statistsCount = Number(input[1]);
    let statistcosts = Number(input[2]);
    let staticSum = statistcosts * statistsCount;
    if (statistsCount > 150){staticSum *= 0.9};
    let costs = (staticSum + decor)
    if (budget >= costs){console.log(`Action!\nWingard starts filming with ${(budget-costs).toFixed(2)} leva left.`)}
    else {console.log(`Not enough money!\nWingard needs ${(costs-budget).toFixed(2)} leva more.`)}
}

// godzziKong(["20000","120","55.5"])
// godzziKong(["15437.62","186","57.99"])


// 06. World Swimming Record

function worldSwRe(input){
    let time = Number(input[0])
    let distance =  Number(input[1])
    let speed = Number(input[2])
    let slowDown = 12.5;
    let ivTime = (distance*speed + (Math.floor(distance/15)*slowDown))
    if (ivTime < time){console.log(`Yes, he succeeded! The new world record is ${ivTime.toFixed(2)} seconds.`)}
    else {console.log(`No, he failed! He was ${(ivTime-time).toFixed(2)} seconds slower.`)}

}

worldSwRe(["10464","1500","20"])
// worldSwRe(["55555.67","3017","5.03"])


// 07. Shopping

function shoping(input){
    let bbudget = Number(input[0]);
    let m = Number(input[1]);
    let p = Number(input[2]);
    let s = Number(input[3]);

    let gpu = 250*m;
    let cpu = p*gpu*0.35;
    let ram = gpu*s*0.1;
    let ttl_price = gpu+cpu+ram;
    if (m > p){ttl_price *= 0.85};
    if (ttl_price <= bbudget){console.log(`You have ${(bbudget - ttl_price).toFixed(2)} leva left!`)}
    else {console.log(`Not enough money! You need ${(ttl_price-bbudget).toFixed(2)} leva more!`)}
}
// shoping(["900","2","1","3"])
shoping(["920.45","3","1","1"])


// 08. Lunch Break

function lunchTime(input){
    let timeNeeded = 0;
    let movie = input[0];
    let lenMovie = Number(input[1]);
    let lenTime = Number(input[2]);
    let lunch = lenTime/8;
    let rest = lenTime/4;
    let movieTime = (lenTime-lunch-rest)

    if ((movieTime-lenMovie)>=0){console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(movieTime-lenMovie)} minutes free time.`)
} else console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(lenMovie-movieTime)} more minutes.`)

}
//lunchTime(["Game of Thrones","60","96"])
lunchTime(["Teen Wolf","48","60"])




