const express = require("express");
const sequelize = require("./bancoDados");
const cors = require('cors');
const User = require("./model/modelUser");

const corsOptions = {
  origin: "*",
}

const app = express();

app.use(express.json());
app.use(cors(corsOptions))

const port = 1999;

app.post('/usuario', async (req, res) => {
  try {
   
    const usuario = await User.create(req.body)
    res.status(200).json(usuario)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})


sequelize.sync().then(() => {
  
  app.listen(port, () => {
    console.log("Servidor na url http://localhost:" + port);
  });
});