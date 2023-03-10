'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const scheme = {
  id: ObjectId,
  name: {
    index: true,
    type: String,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    index: true,
    enum: ['company', 'person', 'intermediary'],
  },
  createdat: {
    type: Date,
    default: Date.now,
  },
  updatedat: {
    type: Date,
    default: Date.now,
  },
  organization: {
    index: true,
    type: ObjectId,
    ref: 'Organization',
  },
  user: {
    creator: String,
    updater: String,
  },
  template: Schema.Types.Mixed,
};

module.exports = {
  scheme,
  options: {},
  coreDataOptions: {
    track_changes: false,
    docid: [ '_id', ],
    sort: { createdat: -1, },
    search: [ 'name', 'type' ],
    population: '',
  },
};