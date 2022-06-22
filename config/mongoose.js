// configure mongo db
const mongoose = require("mongoose");
require("dotenv").config();
// local machine configuration
// mongoose.connect("mongodb://localhost:27017/users");

// mongoDb on atlas
mongoose.connect(
  `mongodb+srv://akhi123:${process.env.DATABASE_PASS}@rws-users.bl4gbgx.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to mongoDB"));

db.once("open", () => {
  console.log("Database connected");
});

module.export = db;
