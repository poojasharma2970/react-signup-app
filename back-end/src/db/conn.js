const mongoose = require('mongoose');

// mongodb connection
mongoose.connect(
     `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster.xkslz.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
     {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false
     }
).then(() => {
     console.log(`Databse connected successfully`);
}).catch((err) => console.log(`Database connection failed`));