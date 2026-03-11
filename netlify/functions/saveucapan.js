const { Client } = require("pg");

exports.handler = async (event) => {

const data = JSON.parse(event.body);

const client = new Client({
connectionString: process.env.DATABASE_URL,
ssl: { rejectUnauthorized: false }
});

await client.connect();

await client.query(
"INSERT INTO ucapan (nama, pesan) VALUES ($1,$2)",
[data.nama, data.pesan]
);

await client.end();

return {
statusCode: 200,
body: JSON.stringify({ message: "Ucapan tersimpan" })
};

};