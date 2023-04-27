const ContactsServices = require('../services/contacts.services');

exports.createContacts = async (req,res,next) => {
    try {
        const{userId, name, contact} = req.body

        let contacts = await ContactsServices.createContacts(userId, name, contact)
        res.json({status: true, success:contacts})
    } catch (error) {
        next(error);
        
    }
}

exports.getContacts = async (req,res,next) => {
    try {
        const{userId} = req.body

        let contacts = await ContactsServices.getuserContacts(userId)
        res.json({status: true, success: contacts})
    } catch (error) {
        next(error);
        
    }
}

exports.delete = async (req,res,next) => {
    try {
        const{id} = req.body

        let deleted = await ContactsServices.delete(id)
        res.json({status: true, success: deleted})
    } catch (error) {
        next(error);
        
    }
}