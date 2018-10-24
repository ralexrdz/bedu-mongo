const mongo = require('mongodb')
const client = mongo.MongoClient

const url = 'mongodb://localhost:27017'

const dbName = 'bedu-mongo'

client.connect(url, function (err, conn) {
  if (err) {
    console.log(err)
    console.log('ERROOOOOR!')
  } else {
    console.log('Conexión exitosa')
  }
  const db = conn.db(dbName)

  db.collection('perros')
    .find({})
    .toArray(function (err, res) {
      if (err) console.log(err)
      console.log(res)
    })

  conn.close()
})