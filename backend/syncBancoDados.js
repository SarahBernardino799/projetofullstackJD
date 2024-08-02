const sequelize = require("./bancoDados");
require('./model/modelUser')

const syncDB = async () => {
  try {
    
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log("ERROR", error);
  }
};

syncDB();