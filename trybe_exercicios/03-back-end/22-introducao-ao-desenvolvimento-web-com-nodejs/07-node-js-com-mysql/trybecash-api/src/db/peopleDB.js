// src/db/peopleDB.js

const conn = require('./connection');

const findAll = () => conn.execute('SELECT * FROM people');

const findById = (id) =>
  conn.execute('SELECT * FROM people WHERE id = ?', [id]);

const insert = (person) =>
  conn.execute(
    `INSERT INTO people 
      (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone]
  );

module.exports = {
  insert,
  findAll,
  findById,
};
