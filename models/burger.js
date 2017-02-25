
module.exports = function(sequelize, DataTypes){
var burgerSequelize = sequelize.define("burgerSequelize", {


burger_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
devoured: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
// create_at: {
// 	type: DataTypes.DATE,
// 	allowNull: false,
// 	defaultValue: DataTypes.NOW
// }


},{//adding foreign key to the table,, it will know to add the id column which is unique
    classMethods: {
      associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        burgerSequelize.belongsTo(models.costumer, {
          // onDelete: "CASCADE",
          foreignKey: {
            allowNull: true
            // , defaultValue: 0
          }
        });
      }
    }
  }
  // Add another "configuration" obect as an argument to set up an association to Authors
  // Example: http://docs.sequelizejs.com/en/1.7.0/articles/express/#modelstaskjs
  );
  return burgerSequelize;
}