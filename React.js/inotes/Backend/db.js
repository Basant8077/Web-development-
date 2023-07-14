const mongoose = require('mongoose');
const connectToMongo = ()=>{
        mongoose
          .connect('mongodb://127.0.0.1:27017/Inotes')
            .then(()=>{
                console.log("MongoDB connected");
            })
            .catch((err)=>{
            console.log(`Connection failed ${err}`);
            })
}
module.exports = connectToMongo;