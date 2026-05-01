

function Faktoriyel() {
    var sayı = parseInt(document.getElementById("fak").value);
    var işlem = sayı * sayı
    document.getElementById("cevap2").innerHTML = işlem

    //yada

    // var carpim = 1;
    // var sayi = parseInt(document.getElementById("fak").value);
    // for (var i = 1; i < sayi; i++) {
    //     carpim *= i                                           //çalışmıyor
    // }
    // document.getElementById("cevap2").innerHTML = carpim
}

function mod() {
    var mod;
    var sayi1 = parseInt(document.getElementById("mod1").value);
    var sayi2 = parseInt(document.getElementById("mod2").value);
    mod = (sayi1 % sayi2)
    document.getElementById("cevap3").innerHTML = mod
}

function harika() {
    var sayi1 = parseInt(document.getElementById("harika").value);
    var toplam = 0;
    for (var i = 1; i < sayi1; i++) {
        if (sayi1 % i == 0) {
            toplam += i
        }

    }
    if (sayi1 == toplam) {

        document.getElementById("cevap4").innerHTML = ("mükemmel sayı")
    }
    else {
        document.getElementById("cevap4").innerHTML = ("mükemmel sayı değildir")

    }
}