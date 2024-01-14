/ 01. Cinema
// 02. Summer Outfit
// 03. New House
// 04. Fishing Boat
// 05. Journey
// 06. Operations Between Numbers
// 07. Hotel Room
// 08. On Time for the Exam
// 09. Ski Trip


// 01. Cinema

function cinEma(input){
    let priceP = 12;
    let priceN = 7.5;
    let priceD = 5;
    let row = Number(input[1])
    let col = Number(input[2])
    let price = 0;
    if (input[0] == "Premiere")
    {price = row * col * priceP}
    else if (input[0] == "Normal")
    {price = row * col * priceN}
    else if (input[0] == "Discount")
    {price = row * col * priceD}
    console.log(`${price.toFixed(2)} leva`)

}
cinEma(["Premiere",
"10",
"12"])


// 02. Summer Outfit
function summerOutf(input){

    let outfit = "";
    let shoes = "";
    let temperature = Number(input[0]);
    let timed = input[1];
    if (timed == "Morning")
        {if (10<=temperature && temperature <=18)
            {outfit = "Sweatshirt"; 
            shoes = "Sneakers"}
        else if (18<temperature && temperature <=24)
            {outfit = "Shirt"; 
            shoes = "Moccasins"} 
        else if (temperature >= 25)
            {outfit = "T-Shirt"; 
            shoes = "Sandals"}}

    else if (timed == "Afternoon")
    {if (10<=temperature && temperature <=18)
        {outfit = "Shirt"; 
        shoes = "Moccasins"}
    else if (18<temperature && temperature <=24)
        {outfit = "T-Shirt"; 
        shoes = "Sandals"} 
    else if (temperature >= 25)
        {outfit = "Swim Suit"; 
        shoes = "Barefoot"}}
    else if (timed == "Evening")
        {if (10<=temperature && temperature <=18)
            {outfit = "Shirt"; 
            shoes = "Moccasins"}
        else if (18<temperature && temperature <=24)
            {outfit = "Shirt"; 
            shoes = "Moccasins"} 
        else if (temperature >= 25)
            {outfit = "Shirt"; 
            shoes = "Moccasins"} 

        }
        console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)
}

summerOutf(["28",
"Evening"])

// 03. New House


