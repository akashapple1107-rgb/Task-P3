
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3001

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Show the React website from the dist folder
app.use(express.static(path.join(dirname, 'dist')))

// Open the React home page
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(dirname, 'dist', 'index.html'))
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
