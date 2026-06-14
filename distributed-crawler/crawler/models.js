const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Page = sequelize.define('Page', {
  url: {
    type: DataTypes.TEXT,
    primaryKey: true
  },
  title: DataTypes.TEXT,
  content: DataTypes.TEXT,
  html: DataTypes.TEXT,
  crawledAt: DataTypes.DATE
});

const InvertedIndex = sequelize.define('InvertedIndex', {
  term: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  urls: {
    type: DataTypes.JSONB,
    defaultValue: []
  }
});

module.exports = { Page, InvertedIndex, sequelize };
