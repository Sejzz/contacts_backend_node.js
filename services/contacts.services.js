
const ContactsModel = require('../model/contacts.model')

class ContactServices{
    static async createContacts(_Id, name, contact){
        const createContacts = new ContactsModel({name, contact})
        return await createContacts.save()
    }
    static async getuserContacts(_Id){
        const Contacts = await ContactsModel.find({_Id})
        return Contacts
    }
    static async delete(id){
        const deleted = await ContactsModel.findOneAndDelete({_id:id})
        return deleted;
    }
}

module.exports = ContactServices