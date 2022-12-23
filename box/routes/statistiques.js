require('dotenv').config()
var express = require('express');
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const Jeu = require("../models/boxeur.js");


/* GET Jeus listing. */
router.get('/nombre-jeux-par-annee', async (req, res) => {
      await mongoose.connect(process.env.URI);
      try {    
        console.log(process.env.URI)

        const jeu = await Jeu.aggregate([{ $group : { _id : { year : {$year :  "$first_release_date"}}, count: { $sum: 1 } } }]);
        console.log(jeu)
        res.json(jeu);
      } catch(err) {
        console.log(err);
        res.status(500).json({erreur:'Une erreur est survenue…'});
      } finally {
        mongoose.connection.close();
      }
    });

    
module.exports = router;