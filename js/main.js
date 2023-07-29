/* if, else, else if*/
/*let a = 46;
let b = 10;
let c = 55;
let d = 21;*/
/*if(a == 46 && b == 10 && c == 55 && d == 21){
    console.log("...");
}
else{
    console.log("---");
}*/
/*if (a = 46 && b == 10 && c == 55 && d == 21){
    console.log("Qiymatlarning hammasi tog'ri")
}
else{
    console.log("Qiymatlardan kamida bittasi noto'g'ri")
}*/

/*if (a = 46 || b == 10 || c == 55 || d == 21){
    console.log("Qiymatlardan kamida bittasi tio'g'ri!")
}
else{
    console.log("Qiymatlarning hammasi noto'g'ri!")
}*/

/* JV data types: undefined,boolean,oblect*/

/*let soz;*/
/*let rost = true;*/
/*let rost = 45==45?true:false;*/
/*document.write(rost);*/
/*let arrayObject = [45,78,"text",true,false,"js"];*/
/*let oddiyObject = {ism:"Gulbaxor", familiya:"Nametova", yoshi: 15};*/
/*console.log(oddiyObject.ism,oddiyObject.familiya,oddiyObject.yoshi );*/

/* Functions in JS*/
/*let savatcha = [12,"text"];
document.write(savatcha.length);
if (savatcha.length == 0){
    document.write("Savatchaning ichida" +savatcha.length+ "Savatchaning ichida");
}
else {
    document.write("Savatchaning ichida" +savatcha.length+ "Savatchaning ichida");
}
function savatchaniTekshir(){
    alert("Saytimiga xush kelibsiz!");
}
savatchaniTekshir();*/


/* Date in JS*/
let sana = new Date();
/*sana.setFullYear( 2007);
sana.setMonth(0)
sana.setDate(19);*/

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();
let soat = sana.getTime();
let minut = sana.getHours();
let sekund = sana.getMilliseconds();
let oyy = sana.getMinutes();
let sanna = sana.getTimezoneOffset();
let kunn = sana.getUTCDate();
let soaat = sana.getSeconds();
let minuut = sana.getUTCDay();

let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentabr","oktabr","noyabr","dekabr"];
let kunlar = ["dushanba","seshanba","chorshanba","payshanba","juma","shanba","yakshanba"];

document.write("Bugun" + yil + " - yil " + oylar[oy] + " oyining " + kun + " - kuni. Haftaning " + haftaKuni[kun] + " - kuni.");






















