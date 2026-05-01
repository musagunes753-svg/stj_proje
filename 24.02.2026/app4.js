// 5 kişinin maaaşı dışardan al 1000tl altını %20 artır güncel maas ekrana yazdır



//     var yuzde=0;


// var kisi1=Number( prompt("Lütfen Maaşını gir kisi1 "))
// var kisi2=Number( prompt("Lütfen Maaşını gir kisi2 "))
// var kisi3=Number( prompt("Lütfen Maaşını gir kisi3 "))
// var kisi4=Number( prompt("Lütfen Maaşını gir kisi4 "))
// var kisi5=Number( prompt("Lütfen Maaşını gir kisi5 "))

// var maaslar=[kisi1,kisi2,kisi3,kisi4,kisi5];





// for(var i =0 ; i<maaslar; i++){
//     if(i<1000){
//         yuzde = (i*20)/100
//         alert(maaslar)
//     }
//     else{
//         alert(maaslar)
//     }
// }


function soru4(){

var maas=new Array(5);

for(var i=0; i<5; i++){
    maas[i]=parseInt(prompt((i+1)+"kişi maaşınızı giriniz"))
    if(maas[i]<1000){
        maas[i]=maas[i]+maas[i]*0.20
    }
}
alert(maas)


}