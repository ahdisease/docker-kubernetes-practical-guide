const path = require('path')

const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req,res) => {
    const filepath = path.join(__dirname, 'views', 'welcome.html')
    res.sendFile(filepath)
})

app.listen(80)