// TODO: Move data layer to different module
const connString = 'localhost/diversity'; // TODO: Add env vars
const db = require('monk')(connString);
const company = db.get('company'); // TODO: move, roughly like: app/db/company.js:

module.exports = {
  db,
  company
};
