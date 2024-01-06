
// Conditional Statements Advanced - Lab
// 01. Day of Week
// 02.Weekend or Working Day
// 03. Animal Type
// 04. Personal Titles
// 05. Small Shop
// 06. Number in Range
// 07.Working Hours
// 08.Cinema Ticket
// 09. Fruit or Vegetable
// 10. Invalid Number
// 11. Fruit Shop
// 12. Trade Commissions

// 01. Day of Week

function dayOfW(input){
    let dday = Number(input[0]);
    switch(dday){
    case 1:console.log("Monday"); break;
    case 2:console.log("Tuesday"); break;
    case 3:console.log("Wednesday"); break;
    case 4:console.log("Thursday"); break;
    case 5:console.log("Friday"); break;
    case 6:console.log("Saturday"); break;
    case 7:console.log("Sunday"); break;
    default: console.log("Error"); break;
    }

}


dayOfW(["2"])
// dayOfW(["1"])
// dayOfW(["3"])
// dayOfW(["4"])
// dayOfW(["5"])
// dayOfW(["6"])
// dayOfW(["7"])
// dayOfW(["-1"])

// 02.Weekend or Working Day

function workDay(input){
    let ddday = input[0];
    let dayss = ["Monday", "Tuesday"]
    switch(ddday){
        case "Saturday": 
        case"Sunday": console.log("Weekend"); break;
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": console.log("Working day"); break;
        default: console.log("Error");break;
    }
}

workDay(["Wednesday"])

// 03. Animal Type

function aniType(input){
    let types = ("crocodile", "tortoise", "snake", "dog");
    let incomming = input[0];
    if (types.includes(incomming)){checker = true}
    switch(incomming){
        case "dog": console.log("mammal"); break;
        case "crocodile":
        case "tortoise":
        case "snake": console.log("reptile"); break
        default: console.log("unknown")
    }
}

aniType(["tortoise"])

// 04. Personal Titles

function persTit(input){
    let someIndividual = Number(input[0]);
    let someGender = input[1];
    if (someGender == "f"){
        if(someIndividual < 16){
            console.log("Miss")
        }
        else {
            console.log("Ms.")}
    }
    else{
        if (someIndividual < 16){
            console.log("Master")
        }
    else {
        console.log("Mr.")
    }
    }
}
persTit(["1219",
"f"])

// 05. Small Shop

function smallShop(input){
    let city = input[1]
    let sofia1 = {'coffee': 0.5, 'water': 0.8, 'beer': 1.2, 'sweets': 1.45, 'peanuts': 1.6};
    let plovdiv1 = {'coffee': 0.4, 'water': 0.7, 'beer': 1.15, 'sweets': 1.3, 'peanuts': 1.5};
    let varna1 = {'coffee': 0.45, 'water': 0.7, 'beer': 1.1, 'sweets': 1.35, 'peanuts': 1.55};
    let sum = 0
    switch(city){
        case "Sofia":(sum = sofia1[input[0]] * Number(input[2]));break;
        case "Plovdiv":(sum = plovdiv1[input[0]] * Number(input[2])); break;
        case "Varna":(sum = varna1[input[0]] * Number(input[2]));break;

    }
    console.log(sum)
    
}
smallShop(["sweets",
"Sofia",
"2.23"])


// 06. Number in Range

function numRange(input){
    let num = Number(input[0]);
    if ((num <= 100) && (num >= -100) &&(num != 0)){console.log("Yes")}
    else console.log("No");
}

numRange(["0"])

// 07.Working Hours

function workHou(input){
    let hour = Number(input[0]);
    let day = input[1];

    switch(day){
        //case "Saturday": console.log("closed"); break;
        case"Sunday": console.log("closed"); break;
        // case "Monday":
        // case "Tuesday":
        // case "Wednesday":
        // case "Thursday":
        // case "Friday": console.log("Working day"); break;
        default: {
             if ((hour >= 10) && (hour <= 18)){console.log("open")}
             else {console.log("closed")}
        }
}
}

