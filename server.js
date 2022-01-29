console.log('running');
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 4000;
const authRoute = require("./Routes/authRoute");
const productRoute = require("./Routes/productRoute");
const customerRoute = require("./Routes/customerRoute");
const caisseRoute = require("./Routes/caisseRoute");
const soldRoute = require("./Routes/soldRoute");

//? data base connection
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("data base connecte"))
  .catch((err) => {
    throw new Error(err);
  });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.get("Origin") || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "X-HTTP-Method-Override, Accept, Authorization, Content-Type, X-Requested-With, Range"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  } else {
    return next();
  }
});

// app.use(cors())
app.use(cookieParser());
app.use(express.static("public"));

app.use(express.static(path.resolve("uploads")));
app.use("/uploads", express.static("/uploads/"));
app.use(express.json());
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.use(cors(corsOptions));

app.use(authRoute);
app.use(productRoute);
app.use(customerRoute);
app.use(soldRoute);
app.use(caisseRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "build")));

  app.get("*", (req, res) => {
    console.log("ddddddddddddddddd");
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
server.listen(PORT, () => {
  console.log("listening on PORT : ", PORT);
});

// modification
