const express = require("express");
const cors = require("cors");
const sql = require("mysql2/promise");

const server = express();

server.use(cors());
server.use(express.json());

const port = 5007;
server.listen(port, () => {
  console.log(`server is running on port" http://localhost:${port}`);
});

async function getBDconnection() {
  const connection = await sql.createConnection({
    host: "localhost",
    user: "root",
    password: "De.ro.goi.113",
    database: "bd_videojuegos",
  });
  connection.connect();
  return connection;
}

server.get("/videogames", async (req, res) => {
  const connection = await getBDconnection();
  const query = "SELECT * FROM videogame";
  const [result] = await connection.query(query);
  await connection.end();

  res.status(200).json({
    info: { cont: result.leght },
    result: result,
  });
});


