const express = require('express');
const router = express.Router();

//@route  get api/contacts
//@desc   get all users contacts
//@access public
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

//@route  post api/contacts
//@desc   add  new contact
//@access private
router.post('/', (req, res) => {
  res.send('Add contact');
});

//@route  PUT api/contacts/:id
//@desc   update contact
//@access private
router.put('/:id', (req, res) => {
  res.send('update contact');
});

//@route  delete api/contacts/:id
//@desc   delet contact
//@access private
router.delete('/:id', (req, res) => {
  res.send('delete contact');
});

module.exports = router;
