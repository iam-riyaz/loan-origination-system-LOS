'use strict';
const Sequelize = require('sequelize');

const scheme = {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usergroupid: {
    type: Sequelize.INTEGER,
    unique: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  description: {
    type: Sequelize.TEXT,
  },
  random: {
    type: Sequelize.FLOAT,
  },
};

const options = {
  underscored: true,
  timestamps: true,
  indexes: [{
    fields: ['createdat'],
  }],
};

const associations = [
  {
    source: 'usergroup',
    association: 'hasMany',
    target: 'userrole',
    options: {
      as: 'roles',
    }
  },
  {
    source: 'usergroup',
    association: 'hasOne',
    target: 'user',
    options: {
      as: 'author',
    },
  },
];

module.exports = {
  scheme,
  options,
  associations,
  coreDataOptions: {
    docid: ['_id', 'name'],
    sort: { createdat: -1, },
    search: ['title', 'name', 'description'],
    population: 'roles author'
  },
};