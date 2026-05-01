function soru1(){
    var metin="bugün java öğreniyorum"
    var sonuc;
    for(sonuc in metin ){
        if(sonuc%2==0){
            document.write(metin[sonuc])
        }
    }
}