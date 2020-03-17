require('dotenv').config();
const { Client } = require('pg');
const client = new Client();

const createTable = async function() {
  try {
    const sql = await client.query(
      `CREATE TABLE IF NOT EXISTS 
           Visitors(
            ID SERIAL PRIMARY KEY,
            Visitor_Name VARCHAR(100),
            Assistant_Name VARCHAR(100),
            Visitor_Age INTEGER,
            Date_Of_Visit DATE,
            Time_Of_Visit TIME,
            Comments VARCHAR(225)
        );`
    );
    // console.log(sql.rows)
  } catch (e) {
    console.log(e);
  }
};
createTable();

const addNewVisitor = async function(
  Name,
  Age,
  date,
  Time,
  Assistant,
  Comments
) {
  try {
    const sql =
      'INSERT INTO Visitors(Visitor_Name, Visitor_Age, Date_Of_Visit, Time_Of_Visit, Assistant_Name, Comments) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *';
    const data = [Name, Age, date, Time, Assistant, Comments];

    let results = await client.query(sql, data);
    return results.rows;
  } catch (error) {
    console.log(error);
  }
};
addNewVisitor();

const listVisitors = async function() {
  const sql = 'Select ID, Visitor_Name FROM Visitors';

  try {
    results = await client.query(sql);

    return results.rows;
  } catch (error) {
    console.log(error);
  }
};

const deleteVisitor = async function(ID) {
  const sql = 'DELETE FROM Visitors WHERE ID= $1';
  const data = [ID];

  try {
    results = await client.query(sql, data);

    return results;
  } catch (error) {
    console.log(error);
  }
};

const updateVisitor = async function(
  ID,
  Name,
  Age,
  date,
  Time,
  Assistant,
  Comments
) {
  const sql =
    'UPDATE Visitors SET Visitor_Name= $2, Visitor_Age= $3, Date_Of_Visit= $4, Time_Of_Visit= $5, Assistant_Name= $6, Comments= $7 Where ID= $1';
  const data = [ID, Name, Age, date, Time, Assistant, Comments];

  try {
    results = await client.query(sql, data);

    return results;
  } catch (error) {
    console.log(error);
  }
};

const viewVisitor = async (ID) => {
  const sql = 'SELECT * FROM Visitors WHERE ID= $1 ';
  const data = [ID];

  try {
    results = await pool.query(sql, data);

    return results.rows;
  } catch (error) {
    console.log(error);
  }
};
const dropVisitors = async function() {
  const sql = 'DELETE FROM Visitors';

  try {
    results = await pool.query(sql);
    return results.rows;
  } catch (error) {
    console.log(error);
  }
};
