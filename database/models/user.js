const User = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Phonebook,
      { foreignKey: 'user_id', as: 'phones' });
  };

  return User;
};

module.exports = User;
