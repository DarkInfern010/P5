var Haut;
var HautGauche;
var HautDroit;
var Milieu;
var BasGauche;
var BasDroit;
var Bas;

var tabSeg = [];

function setup() {
    createCanvas(window.innerWidth - 20, window.innerHeight - 20);
    // rect(x, y, w, h)
    Haut = new Segment(60, 20, 220, 55, 50)
    HautGauche = new Segment(30, 75, 55, 220, 50)
    HautDroit = new Segment(250, 75, 55, 220, 50)
    Milieu = new Segment(60, 295, 220, 55, 50)
    BasGauche = new Segment(30, 350, 55, 220, 50)
    BasDroit = new Segment(250, 350, 55, 220, 50)
    Bas = new Segment(60, 570, 220, 55, 50)

    tabSeg.push(Haut);
    tabSeg.push(HautGauche);
    tabSeg.push(HautDroit);
    tabSeg.push(Milieu);
    tabSeg.push(BasGauche);
    tabSeg.push(BasDroit);
    tabSeg.push(Bas);
}

function ActiveNum(numero) {
    for (var i = 0; i < tabSeg.length; i++) {
        tabSeg[i].active = false;
    }

    if (numero == "0") {
        Haut.active = true
        HautGauche.active = true
        HautDroit.active = true
        BasGauche.active = true
        BasDroit.active = true
        Bas.active = true
    }
    if (numero == "1") {
        HautDroit.active = true
        BasDroit.active = true
    }
    if (numero == "2") {
        Haut.active = true
        HautDroit.active = true
        Milieu.active = true
        BasGauche.active = true
        Bas.active = true
    }
    if (numero == "3") {
        Haut.active = true
        HautDroit.active = true
        Milieu.active = true
        BasDroit.active = true
        Bas.active = true
    }
    if (numero == "4") {
        HautGauche.active = true
        HautDroit.active = true
        Milieu.active = true
        BasDroit.active = true
    }
    if (numero == "5") {
        Haut.active = true
        HautGauche.active = true
        Milieu.active = true
        BasDroit.active = true
        Bas.active = true
    }
    if (numero == "6") {
        Haut.active = true
        HautGauche.active = true
        Milieu.active = true
        BasGauche.active = true
        BasDroit.active = true
        Bas.active = true
    }
    if (numero == "7") {
        Haut.active = true
        HautDroit.active = true
        BasDroit.active = true
    }
    if (numero == "8") {
        Haut.active = true
        HautGauche.active = true
        HautDroit.active = true
        Milieu.active = true
        BasDroit.active = true
        BasGauche.active = true
        Bas.active = true
    }
    if (numero == "9") {
        Haut.active = true
        HautGauche.active = true
        HautDroit.active = true
        Milieu.active = true
        BasDroit.active = true
        Bas.active = true
    }
}

function draw() {
    console.log(tabSeg);
    background(0);

    var h = hour().toString();
    var DizaineHeure = h[0];
    var UniteHeure = h[1];

    var m = minute().toString();
    var DizaineMinute = m[0];
    var UniteMinute = m[1];
    
    var s = second().toString();
    var DizaineSeconde = s[0];
    var UniteSeconde = s[1];

    ActiveNum(UniteSeconde);

    Haut.show();
    HautGauche.show();
    HautDroit.show();
    Milieu.show();
    BasGauche.show();
    BasDroit.show();
    Bas.show();
}