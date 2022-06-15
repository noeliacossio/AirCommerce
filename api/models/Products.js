const S = require('sequelize');
const db = require('../db');

class Products extends S.Model {}

Products.init(
  {
    barcode: {
      type: S.BIGINT,
      allowNull: false,
    },
    brand: {
      type: S.STRING,
      allowNull: false,
    },
    model: {
      type: S.STRING,
      allowNull: false,
    },
    //ver si dejamos esta categoria
    color: {
      type: S.STRING,
      allowNull: false,
    },
    size: {
      type: S.DECIMAL,
      allowNull: false,
    },
    url_path: {
      type: S.TEXT,
      allowNull: true,
    },
    price: {
      type: S.DECIMAL,
      
    },
    stock: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'products' }
);

Products.addHook('afterCreate', product => {
  product.url_path = `/${product.id}.jpg`  
})

module.exports = Products;
