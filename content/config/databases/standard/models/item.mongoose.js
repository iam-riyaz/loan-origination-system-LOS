'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const scheme = {
  id: ObjectId,
  status: {
    type: String,
    default: 'draft',
  },
  publishat: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    unique: true,
  },
  title: String,
  dek: String,
  content: String,
  link: String,
  visibility: String,
  visibilitypassword: Date,
  random: Number,
  // primaryasset: {
  //   type: ObjectId,
  //   ref: 'Asset'
  // },
  primaryauthor: {
    type: ObjectId,
    ref: 'User',
  },
  // source: {
  //   type: ObjectId,
  //   ref: 'Source'
  // },

  // assets: [{
  //   type: ObjectId,
  //   ref: 'Asset'
  // }],
  // authors: [{
  //   type: ObjectId,
  //   ref: 'User'
  // }],
  // tags: [{
  //   type: ObjectId,
  //   ref: 'Tag'
  // }],
  // categories: [{
  //   type: ObjectId,
  //   ref: 'Category'
  // }],
  // contenttypes: [{
  //   type: ObjectId,
  //   ref: 'Contenttype'
  // }],
};

module.exports = {
  scheme,
  options: {},
  coreDataOptions: {
    docid: [ '_id', 'name', ],
    sort: { createdat: -1, },
    track_changes: false,
    search: [ 'name', 'title', 'dek', 'content', 'link', ],
    // limit: 500,
    // skip: 0,
    population: 'primaryauthor primaryasset asset assets authors tags categories contenttypes',
    // fields: {},
    // pagelength:15,
    // tract_changes:true,
    // xss_whitelist:['p','b'],
  },
};