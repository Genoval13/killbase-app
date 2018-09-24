const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/contract', (_req, res,) => {
    knex('contracts')
        .orderBy('contractId')
        .then((contracts) => {
            res.render('contracts/contract', {title: 'Contracts', contracts});
        })
})

//View Add Contract Page
router.get('/contract/new', (_req, res) => {
    res.render('contracts/new', {title: `New Contract`});
});

//Update Contract
router.patch('/contract/patch/:contractId', (req, res, next) => {
    knex('contracts')
        .where('contractId', req.params.contractId)
        .first()
        .then((contract) => {
            if (!contract) {
                return next();
            }

            return knex('contracts')
            .where('contractId', '=', contract.contractId)
            .update({targetName: req.body.targetName, 
                targetLocation : req.body.targetLocation , 
                targetImg: req.body.targetImg, 
                targetSecurity: req.body.targetSecurity,
                clientName: req.body.clientName, 
                budget: req.body.budget
            })
        })
        .then(() => {
            knex('contracts')
            .orderBy('contractId')
            .then((contracts) => {
                res.render('contracts/contract', {title: 'contracts', contracts});
            })
        })
        .catch((err) => {
            next(err);
        });
});

//View Update contract Page
router.get('/contract/edit/:contractId', (req, res) => {
    knex('contracts')
        .where('contractId', req.params.contractId)
        .then((contract) => {
            console.log(contract);
            res.render('contracts/edit', {title: `Edit ${contract[0].contractName}`, contract});
        })
});

//View contract Profile
router.get('/contract/:contractId', (req, res, next) => {
    knex('contracts')
        .where('contractId', req.params.contractId)
        .first()
        .leftJoin('jobs', 'jobs.target', 'contracts.contractId')
        .leftJoin('assassins', 'assassins.assassinId', 'jobs.assassin')
        .then((contract) => {
            console.log(contract)
            if (!contract) {
                return next();
            }
            console.log('booyah')
            res.render('contracts/contractProfile', {title: `${contract.targetName}'s Contract`, contract});
        })
        .catch((err) => {
            console.log(err);
            next(err);
        });
});

//Add New contract
router.post('/contractPost', (req, res, next) => {
    knex('contracts')
        .insert({targetName: req.body.targetName, 
            targetLocation : req.body.targetLocation , 
            targetImg: req.body.targetImg, 
            targetSecurity: req.body.targetSecurity,
            clientName: req.body.clientName, 
            budget: req.body.budget, 
        })
        .then(() => {
            knex('contracts')
            .orderBy('contractId')
            .then((contracts) => {
                res.render('contracts/contract', {title: 'contracts', contracts});
            })
        })
        .catch((err) => {
            next(err);
        });
});

//Delete contract
router.delete('/contract/:contractId', (req, res, next) => {
    knex('contracts')
        .where('contractId', req.params.contractId)
        .first()
        .then((contract) => {
            if (!contract) {
                return next();
            }

            return knex('contracts')
                .where('contractId', '=', contract.contractId)
                .del();
        })
        .then(() => {
            knex('contracts')
                .orderBy('contractId')
                .then((contracts) => {
                    res.render('contracts/contract', {title: `contracts`, contracts})
                })
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/contract/assassin/:contractId', (req, res, next) => {
    knex('jobs')
        .where('jobId', req.params.jobId)
        .first()
        .join('assassins', 'assassins.assassinId', 'jobs.assassinId')
        .join('contracts', 'contracts.contractId', 'jobs.contractId')
        .then((contract) => {
            if (!contract) {
                return next();
            }

            return knex('jobs')
                .where('jobId', '=', jobs.jobId)
                .insert({assassinId: req.body.assassinId,
                contractId: req.body.contractId
            })
        })
        .then(() => {
            knex('contracts')
                .orderBy('contractId')
                .then((contracts) => {
                    res.render('contract/:contractId', {title: `Contracts`, contracts})
                })
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;