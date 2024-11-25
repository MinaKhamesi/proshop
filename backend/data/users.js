import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin user',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true
  },
  {
    name: 'user1',
    email: 'user1@email.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false
  },
  {
    name: 'user2',
    email: 'user2@email.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false
  }
]

export default users;