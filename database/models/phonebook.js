const Phonebook = (sequelize, DataTypes) => {
  const Phonebook = sequelize.define("Phonebook", {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
  }/*, {tableName: Nome_da_tabela} */);

  Phonebook.associate = (models) => {
    Phonebook.belongsTo(models.Users,
      { foreignKey: 'user_id', as: 'user' });
  };

  return Phonebook;
};

module.exports = Phonebook;
