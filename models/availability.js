//creating a virtue table so sequelize can run properly
module.exports = function(sequelize, DataTypes){
  var Availability = sequelize.define("availability", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    tutorUserName: {
      type: DataTypes.STRING
    },
    dow: {
      type: DataTypes.INTEGER
    },
    start: {
      type: DataTypes.STRING
    },
    end: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  }, {
    classMethods: {
      associate: function(models) {
        Availability.belongsTo(models.tutors, {
          foreignKey: 'tutorUserName'
        });
      }
    }
  });

  return Availability;
};