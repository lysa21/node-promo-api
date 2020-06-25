module.exports = (sequelize, DataTypes) => {
  const promo = sequelize.define("promo", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    titre: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    iteration: {
      type: DataTypes.INTEGER,
      allowNull: false
    }}, {
      timestamps: true,

  });

  promo.associate = (models) => {
    promo.hasMany(models.apprenant);
  }

  return promo;
};
