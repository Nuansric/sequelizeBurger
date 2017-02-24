
module.exports = function(sequelize, DataTypes){
var costumer = sequelize.define("costumer", {


costumerName: {
    type: DataTypes.STRING,
    allowNull: false
  }

},{
	timestamps: false
}// },{
//       // We're saying that we want our Author to have Posts
//   classMethods: {
//     associate: function(models) {
//           // Associating Author with Posts
//           // When an Author is deleted, also delete any associated Posts
//     costumer.be(models.burgerSequelize, {
//     onDelete: "cascade"
//     });
//         }
//       }
//     }




);
return costumer;

}

