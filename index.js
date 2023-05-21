import { Sequelize } from 'sequelize';

const {
  MYSQL_HOST,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} = process.env;
const sequelize = new Sequelize({
  'host': MYSQL_HOST,
  'database': MYSQL_DATABASE,
  'username': MYSQL_USER,
  'password': MYSQL_PASSWORD,
  'dialect': 'mariadb',
});

console.log('Deployment updated');

sequelize.authenticate().then(() => {
  console.log('Sequelize success');
}).catch(() => {
  console.log('Sequelized failed');
});