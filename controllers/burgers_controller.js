const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data){
        var hbsObject = {
        burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function(req, res) {
    var name = req.body.burgerName

    burger.create(
        name, function (result) {
        console.log(result);
        res.json(result)
    })
});

router.put("/burgers/:id", function(req, res) {

    burger.update(req.params.id, function(result) {
        console.log(result);
            res.json(result)
   
    });
});
       
router.delete("/burgers/:id", function(req,res) {
    const condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;