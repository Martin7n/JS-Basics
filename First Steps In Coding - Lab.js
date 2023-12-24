// First Steps In Coding - Lab
// &
// First Steps In Coding - Exercise

// 01. Hello SoftUni
// 02. Nums 1...10
// 03. Square Area
// 04. Inches to Centimeters
// 05. Greeting by Name
// 06. Concatenate Data
// 07. Projects Creation
// 08. Pet Shop
// 09. Yard Greening

// 01. Hello SoftUni
function helloSoftUni(){
    console.log("Hello SoftUni");
    }

helloSoftUni()


// 02. Nums 1...10
function countTen(){
    let a = 1
    for (a>1;a<11; a += 1){console.log(a)}}

countTen()

// 03. Square Area
function square(input){
    let a = Number(input[0]);
    let area = a*a;
    console.log(area)}

square(["5"])

// 04. Inches to Centimeters

function inchToCm(input){
    let az = Number(input[0]);
    let area = az*2.54
    console.log(area)}

inchToCm(["5"])


// 05. Greeting by Name

function name_hel(input){
    let soName = input[0];
    console.log(`Hello, ${soName}!`);
}

name_hel(["Tralal"])

// 06. Concatenate Data

function concator(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2]
    let town = input[3]
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

concator(["So", "many", "1-2-3-4-6", "BracketCity"])


// 07. Projects Creation

function kk(input){
    let af = input[0];
    let be = Number(input[1]);
    let tit = be * 3;
    console.log(`The architect ${af} will need ${tit} hours to complete ${be} project/s.`);
}

kk(["Archi", "6"])

// 08. Pet Shop

function petShopBoys(input){
    let catfood = Number(input[0]) * 2.5;
    let dogfood = Number(input[1]) * 4;
    let allfood = dogfood + catfood;
    console.log(`${allfood} lv.`);
    
}

petShopBoys(["4", "2"])

// function yardGreeningForLife(input){

//     let single_price = 7.61;
//     let areagreen = Number(input);
//     let totalcost = (single_price * areagreen);
//     let promodiscountofferfortheenormousgreenyard = 0.18 * totalcost ;
//     let promocost = (totalcost - promodiscountofferfortheenormousgreenyard);
//     console.log(`The final price is: ${promocost.toFixed(2)} lv.`)
//     console.log(`The discount is: ${promodiscountofferfortheenormousgreenyard.toFixed(2)} lv.`)
// }
//rounding to the output result


function yardGreeningForLife(input){

    let single_price = 7.61;
    let areagreen = Number(input);
    let totalcost = (single_price * areagreen);
    let promodiscountofferfortheenormousgreenyard = 0.18 * totalcost;
    let promocost = (totalcost - promodiscountofferfortheenormousgreenyard);
    console.log(`The final price is: ${promocost} lv.`);
    console.log(`The discount is: ${promodiscountofferfortheenormousgreenyard} lv.`);
}
yardGreeningForLife(["150"])



// First Steps In Coding - Exercise

// 01. USD to BGN
// 02. Radians to Degrees
// 03. Deposit Calculator
// 04. Vacation Books List
// 05. Supplies for School
// 06. Repainting
// 07. Food Delivery
// 08. Basketball Equipment
// 09. Fish Tank



// 01. USD to BGN


function moneyUSDtoBGN(input){
    let central_course = 1.79549;
    let usdToconvert = Number(input);
    console.log(central_course*usdToconvert);
}
moneyUSDtoBGN(["22"])
// 02. Radians to Degrees

function gradus2Radians(input){
    let pi_ = Math.PI
    let radiansIncoming = Number(input);
    console.log(radiansIncoming * 180 / pi_ );
}
gradus2Radians(["3.1416"])


// 03. Deposit Calculator


function deposiCalc(input){
    let deposit = Number(input[0]);
    let depoTime = Number(input[1]);
    let yearlyIntereset = Number(input[2]);
    let moneySaved = deposit + depoTime*((deposit*yearlyIntereset/100)/12);
    console.log(moneySaved);
}
deposiCalc(["200 ","3","5.7 "])


// 04. Vacation Books List

function bookList(input){
    let pagesCbook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let ttlpgsperday = (pagesCbook / pagesPerHour / days);
    console.log(ttlpgsperday);
}

bookList(["212 ","20 ","2 "])

// 05. Supplies for School

function suppliesSchool(input){
    let pen_price = 5.8;
    let dpen_price = 7.2;
    let cleaner_price = 1.2;

    let pens = Number(input[0]);
    let dpen = Number(input[1]);
    let litres = Number(input[2]);
    let discount = (100 - Number(input[3]))/100;
    let totalcost = ((pen_price * pens) + (dpen_price * dpen) + (cleaner_price * litres))* discount;
    console.log(totalcost);
}

suppliesSchool(["2 ","3 ","4 ","25 "])

// 06. Repainting

function rePeainting(input){
    let nylpon_price = 1.5;
    let paint_price = 14.5;
    let liquid_price = 5.0;
    let bags_total = 0.4
    let nylon = Number(input[0])+2;
    let paint = Number(input[1])*1.1;
    let liquid = Number(input[2]);
    let hours = Number(input[3]);
    let materials = (nylpon_price * nylon) + (paint_price*paint)+(liquid_price*liquid)+bags_total;
    let costs = ((materials * 0.3) * hours);
    console.log(materials + costs);
}

rePeainting(["10 ",
"11 ",
"4 ",
"8 "])

// 07. Food Delivery

function theBoringfood(input){
    let chicky = 10.35;
    let fishy = 12.4;
    let vegies = 8.15;
    let desert = 0.2;
    let delivery = 2.5
    let chikc = Number(input[0]);
    let fish = Number(input[1]);
    let vegs = Number(input[2]);
    let all_food = (chicky * chikc) + (fishy*fish)+(vegies*vegs);
    let order_cost = (all_food*1.2)+delivery;
    console.log(order_cost);
}

theBoringfood(["2 ","4 ","3 "])
// 08. Basketball Equipment



function basketball(input){
    
    let year_fee = Number(input[0]);
    let sneakers = year_fee * 0.6;
    let equip = sneakers * 0.8;
    let ball = equip*0.25;
    let accessories = ball *0.2;
    let basketballo = year_fee+ sneakers+ equip+ ball+ accessories;
    console.log(basketballo);
}

basketball(["365 "])
// 09. Fish Tank



function fishTank(input){

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3])/100;
    let volume = (lenght * width * height)/1000;
    let freevol = volume * percent;
    let total1 = volume - freevol;
    console.log(total1);
}

fishTank(["85 ",
"75 ",
"47 ",
"17 "])
