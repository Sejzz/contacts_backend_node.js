const router = require("express").Router();
const ContactsController = require("../controller/contacts.controller")

router.post('/storeContacts', ContactsController.createContacts);

router.get('/getContactList', ContactsController.getContacts);

router.post('/delete', ContactsController.delete);

module.exports = router;