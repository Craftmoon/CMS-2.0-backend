const express = require("express"),
  db = require("../models"),
  ApartmentController = require("../services/ApartmentService");

const router = express.Router();

// ############################## Apartments
// get all apartments
router.get("/all", (req, res) => {
  db.Apartment.findAll().then((apartments) => res.send(apartments));
});

// get one by primary key (id)
router.get("/find/:id", (req, res) => {
  db.Apartment.findByPk(req.params.id).then((apartment) => res.send(apartment));
});

// post new apartment
router.post("/new", (req, res) => {
  db.Apartment.create({
    number: req.body.number,
    block: req.body.block,
  }).then((submittedApartment) => res.send(submittedApartment));
});

// update apartment
router.put("/edit", (req, res) => {
  db.Apartment.update(
    {
      number: req.body.number,
      block: req.body.block,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then(() => res.send("Successfully updated."));
});

// delete one by primary key (id)
router.delete("/delete/:id", (req, res) => {
  db.Apartment.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.send("Successfully deleted.");
  });
});

module.exports = router;
