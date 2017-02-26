//creating a virtue table so sequelize can run properly
module.exports = function(sequelize, DataTypes){
  var Appointments = sequelize.define("appointments", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    tutorUserName: {
      type: DataTypes.STRING
    },
    studentUserName: {
      type: DataTypes.STRING
    },
    start: {
      type: DataTypes.STRING
    },
    end: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  }, {
    classMethods: {
      associate: function(models) {
        Appointments.belongsTo(models.tutors, {
          foreignKey: 'tutorUserName'
        });
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Appointments.belongsTo(models.students, {
          foreignKey: 'studentUserName'
        });
      }
    }
  });

  return Appointments;
};