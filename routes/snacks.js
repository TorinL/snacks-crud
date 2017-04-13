var express = require('express');
var router = express.Router();
var db = require('../db/index.js')

router.get('/', function(req, res, next) {
    db('snacks')
        .select('*')
        .then(snacks => {
            res.render('snacks/index', {snacks});
        })
        .catch(err => {
            console.log(err);
        })
})

router.get('/new', function (req, res, next) {
  res.render('snacks/new')
})

router.get('/:id', function(req, res, next) {
  var id = req.params.id
  db('snacks').select('*').where({ id }).first().then( snack => {
    res.render('snacks/show', { snack })
  })
})

router.get('/:id/edit', function(req, res, next) {
  var id = req.params.id
  db('snacks').select('*').where({ id }).first().then( snack =>{
   res.render('snacks/edit', { snack })
  })
})

router.post('/', function(req, res, next) {
  var snack = {
  name: req.body.name,
  image_url: req.body.image_url,
  review: req.body.review,
  rating: req.body.rating
}
db('snacks').insert(snack, '*').then(newSnack => {
  var id = newSnack[0].id
  res.redirect(`/snacks/${id}`)
})
})

router.put('/:id', function(req, res, next) {
  var id = req.params.id
  var snack = {
  name: req.body.name,
  image_url: req.body.image_url,
  review: req.body.review,
  rating: req.body.rating
}
db('snacks').update(snack, '*').where({ id }).then(newSnack => {
  var id = newSnack[0].id
  res.redirect(`/snacks/${id}`)
})
})

router.delete('/:id', function(req, res, next) {
  var id = req.params.id
  db('snacks').del().where({ id }).then(() => {
    res.redirect('/snacks')
  })
})

module.exports = router;
