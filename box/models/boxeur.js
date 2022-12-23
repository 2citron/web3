const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OpponentSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 200, minLength: [2, 'Le nom doit être au moins long de 2 caractères']},
    nickname: {type: String, maxLength: 200, minLength: 2},
  }
)

const BoxeurSchema = new Schema(
  {
    nbGame: {type: Number, required: true, min: [0, 'Le nombre de match ne peut pas être négatif']},
    nbVictory: {type: Number, min: [0, 'Le nombre de victoire ne peut pas être négatif']},
    nbKO: {type: Number, min: [0, 'Le nombre de KO ne peut pas être négatif']},
    nbTKO: {type: Number, min: [0, 'Le nombre de TKO ne peut pas être négatif']},
    nbDefeat: {type: Number, min: [0, 'Le nombre de défaite ne peut pas être négatif']},
    name : {type: String, required: true, maxLength: 200, minLength: [2, 'Le nom doit être au moins long de 2 caractères']},
    nickname: {type: String, required: true, maxLength: 200, minLength: 1},
    firstMatch: {type: Date, required: true},
    isActive: {type: Boolean, required: true},
    opponents:[OpponentSchema],  
    cityBoxedIn:[{type: String}],
    weightClass: {type: String},
  }
);
//Exportation du modèle Boxeur
module.exports = mongoose.model('Boxeur', BoxeurSchema, 'boxeurs');
