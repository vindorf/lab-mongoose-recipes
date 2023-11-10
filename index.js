const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://127.0.0.1:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return Recipe.deleteMany();
  })
  .then(() => {
    // Recipe.insertMany(data).then((res) => console.log(res.title));
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

  const pro1 = Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'},{duration: 100})
  


  const pro2 = Recipe.deleteOne({title: 'Carrot Cake'})
  

  Promise.all([pro1, pro2])
    .then(values => {
      console.log('one updat and 1 one delete');
      console.log(values);
  
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
