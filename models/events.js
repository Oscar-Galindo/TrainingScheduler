'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    
      eventName: DataTypes.STRING,
      eventDate: DataTypes.DATE,
      eventTime: DataTypes.DATE,
      eventLocation: DataTypes.STRING
    
  }, {});
  events.associate = function(models) {
    // associations can be defined here
  };
  return events;
};