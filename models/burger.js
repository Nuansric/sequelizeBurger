
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


},{
	timestamps: true
}// },{
//       // We're saying that we want our Author to have Posts
//       classMethods: {
//         associate: function(models) {
//           // An Author (foreignKey) is required or a Post can't be made
//           burgerSequelize.hasMany(models.costumer, {
//             foreignKey: {
//               allowNull: false,
//               defaultValue: 0

//             }
//           });
//         }
//        }
//    }

);

return burgerSequelize;

}

