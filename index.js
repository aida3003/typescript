var Voiture = /** @class */ (function () {
    function Voiture(marque, model, annee) {
        this.marque = marque;
        this.model = model;
        this.annee = annee;
    }
    Voiture.prototype.demarrer = function () {
        console.log("ma voiture est démarre");
    };
    return Voiture;
}());
var voiture = new Voiture("Tesla", "Model 3", 2022);
console.log(voiture.demarrer());
