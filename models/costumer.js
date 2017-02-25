
module.exports = function(sequelize, DataTypes){
var costumer = sequelize.define("costumer", {


costumerName: {
    type: DataTypes.STRING,
    allowNull: false
  }

},{//adding foreign key to the table,, it will know to add the id column which is unique
    classMethods: {
      associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        costumer.hasMany(models.burgerSequelize, {
          // onDelete: "CASCADE",
          // foreignKey: {
          //   allowNull: false
          // }
        });
      }
    }
  },{
	timestamps: false
}
  // Add another "configuration" obect as an argument to set up an association to Authors
  // Example: http://docs.sequelizejs.com/en/1.7.0/articles/express/#modelstaskjs
  );
  return costumer;// },{
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





}

