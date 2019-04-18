function setup() {
  createCanvas(400, 830);
	angleMode(DEGREES);
}

function draw() {
  background('#222f3e');
	translate(200,200);
	rotate(-90); //Changement de la rotation

  //Récupération des données
	let heure = hour();
	let minut = minute();
	let seconde = second();
  let jour = day();
  let mois = month();
  let annee = year();

  //Ajout d'un zéro pour la beauté
	if (heure < 10) heure = "0"+heure;
	if (minut < 10)	minut = "0"+minut;
	if (seconde < 10) seconde = "0"+seconde;

  //Cercle des secondes
	strokeWeight(8);
	stroke('#00a8ff');
	noFill();
	let secPos = map(seconde, 0, 60, 0, 360);
	arc(0,0,260,260,0, secPos);

  //Cercle des minutes
  strokeWeight(8);
	stroke('#4cd137');
	let minPos = map(minut, 0, 60, 0, 360);
	arc(0,0,280,280,0, minPos);

  //Cercle des heures
  strokeWeight(8);
	stroke('#8c7ae6');
	let hrPos = map(heure, 0, 24, 0, 360);
	arc(0,0,300,300,0, hrPos);

  //Aiguille des secondes suivant le cercle
	push();
	rotate(secPos);
	stroke('#00a8ff');
	line(0,0,100,0);
	pop();

  //Aiguille des minutes suivant le cercle
	push();
	rotate(minPos);
	stroke('#4cd137');
	line(0,0,75,0);
	pop();

  //Aiguille des heures suivant le cercle
	push();
	rotate(hrPos);
	stroke('#8c7ae6');
	line(0,0,50,0);
	pop();

  //Point au centre pour beauté
	stroke(255);
	point(0,0);

  //Affichage des temps en texte
	fill(255);
	noStroke();
  rotate(90);
  textAlign(CENTER);
  textSize(35);
	text(heure + ':' + minut + ':' + seconde, 0,200);

  //Transforme la date de chiffres en lettres
  if (mois == 01) mois = "Janvier";
  if (mois == 02) mois = "Février";
  if (mois == 03) mois = "Mars";
  if (mois == 04) mois = "Avril";
  if (mois == 05) mois = "Mai";
  if (mois == 06) mois = "Juin";
  if (mois == 07) mois = "Juillet";
  if (mois == 08) mois = "Août";
  if (mois == 09) mois = "Septembre";
  if (mois == 10) mois = "Octobre";
  if (mois == 11) mois = "Novembre";
  if (mois == 12) mois = "Décembre";

  //Affichage de la date en texte
  text(jour + ' ' + mois + ' ' + annee, 0, 270);

  //Affichage du fond du calendrier
  fill('gray');
  rect(-190,320,380,300);

  //Affichage du mois
  fill('black');
  text(mois,0,350);

  //Affiche de la séparation
  fill('black');
  rect(-180,355,360,5);

  //Constantes pour dessin
  taille = 40;
  x = -170;
  y = 370;

  //Constantes pour couleur
  jourfait = 1;

  //Construction des carrés pour mois a 31 jours
  if (mois == 01 || mois == 03 || mois == 05 || mois == 07 || mois == 08 || mois == 10 || mois == 12) {
    for (i = 0; i < 5; i++){
      for (j = 0; j < 7; j++){
        if (jourfait-1 < jour) {
          fill('white');
          rect(x,y,taille,taille);
          fill('black');
          textSize(25);
          text(jourfait,x+20,y+30);
          x += 50;
          jourfait++;
        } else {
          fill('black');
          rect(x,y,taille,taille);
          fill('white');
          textSize(25);
          text(jourfait,x+20,y+30);
          x += 50;
          jourfait++;
        }
      }
      y += 50;
      x -= 50*7;
    }

    fill('grey');
    rect(130,570,40,40);
    rect(80,570,40,40);
    rect(30,570,40,40);
    rect(-20,570,40,40);

  //Construction des carrés pour le mois du février
  } else if (mois == 02) {
    for (i = 0; i < 5; i++){
      for (j = 0; j < 7; j++){
        if (jourfait-1 < jour) {
          fill('white');
          rect(x,y,taille,taille);
          fill('black');
          textSize(25);
          text(jourfait,x+20,y+30);
          x += 50;
          jourfait++;
        } else {
          fill('black');
          rect(x,y,taille,taille);
          fill('white');
          textSize(25);
          text(jourfait,x+20,y+30);
          x += 50;
          jourfait++;
        }
      }
      y += 50;
      x -= 50*7;
    }
    fill('grey');
    rect(130,570,40,40);
    rect(80,570,40,40);
    rect(30,570,40,40);
    rect(-20,570,40,40);
    rect(-70,570,40,40);
    rect(-120,570,40,40);

  //Construction des carrés pour mois a 30 jours
  } else {
    for (i = 0; i < 5; i++){
      for (j = 0; j < 7; j++){
        if (jourfait-1 < jour) {
          fill('white');
          rect(x,y,taille,taille);
          fill('black');
          textSize(25);
          text(jourfait,x+20,y+30);
          x += 50;
          jourfait++;
        } else {
          fill('black');
          rect(x,y,taille,taille);
          fill('white');
          textSize(25);
          text(jourfait,x+20,y+30);
          x += 50;
          jourfait++;
        }
      }
      y += 50;
      x -= 50*7;
    }
    fill('grey');
    rect(130,570,40,40);
    rect(80,570,40,40);
    rect(30,570,40,40);
    rect(-20,570,40,40);
    rect(-70,570,40,40);
  }

}
