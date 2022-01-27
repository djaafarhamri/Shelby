const Caisse = require("../models/Caisse");

module.exports.getLaCaisse = async (req, res) => {
    try {
      const caisse = await Caisse.findOne({ id: 'caisse' });
      res.status(200).json(caisse);
    } catch (e) {
      console.log(e);
      res.status(400).json("error");
    }
  };
  
  module.exports.addToLaCaisse = async (req, res) => {
    const { montant } = req.body
    try {
      const caisse = await Caisse.findOne({id: 'caisse'});
      const c = await Caisse.findOneAndUpdate({id: 'caisse'}, {montant: caisse.montant + montant});
      res.status(200).json(`added: ${montant} in ${c.montant}`);
    } catch (e) {
      console.log(e);
      res.status(400).json("error");
    }
  };
  
  module.exports.takeFromLaCaisse = async (req, res) => {
    const { montant } = req.body;
    try {
      const caisse = await Caisse.findOne({ id: "caisse" });
      await Caisse.findOneAndUpdate({ id: "caisse" }, {$set: {montant: caisse.montant - montant}});
      res.status(200).json("taken");
    } catch (e) {
      console.log(e);
      res.status(400).json("error");
    }
  };
  