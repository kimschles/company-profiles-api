const connString = process.env.MONGODB_URI || 'localhost/diversity';
const db = require('monk')(connString);
const company = db.get('company');

module.exports = {
  db,
  company
};
