const express = require("express");
const cors = require("cors");
const sql = require("mysql2/promise");

const server = express();

server.use(cors());
server.use(express.json());
require("dotenv").config();

const port = 5007;
server.listen(port, () => {
  console.log(`server is running on port" http://localhost:${port}`);
});

async function getBDconnection() {
  const connection = await sql.createConnection({
    host: "localhost",
    user: process.env.ROOT,
    password: process.env.PASS,
    database: "bd_videojuegos",
  });
  connection.connect();
  return connection;
}

server.get("/videogames", async (req, res) => {
  try {
    const connection = await getBDconnection();
    const query = "SELECT * FROM videogame";
    const [result] = await connection.query(query);
    await connection.end();

    res.status(200).json({
      info: { cont: result.leght },
      result: result,
    });
  } catch (error) {
    res.status(500);
    res.json({
      success: false,
      error,
    });
  }
});

server.post("/videogames", async (req, res) => {
  try {
    const { name, description, release_date, score } = req.body;
    const connection = await getBDconnection();
    const query =
      "INSERT INTO videogame (name, description, release_date, score) VALUES (?,?,?,?)";
    const [result] = await connection.query(query, [
      name,
      description,
      release_date,
      score,
    ]);

    res.status(201).json({
      status: true,
      id: result.insertId,
    });
    await connection.end();
  } catch (error) {
    res.status(500);
    res.json({
      success: false,
      error,
    });
  }
});

server.put("/videogames/:id", async (req, res) => {
  try {
    const { name, description, release_date, score } = req.body;
    const id = req.params.id;
    const connection = await getBDconnection();
    let query = "UPDATE videogame SET ";

    if (name) {
      query += `name = '${name}'`;
      if (description || release_date || score) {
        query += ", ";
      }
    }
    if (description) {
      query += `description = '${description}'`;
      if (release_date || score) {
        query += ", ";
      }
    }
    if (release_date) {
      query += `release_date = '${release_date}'`;
      if (score) {
        query += ", ";
      }
    }
    if (score) {
      query += `score = ${score}`;
    }

    query += ` WHERE id = ${id}`;

    console.log(query);
    const [result] = await connection.query(query);

    res.status(201).json({
      status: true,
      id,
    });
    await connection.end();
  } catch (error) {
    res.status(500);
    res.json({
      success: false,
      error,
    });
  }
});

server.delete("/videogames/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const connection = await getBDconnection();
    const query = "DELETE FROM videogame WHERE id=?";
    const [result] = await connection.query(query, [id]);

    res.status(201).json({
      status: true,
      id,
    });
    await connection.end();
  } catch (error) {
    res.status(500);
    res.json({
      success: false,
      error,
    });
  }
});
