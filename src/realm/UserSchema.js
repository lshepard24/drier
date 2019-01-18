'use strict';

const UserSchema = {
  name: 'User',
  primarykey: 'id',
  properties: {
    email: 'string',
    username: 'string',
    password: 'string'
  }
};

export default { UserSchema };