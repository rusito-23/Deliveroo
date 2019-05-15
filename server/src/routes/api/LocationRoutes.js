const model = require('../../model');
const router = require('express').Router();


// GET
router.get('/', (req, res, next) => {
    model.Location.find({}).select({_id: 0, name: 1, coordX: 1, coordY: 1})
        .then(function (data) {
            res.send(data);
        }).catch(err => next(err))
});

// POST
router.post('/', (req, res, next) => {
    new model.Location(req.body).save()
        .then(function (loc) {
            res.status(200).send(loc.id);
        }).catch(err => next(err))
});

module.exports = router;
