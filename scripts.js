function Telefon(marka, cena, kolor) {

    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
}

Telefon.prototype.printInfo = function () {
    console.log('Marka telefonu to ' + this.marka + ', cena to ' + this.cena + ', a kolor to ' + this.kolor + '.');
}

var iPhone6S = new Telefon('Apple', 2260, 'srebrny');
var Samsung = new Telefon('Samsung', 1550, 'czarny');
var OnePlus = new Telefon('OnePlus', 1299, 'czarny');

iPhone6S.printInfo();
Samsung.printInfo();
OnePlus.printInfo();