'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    role: DataTypes.STRING
  }, {});
  events.associate = function(models) {
    // associations can be defined here
  };
  return events;
};