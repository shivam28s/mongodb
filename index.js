const mongoose=require('mongoose');
// const { stringify } = require('querystring');
const port=80;
mongoose.connect('mongodb://admin:9675:172.30.164.3/mongodb',
{
    useNewUrlParser:true,useUnifiedTopology:true
});
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('connected successfully')
});
var contactSchema=new mongoose.Schema({
    name:String,
    phone:String,
    about:String
})
contactSchema.methods.speak=function(){
    greet="speak bhai"
    console.log(greet);
}

var contact=mongoose.model('contact',contactSchema);

var contact1=new contact({
    name:'shivam',
    about:'good boy'
})
var contact2=new contact({
    name:'kumar',
    phone:'723891'

})

console.log(contact1)
contact1.speak();
contact1.save(function(){
    // if(err)return console.error(err);
    // contact1.speak();
})
// contact.save(function(err,k){
//     if(err)return console.error(err);
//     k.speak();
// })