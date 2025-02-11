interface Vehicule{
    marque: string;
    model: string;
    annee: number;
    demarrer(): void;
}



class Voiture implements Vehicule{
    demarrer(): void {
        console.log("ma voiture est démarre");
}
    marque: string;
    model: string;
    annee: number;
    constructor(marque: string, model: string, annee: number){
        this.marque = marque;
        this.model =model;
        this.annee = annee;
    }
}
const voiture = new Voiture("Tesla", "Model 3", 2022);
console.log(voiture.demarrer());