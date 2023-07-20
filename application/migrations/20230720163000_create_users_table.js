const fs = require('fs');
const path = require('path');

exports.up = pgm => {
  const sqlPath = path.join(__dirname, './sql/20230720163000_create_users_table.up.sql');
  const sql = fs.readFileSync(sqlPath, { encoding: 'utf-8' });
  pgm.sql(sql);
};

exports.down = pgm => {
  const sqlPath = path.join(__dirname, './sql/20230720163000_create_users_table.down.sql');
  const sql = fs.readFileSync(sqlPath, { encoding: 'utf-8' });
  pgm.sql(sql);
};