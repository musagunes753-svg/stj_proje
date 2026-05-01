// 54,45,15,94,1,4,48,67,75,25  notlarını diziye aktar en büyük ,en küçük ve ort bul

function soru3(){
not=[54,45,15,94,1,4,48,67,75,25];

var enBuyuk,enKucuk,ort,top=0;

enBuyuk = not[0]
enKucuk= not[0]

for(var i=0; i<not.lenght; i++){
    top=top+not[i];
    if(enBuyuk<not[i]){
        enBuyuk=not[i];
    }
    if(enKucuk>not[i]){
        enKucuk=not[i]
    }
}

ort=top/not.lenght;

alert(not)
alert("en kucuk ="+enKucuk+"en buyuk="+enBuyuk+"ort"+not)


}