workHou(["11",
"Sunday"])

//08.Cinema Ticket

function cinTik(input){
    let ddday = input[0];
    switch(ddday){
        case "Saturday":
        case"Sunday": console.log("16"); break;
        case "Monday":
        case "Tuesday":
        case "Friday": console.log("12"); break;
        case "Wednesday":
        case "Thursday":console.log("14"); break;
}}

cinTik(["Sunday"])

//09. Fruit or Vegetable

function fruVeg(input){
    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];
    let vegs = ["tomato", "cucumber", "pepper", "carrot"];
    let checkProduct = input[0];
    if (fruits.includes(checkProduct)){
        console.log("fruit")
    }
    else if (vegs.includes(checkProduct)){
        console.log("vegetable")
    }
    else {console.log("unknown")};

}

fruVeg(["water"])

//10. Invalid Number

function invaNum(input){
    let checkNumber = Number(input[0]);
    if ((checkNumber != 0) || (200 > checkNumber > 100)){
        console.log("9")}
    else {console.log("invalid")};

}
invaNum(["1 05"])


// 11. Fruit Shop

function fruShop(input){

    

    let dict1 = {"banana": 2.50, "apple": 1.20,"orange":0.85, "grapefruit":1.45, "kiwi": 2.70, "pineapple": 5.50, "grapes": 3.85};
    let dict2 = {"banana": 2.70, "apple": 1.25,"orange":0.90, "grapefruit":1.60, "kiwi": 3, "pineapple": 5.60, "grapes": 4.2};
    let sum = 0;
    let day = input[1];
    let fruit = input[0];
    let quantiti = Number(input[2]);
    if (!dict1.hasOwnProperty(input[0])){
        console.log("error")}
    else{

    switch(day){
            case "Saturday":
            case"Sunday": console.log((dict2[fruit]*quantiti).toFixed(2)); break;
            case "Monday":
            case "Tuesday":
            case "Friday": 
            case "Wednesday":
            case "Thursday":console.log((dict1[fruit]*quantiti).toFixed(2));break;
            default: console.log("error");break;
        }
    }}


fruShop(["apple",
"Tuesday",
"2"])

// 12. Trade Commissions

function tradeCom(input){

    let city = input[0];
    let sales = Number(input[1]);
    let city_com = ["Sofia", 5, 7, 8, 12, "Varna", 4.5, 7.5, 10, 13, "Plovdiv", 5.5, 8, 12, 14.5]

    if ((!city_com.includes(city))||(sales < 0)){console.log("error")}
    else{
        if (0 <= sales && sales <= 500){
                if (city == city_com[0])
                {console.log((city_com[1]*sales/100).toFixed(2))}
                else if (city == city_com[5]){console.log((city_com[6]*sales/100).toFixed(2))}
                else if (city == city_com[10]){console.log((city_com[11]*sales/100).toFixed(2))}}
        else if (500 < sales && sales <= 1000){
                if (city == city_com[0]) {console.log((city_com[2]*sales/100).toFixed(2))}
                else if (city == city_com[5]){console.log((city_com[7]*sales/100).toFixed(2))}
                else if (city == city_com[10]){console.log((city_com[12]*sales/100).toFixed(2))}}
        else if  (1000 < sales && sales <= 10000){
            if (city == city_com[0]) {console.log((city_com[3]*sales/100).toFixed(2))}
            else if (city == city_com[5]){console.log((city_com[8]*sales/100).toFixed(2))}
            else if (city == city_com[10]){console.log((city_com[13]*sales/100).toFixed(2))}}
        else if (sales > 10000){
            if (city == city_com[0]) {console.log((city_com[4]*sales/100).toFixed(2))}
            else if (city == city_com[5]){console.log((city_com[9]*sales/100).toFixed(2))}
            else if (city == city_com[10]){console.log((city_com[14]*sales/100).toFixed(2))}}
        }

}

tradeCom(["Plovdiv",
"11000"])