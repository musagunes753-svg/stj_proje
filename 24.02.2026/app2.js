// klavyeden girilen bir ingilizce cümledeki sesli ve sessiz harflerin sayısının ekranda yazdırın

function soru2(){
var kelime = prompt("bir kelime girin");

var sesli = 0, sessiz = 0, sonuc;
for (sonuc in kelime) {
    if (kelime[sonuc] == "a" || kelime[sonuc] == "e" || kelime[sonuc] == "ı" || kelime[sonuc] == "i" || kelime[sonuc] == "o" || kelime[sonuc] == "ö" || kelime[sonuc] == "u" || kelime[sonuc] == "ü") {
        sesli++

    }
    else{
        sessiz++
    }
}
alert("sesli:"+sesli+"sessiz:"+sessiz)

}