const express = require("express");
const cors = require("cors");
const categoryRoutes = require(
  "./routes/categoryRoutes"
);
const productRoutes =
  require("./modules/product/product.routes");

const unitRoutes =
  require("./modules/unit/unit.routes");



require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());
app.use(


  "/api/categories",
  categoryRoutes
);

app.use(
  "/api/units",
  unitRoutes
);

app.get("/", (req, res) => {
  res.json({
    message: "Stone ERP API Running",
  });
});
app.use(
  "/api/products",
  productRoutes
);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});