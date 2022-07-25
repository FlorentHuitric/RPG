class Personnage {
    constructor(pseudo, classe, PV, attaque){
        this.pseudo = pseudo;
        this.classe = classe;
        this.PV = PV;
        this.attaque = attaque;
        this.niveau = 1;
    }
    evoluer(){
        this.niveau++ ;
        console.log(this.pseudo + " passe au niveau " + this.niveau);
    }
    verifierSante(){
        if (this.PV<= 0) {
            this.PV == 0;
            console.log(this.pseudo + " a perdu !")
        }
    }
    get informations(){
        return this.pseudo + this.classe + " a " + this.PV + " points de vie et est au niveau " + this.niveau;
    }
}

class Magicien extends Personnage{
    constructor(pseudo){
        super(pseudo, " le magicien", 170, 90);

    }
    attaquer(personnage){
        personnage.PV -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lançant un sort" + " (" + this.attaque + " dégats!)");
        this.evoluer();
        personnage.verifierSante();
    }
    coupSpecial(personnage){
        personnage.PV -=  this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial PUISSANCE DES ARCANES sur " + personnage.pseudo + " (" + this.attaque * 5 + " dégats!)");
        this.evoluer();
        personnage.verifierSante();
    }
}

class Guerrier extends Personnage{
    constructor(pseudo){
        super(pseudo, " le guerrier", 350, 50);
    }    
    attaquer(personnage){
        personnage.PV -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " en le frappant de son marteau (" + this.attaque + " dégats!)");
        this.evoluer();
        personnage.verifierSante();
    }
    coupSpecial(personnage){
        personnage.PV -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial MJOLLNIR DES FOUDRES ETERNELLES sur " + personnage.pseudo + "(" + this.attaque * 5 + " dégats!)");
        this.evoluer();
        personnage.verifierSante();
    }
}

// Initialisation des personnages

var gandalf = new Magicien("Gandalf");
var thor    = new Guerrier("Thor");
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);



// à faire : créer un format web avec sélection des classes de personnage et personnalisation du choix du pseudo
//           système de pile ou face pour l'avantage de commencer le combat   
