module.exports = (sequelize, DataTypes) => {
  const Apartment = sequelize.define("Apartment", {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    block: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Apartment;
};
