'use strict';
const lowkie = require('lowkie');
const Schema = lowkie.Schema;
const ObjectId = Schema.ObjectId;
const scheme = {
  id: ObjectId,
  entitytype: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  first_name: String,
  last_name: String,
  phone: String,
  status: {
    email_verified: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    mfa: {
      type: Boolean,
      default: false,
    },
  },
  primaryasset: {
    type: ObjectId,
    ref: 'Asset',
  },
  association: {
    organization: {
      type: ObjectId,
      ref: 'Organization',
    }, 
  },
  userroles: [{
    type: ObjectId,
    ref: 'Userrole',
  },
  ],
};

module.exports = {
  scheme,
  options: {},
  coreDataOptions: {
    docid: ['_id', 'name', ],
    sort: { createdat: -1, },
    search: ['first_name', 'last_name', 'email', ],
    population: 'association.organization primaryasset userroles',
  },
};