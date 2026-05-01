//  klavyeden n sayısı okutuluyor n sayısına uygun üçgen yıldız yapılacak tek satırla mavi cift 
// satırlar kırmızı renk 


var sayi = parseInt(prompt("LütfeN Sayı girin"))
sayi+=1
for(var i = 0; i<sayi ; i++){
    for(var j =0; j<i; j++){
        if(i%2==0){
            document.writeln("*".fontcolor("red"));
        }
        else{
            document.writeln("*".fontcolor("blue"))
        }
    }
    document.write("<br>")
}