// 1 ile 50 arasında random dizi oluşturup  5 elemanlı dizi yapacan bu sayılar 20den buyuk ve tek olan kac tane olduğunu bulun


function soru5(){
var dizi= new Array(5),adet=0;

for(var i=0; i<5; i++){
    dizi[i]=Math.floor(Math.random()*51)
    
    if(dizi[i]>20 & dizi[i]%2!=0){
        adet++;
    }

}

alert(dizi+"  "+"istenilen sayı adeti="+adet)


}