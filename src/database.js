const { Client } = require('pg');
const client = new Client({
  user: "user",
  host: "localhost",
  database: "socials",
  password: "pass",
  port: 5432
});

client.connect(); // Making a connection between with the database

const addNewVisitor = async (name, age, visit_date, visit_time, assistant, comments) => {
  try {
    let results = await client.query(
      `INSERT INTO visitors(
            
            Visitor_Name,
            Visitor_Age,
            Date_Of_Visit,
            Time_Of_Visit,
            Assistant_Name,
            Comments
        ) values ($1, $2,$3, $4, $5, $6) returning *;`,
      [name, age,visit_date, visit_time, assistant, comments]
    );

    return results.rows;

  } catch (error) {
      throw error;
  }

};

const listAllVisits = async() => {
  const SQL = `SELECT visitor_ID, visitor_name FROM visitors;`
  try {
      query = await client.query(SQL);
      return query.rows;
  } catch (error) {
      throw error;
  }
};

const deleteVisit = async(id) => {
  try {
      let deleted = await client.query(`DELETE FROM visitors WHERE visitor_ID=$1;`, [id]);
      return deleted;
  } catch (error) {
      throw error;
  }
};

const updateVisit = async(id, where, value) => {
  try {
      let updated = await client.query(`UPDATE visitors SET ${where}= $2 WHERE visitor_ID=$1;`, [id, value]);
      return updated;
  } catch (error) {
      throw error;
  }
};

const veiwVisit = async(id) => {
  try {
      const query = await client.query(`SELECT * FROM visitors WHERE visitor_ID=$1;`, [id]);
      return query.rows;
  } catch (error) {
      throw error;
  }
};

const emptyVisits = async() => {
  try {
      let emptied = await client.query('DELETE FROM visitors;');
      return emptied;
  } catch (error) {
      console.log(error);
      throw error;
  }
};

module.exports = {
  addNewVisitor,
  listAllVisits,
  emptyVisits,
  veiwVisit,
  updateVisit,
  deleteVisit,
}

// addNewVisitor('Teboho', 22, '12/12/2012', '12:12', 'Ofentse', 'Was working with Ofentse :D');
// addNewVisitor('Lebogang', 22, '12/12/2012', '12:12', 'Romeo', 'Only person who pays attention :D');

