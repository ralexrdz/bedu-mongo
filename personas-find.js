const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const dbName = 'bedu-mongo'

MongoClient.connect(url, function (err, conn) {
  if (err) console.log(err)
  console.log('Conexión exitosa')

  const db = conn.db(dbName)

  db.collection('personas')
    .find({ name: 'Raúl' })
    .toArray(function (err, res) {
      if (err) console.log(err)
      console.log(res)
    })

  conn.close()
})
