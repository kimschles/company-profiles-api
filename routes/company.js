// CHECK `TODO` NOTICES BELOW FILE!!!

const { company } = require('../db');
const router = (module.exports = require('express').Router());

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

// IMPORTANT: Don't forget data validation, restrictions
// - use mongoose, Joi, bookshelf, *schema lib, etc.

function getAll(req, res, next) {
  company
    .find({})
    .then(company => res.status(200).send({ data: company }))
    .catch(next);
}

function getOne(req, res, next) {
  company
    .findOne({ id: req.params.id })
    .then(item => {
      if (!item) return res.status(404).send({ message: 'Item not found.' });
      res.status(200).send({ data: item });
    })
    .catch(next);
}
function create(req, res, next) {
  // Basic parameter limiting example (w/ destructuring):
  // const { brand, name } = req.body
  // if (!brand || !name) return next({ status: 400, message: 'Could not create new item.' })
  company
    .insert(req.body)
    .then(() => res.status(201).json({ message: 'Success', data: req.body }))
    .catch(next);
}

function update(req, res, next) {
  const { id } = req.params;
  company
    .findOneAndUpdate({ _id: id }, req.body)
    .then(() => res.status(200).json({ message: 'Success', data: req.body }))
    .catch(next);
}

function remove(req, res, next) {
  company
    .findOneAndDelete({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Removed' }))
    .catch(next);
}
