// Étape 3 : Créer la classe Personnage
class Personnage {
    constructeur(pseudo, classe, sante, attaque, niveau){
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