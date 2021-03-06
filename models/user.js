module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false

        }
      });
      User.associate = function(models){
        User.hasOne(models.Member, {
            onDelete: "cascade"
        });
 }
      return User;
}