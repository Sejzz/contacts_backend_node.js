const app = require('./app');
const database = require('./configurations/database')
const UserModel = require('./model/user.model')
const ContactsModel = require('./model/contacts.model')
const port = 3334;


app.get('/',(req,res)=> {
    res.send("Hello world!!hehehe!!")
});
var listener = app.listen(port,()=>{
    console.log("Server Listening on Port http://localhost:"
     + listener.address().port);
});