function Telefon(marka, cena, kolor) {

  this.marka = marka; 
  this.cena = cena;
  this.kolor = kolor;
};

  Telefon.prototype.printInfo = function() {
  console.log(“Marka telefonu to ” + this.marka + “, kolor to “ + this.kolor + “, a cena to “ + this.cena + “.”);
};

var iPhone6S = new Telefon(“Apple”, “srebrny”, 2260);
var Samsung = new Telefon("Samsung", "czarny", 1550);
var OnePlus = new Telefon("OnePlus", "czarny" 1299);

iPhone6S.printInfo();
Samsung.printInfo();
OnePlus.printInfo();