const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//View all assassins
router.get('/assassin', (_req, res,) => {
    knex('assassins')
        .orderBy('assassinId')
        .then((assassins) => {
            res.render('assassins/assassin', {title: 'Assassins', assassins});
        })
});

//View Add Assassin Page
router.get('/assassin/new', (_req, res) => {
    res.render('assassins/new', {title: `New Assassin`});
});

//Update Assassin
router.post('/assassin/patch/:assassinId', (req, res, next) => {
    knex('assassins')
        .where('assassinId', req.params.assassinId)
        .first()
        .then((assassin) => {
            if (!assassin) {
                return next();
            }

            return knex('assassins')
            .where('assassinId', '=', assassin.assassinId)
            .update({assassinName: req.body.assassinName, 
                codeName: req.body.codeName, 
                weapon: req.body.weapon, 
                contactInfo: req.body.contactInfo,
                age: req.body.age, 
                minPrice: req.body.minPrice, 
                rating: req.body.rating, 
                kills: req.body.kills}, '*')
        })
        .then(() => {
            knex('assassins')
            .orderBy('assassinId')
            .then((assassins) => {
                res.render('assassins/assassin', {title: 'Assassins', assassins});
            })
        })
        .catch((err) => {
            next(err);
        });
});

//View Update Assassin Page
router.get('/assassin/edit/:assassinId', (req, res) => {
    knex('assassins')
        .where('assassinId', req.params.assassinId)
        .then((assassins) => {
            res.render('assassins/edit', {title: `Edit ${assassins[0].assassinName}`, assassins});
        })
});

//View Assassin Profile
router.get('/assassin/:assassinId', (req, res, next) => {
    knex('assassins')
        .where('assassinId', req.params.assassinId)
        .first()
        .join('jobs', 'jobs.assassin', 'assassins.assassinId')
        .join('contracts', 'contracts.contractId', 'jobs.target')
        .then((assassin) => {
            if (!assassin) {
                return next();
            }

            res.render('assassins/assassinProfile', {title: `${assassin.assassinName}'s Profile`, assassin});
        })
        .catch((err) => {
            next(err);
        });
});

//Add New Assassin
router.post('/assassin', (req, res, next) => {
    knex('assassins')
        .insert({assassinName: req.body.assassinName, 
            codeName: req.body.codeName, 
            weapon: req.body.weapon, 
            contactInfo: req.body.contactInfo,
            age: req.body.age, 
            minPrice: req.body.minPrice, 
            rating: req.body.rating, 
            kills: req.body.kills}, '*')
        .then(() => {
            knex('assassins')
            .orderBy('assassinId')
            .then(() => {
                res.redirect(302, '/assassin');
            })
        })
        .catch((err) => {
            next(err);
        });
});

//Delete Assassin
router.get('/assassin/delete/:assassinId', (req, res, next) => {
    knex('assassins')
        .where('assassinId', req.params.assassinId)
        .first()
        .then((assassin) => {
            if (!assassin) {
                return next();
            }

            return knex('assassins')
                .where('assassinId', '=', assassin.assassinId)
                .del();
        })
        .then(() => {
            knex('assassins')
                .orderBy('assassinId')
                .then((assassins) => {
                    res.render('assassins/assassin', {title: `Assassins`, assassins})
                })
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;