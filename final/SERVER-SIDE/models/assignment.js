'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  assignment.init({
    assign_id: {
      primaryKey:true,
      autoIncrement:true,
      type :DataTypes.INTEGER
    },
    project_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    manager_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'assignment',
  });
  
  return assignment;
};