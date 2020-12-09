const PORT = process.env.PORT || 5000
const app = require('./app')
const { db } = require('./db')

const start = async () => { 
  try {
    await db.sync()
    app.listen(PORT, () => console.log("\x1b[36m%s\x1b[0m",`
  
          Listening on port ${PORT}

          http://localhost:${PORT}/
  
    `))
  } catch (error) {
      console.error(error)
  }
};

start()