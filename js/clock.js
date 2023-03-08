
let userName=prompt("Adınızı giriniz.") 
let myName=document.querySelector("#myName")
myName.innerHTML=userName;

function showTime(){  //fonksiyon olusturduk.

    let myClock =document.querySelector("#myClock");
    var date=new Date(); //date nesnesi olusturduk.

    //js'de gunler pazardan baslar. (Ilk index=0 pazar)
    var days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

    myClock.innerHTML=`
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getDay()]}
    `
}
setInterval(showTime,1000); //1000 milisn(1 sn)'de bir showTime fonksiyonunu cagirir.