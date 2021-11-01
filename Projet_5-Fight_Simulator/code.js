// Étape 3 : Créer la classe Personnage
class Personnage {
    constructor(pseudo, classe, sante, attaque, niveau){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }
    get informations(){
        return this.pseudo + " (" + this.classe + ") a " + this.sante + " points de vie et est au niveau " + this.niveau + ".";
    }

    evoluer(){
        this.niveau++;
        console.log(this.pseudo + " passe au niveau " + this.niveau + " !");
    }
    verifierSante(){
        if (this.sante <= 0) {
            this.sante = 0;
            console.log(this.pseudo + " a perdu !");
        }
    }
}

// Étape 4 : Créer la classe Magicien
class Magicien extends Personnage {
    constructor(pseudo){
        super(pseudo, "magicien", 170, 90)
    }
    attaquer(personnage){
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lançant un sort (" + this.attaque + " dégâts)");
        this.evoluer();
        personnage.verifierSante();
    }
    coupSpecial(personnage){
        personnage.sante -= this.attaque * 5; 
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes "+ personnage.pseudo + " (" + (this.attaque * 5) + " dégâts)");
        this.evoluer();
        personnage.verifierSante();
    }
}

// Étape 5 : Créer la classe Guerrier
class Guerrier extends Personnage {
    constructor(pseudo){
        super(pseudo, "guerrier", 350, 50)
    }
    attaquer(personnage){
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son épée (" + this.attaque + " dégâts)");
        this.evoluer();
        personnage.verifierSante();
    }
    coupSpecial(personnage){
        personnage.sante -= this.attaque * 5; 
        console.log(this.pseudo + "  attaque avec son coup spécial haches de guerre "+ personnage.pseudo + " (" + (this.attaque * 5) + " dégâts)");
        this.evoluer();
        personnage.verifierSante();
    }
}