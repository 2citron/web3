require('dotenv').config()
var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Boxeur = require("../models/boxeur.js");


/* GET Boxeurs listing. */
router.get('/', async (req, res) => {
      await mongoose.connect(process.env.URI);
      try {    
        console.log(process.env.URI)
        const boxeur = await Boxeur.find();
        console.log(boxeur)
        res.json(boxeur);
      } catch(err) {
        console.log(err);
        res.status(500).json({erreur:'Une erreur est survenue…'});
      } finally {
        mongoose.connection.close();
      }
    });
    router.get('/:id', async (req, res) => {
      await mongoose.connect(process.env.URI);
      try {    
        console.log(process.env.URI)
        const boxeur = await Boxeur.findOne({_id: req.params.id});
        console.log(boxeur)
        res.json(boxeur);
      } catch(err) {
        console.log(err);
        res.status(500).json({erreur:'Une erreur est survenue…'});
      } finally {
        mongoose.connection.close();
      }
    });

    router.get('/debut/:min/:max', async (req, res) => {
        await mongoose.connect(process.env.URI);
        try {    
          console.log(process.env.URI)
          const boxeur = await Boxeur.find({firstMatch: {$gte: req.params.min, $lte: req.params.max}});
          console.log(boxeur)
          res.json(boxeur);
        } catch(err) {
          console.log(err);
          res.status(500).json({erreur:'Une erreur est survenue…'});
        } finally {
          mongoose.connection.close();
        }
      });

      router.get('/categorie-de-poids/:poids', async (req, res) => {
        await mongoose.connect(process.env.URI);
        try {    
          console.log(process.env.URI)
          const boxeur = await Boxeur.find({weightClass: req.params.poids});
          console.log(boxeur)
          res.json(boxeur);
        } catch(err) {
          console.log(err);
          res.status(500).json({erreur:'Une erreur est survenue…'});
        } finally {
          mongoose.connection.close();
        }
      });

      router.post('/', async (req, res) => {  
        await mongoose.connect(process.env.URI);
          try {
          const boxeur = new Boxeur(req.body);
          const nouvelBoxeur = await boxeur.save();
          res.json(nouvelBoxeur);
        } catch(err) {
          console.log(err);
          //res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
          res.status(200).json({erreur: err.message});
        } finally {
          mongoose.connection.close();
        }
      });
  router.put('/:id/', async(req, res) => {
    await mongoose.connect(process.env.URI);
      try {
      const updateDoc = {
        $set: req.body
      };
      // create a filter for a movie to update
      const filter = { _id: req.params.id };
      // this option instructs the method to create a document if no documents match the filter
      const options = { upsert: true };
      // create a document that sets the plot of the movie
      const updateBoxeur = await Boxeur.updateOne(filter, updateDoc, options);;
      res.json(updateBoxeur);
    } catch(err) {
      console.log(err);
      //res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
      res.status(200).json({erreur: err.message});
    } finally {
      mongoose.connection.close();
    }
  });


  router.delete('/:id/', async(req, res) => {
    await mongoose.connect(process.env.URI);
    try {
    const boxeur = await Boxeur.deleteOne({_id: req.params.id});
    res.json(boxeur);
  } catch(err) {
    console.log(err);
    //res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
    res.status(200).json({erreur: err.message});
  } finally {
    mongoose.connection.close();
  }
  });

module.exports = router;