function newHouseWithAlotOfFlowers(input){
let prices = {"Roses": 5, "Dahlias": 3.80, "Tulips": 2.80, "Narcissus": 3, "Gladiolus": 2.50}
let flower = input[0];
let count = Number(input[1]);
let budget = Number(input[2])
let basicPrice = prices[flower] * count
let promo = 1
let total = 0

switch(flower){
    case "Roses": if (count>80){promo = 0.9};break;
    case "Dahlias":if (count>90){promo = 0.85};break;
    case "Tulips":if (count>80){promo = 0.85};break;
    case "Narcissus":if (count<120){promo = 1.15};break;
    case "Gladiolus": if (count<80){promo = 1.2};break;
 
}
 total = basicPrice * promo

if (total <= budget) {console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget-total).toFixed(2)} leva left.`)}
else {console.log(`Not enough money, you need ${(total-budget).toFixed(2)} leva more.`)}


}
// newHouseWithAlotOfFlowers(["Tulips",
// "88",
// "260"])
// newHouseWithAlotOfFlowers(["Roses",
// "55",
// "250"])
newHouseWithAlotOfFlowers(["Narcissus",
"119",
"360"])

// 04. Fishing Boat

function fiBo(input){

    let budget = Number(input[0]);
    let season = input[1];
    let count = Number(input[2]);
    let rent = 0
    let promo = 0
    let total = 0
    let addPromo = 1
    
    switch(season){
        case "Spring": rent = 3000; break;
        case "Winter":rent = 2600; break;
        case "Summer":rent = 4200; break;
        case "Autumn":rent = 4200; break;
        }
        if (count <= 6){promo = 0.9}
        else if (count<= 11){promo = 0.85}
        else if (count > 12){promo = 0.75}
        total = promo * rent
        if ((season != "Autumn") && (count % 2 == 0)){total = total * 0.95};
    
        if (total <= budget) {console.log(`Yes! You have ${(budget-total).toFixed(2)} leva left.`)}
        else {console.log(`Not enough money! You need ${(total-budget).toFixed(2)} leva.`)}
    
    }

fiBo(["2000",
"Winter",
"13"])


// 05. Journey

function anotherSeasonalTaskRoadTripThisTime(input){
    let budget = Number(input[0]);
    let season1 = input[1];
    let spent = 0

    if (season1 == "summer")            
    
    {if (budget <= 100){ console.log(`Somewhere in Bulgaria\nCamp - ${(0.3 * budget).toFixed(2)}`)}
    else if (budget <= 1000){ console.log(`Somewhere in Balkans\nCamp - ${(0.4 * budget).toFixed(2)}`)}
    else if (budget > 1000){ console.log(`Somewhere in Europe\nHotel - ${(0.9 * budget).toFixed(2)}`)}}
    else if (season1 == "winter")
        {if (budget <= 100){ console.log(`Somewhere in Bulgaria\nHotel - ${(0.7 * budget).toFixed(2)}`)}
                else if (budget <= 1000){ console.log(`Somewhere in Balkans\nHotel - ${(0.8 * budget).toFixed(2)}`)}
                else if (budget > 1000){ console.log(`Somewhere in Europe\nHotel - ${(0.9 * budget).toFixed(2)}`)}}
}

    // switch(season1){
    //     case "summer":{
    //         if (budget < 100){ console.log(`Somewhere in Bulgaria\nCamp - ${(0.3 * budget).toFixed(2)}`)}
    //         else if (budget <= 1000){ console.log(`Somewhere in Balkans\nCamp - ${(0.4 * budget).toFixed(2)}`)}
    //         else if (budget > 1000){ console.log(`Somewhere in Europe\nCamp - ${(0.9 * budget).toFixed(2)}`)};break;

    //     case "winter":{
    //         {
    //            if (budget < 100){ console.log(`Somewhere in Bulgaria\nHotel - ${(0.7 * budget).toFixed(2)}`)}
    //             else if (budget <= 1000){ console.log(`Somewhere in Balkans\nHotel - ${(0.8 * budget).toFixed(2)}`)}
    //             else if (budget > 1000){ console.log(`Somewhere in Europe\nHotel - ${(0.9 * budget).toFixed(2)}`)}}
    //         } offfff
    anotherSeasonalTaskRoadTripThisTime(["1500", "summer"])


// 06. Operations Between Numbers


function opBetNumAkACalc(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let oper = input[2];
    let d = ""
    
    switch(oper){
        case "+":{let c = (a+b); if (c%2 == 0){d = "even"} else{d = "odd"};console.log(`${a} + ${b} = ${a+b} - ${d}`)};break;
        case "-":{let c = (a-b); if (c%2 == 0){d = "even"} else{d = "odd"};console.log(`${a} - ${b} = ${a-b} - ${d}`)};break;
        case "*":{let c = (a*b); if (c%2 == 0){d = "even"} else{d = "odd"};console.log(`${a} * ${b} = ${a*b} - ${d}`)};break;
        case "/":   if (b ==0){console.log(`Cannot divide ${a} by zero`)} else  {console.log(`${a} / ${b} = ${(a/b).toFixed(2)}`)};break;
        case "%":  if (b ==0){console.log(`Cannot divide ${a} by zero`)} else   {console.log(`${a} % ${b} = ${(a%b)}`)};break;
    }
//nasty swithes

}
opBetNumAkACalc(["10",
"3",
"%"])



// 07. Hotel Room

function hotRoom(input){

    let studio = {"May":50, "June":75.2, "July":76, "August":76, "September":75.2,"October":50};
    let apartment = {"May":65, "June":68.7, "July":77, "August":77, "September":68.7,"October":65};
    let month = input[0];
    let days = Number(input[1]);
    let studioDeal = days * studio[month]
    let apartmentDeal = days * apartment[month]

    switch(month){
    case "May": if (days > 14){studioDeal *= 0.7; apartmentDeal *=0.9}else if (days >7){studioDeal *= 0.95};break
    case "October": if (days > 14){studioDeal *= 0.7;apartmentDeal *= 0.9} else if (days >7){studioDeal *= 0.95};break
    case "June":if (days > 14){studioDeal *= 0.8; apartmentDeal *= 0.9};break;
    case "September": if (days > 14){studioDeal *= 0.8; apartmentDeal *= 0.9};break;
    default: if (days > 14){apartmentDeal *= 0.9};break;
    
    }
    console.log(`Apartment: ${(apartmentDeal).toFixed(2)} lv.\nStudio: ${(studioDeal).toFixed(2)} lv.`)

}
