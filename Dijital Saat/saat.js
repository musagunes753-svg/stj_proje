function guncelle() {
    var zaman = new Date()
    var saatdeğeri = zaman.getHours()
    var dakika = zaman.getMinutes()
    var saniye = zaman.getSeconds()
    document.getElementById("saat").innerHTML = ekle(saatdeğeri) + " " + ekle(dakika) + " " + ekle(saniye)
}
setInterval(guncelle, 1000)

function ekle(deger) {
    var stringyap = deger.toString()
    var uzunluk = stringyap.length;
    if (uzunluk == 1) {
        return "0" + stringyap
    }
    else {
        return stringyap
    }

}


setInterval(renkdeğiş, 1000)
function renkdeğiş() {
    var sayi = Math.round(Math.random() * 10);
    if (sayi == 1) {
        document.body.style.backgroundColor = "red"
    }
    else if (sayi == 2) {
        document.body.style.backgroundColor = "blue"
    }
    else if (sayi == 3) {
        document.body.style.backgroundColor = "orange"
    }
    else if (sayi == 4) {
        document.body.style.backgroundColor = "yellow"
    }
    else if (sayi == 5) {
        document.body.style.backgroundColor = "gray"
    }
    else if (sayi == 6) {
        document.body.style.backgroundColor = "purple"
    }
    else if (sayi == 7) {
        document.body.style.backgroundColor = "lightblue"
    }
    else if (sayi == 8) {
        document.body.style.backgroundColor = "green"
    }
    else if (sayi == 9) {
        document.body.style.backgroundColor = "pink"
    }
    else {
        document.body.style.backgroundColor = ""
    }


}