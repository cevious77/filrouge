const express = require('express')
const connection = require('./conf')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
const morgan = require('morgan')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(morgan('dev'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.get('/', (req, res) => {
    connection.query('SELECT * from connard', (err, results) => {
        if(err) {
            res.status(500).send('Erreur tu est con.');
        } else {
            res.json(results);
        }
    })
})

app.get('/connard/list', (req, res) => {
    connection.query('SELECT firstname, bastard, level from connard', (err, results) => {
        if(err) {
            res.status(500).send('ERREUR tu est vraiment con')
        } else {
            res.json(results);
        }
    })
})

app.get('/connard/content', (req, res) => {
    connection.query('SELECT * from connard WHERE bastard = true', (err, results) => {
        if(err) {
            res.status(500).send('ERREUR tu est vraiment con')
        } else {
            res.json(results);
        }
    })
})

app.get('/connard/start', (req, res) => {
    connection.query('SELECT * from connard WHERE firstname LIKE "S%"', (err, results) => {
        if(err) {
            res.status(500).send('ERREUR tu est vraiment con')
        } else {
            res.json(results);
        }
    })
})


app.get('/connard/sup', (req, res) => {
    connection.query('SELECT * from connard WHERE birthday > "1990-01-01"', (err, results) => {
        if(err) {
            res.status(500).send('ERREUR tu est vraiment con')
        } else {
            res.json(results);
        }
    })
})

app.get('/connard/level/:ass', (req, res) => {
    const enculer = req.params.ass;
    connection.query(`SELECT * from connard order by level ${enculer}`, (err, results) => {
        if(err) {
            res.status(500).send('ERREUR tu est vraiment con')
        } else {
            res.json(results);
        }
    })
})

app.post('/connard/add', (req, res) => {
    const formData = req.body;

    connection.query(`INSERT INTO connard SET ?`, formData, (err, results) => {
        if(err) {
            res.status(500).send('ERREUR tu est vraiment con')
        } else {
            res.sendStatus(200);
        }
    })
})

app.put('/connard/modif', (req, res) => {
    const formData = req.body;

    connection.query(`UPDATE connard SET ?`, formData, (err, results) => {
        if(err) {
            res.status(500).send('ERREUR tu est vraiment con')
        } else {
            res.sendStatus(200);
        }
    })
})

app.put('/connard/toggle', (req, res) => {
    const formData = req.body;

    connection.query(`UPDATE connard SET bastard = "true" OR "false"`, formData, (err, results) => {
        if(err) {
            res.status(500).send('ERREUR tu est vraiment con')
        } else {
            res.sendStatus(200);
        }
    })
})

app.delete('/connard/delete/:id', (req, res) => {
    const enculer = req.params.id;

    connection.query(`DELETE FROM connard WHERE id = ?`, [enculer], err => {
        if(err) {
            res.status(500).send('ERREUR tu est vraiment con')
        } else {
            res.sendStatus(200);
        }
    })
})






app.listen(port, console.log(`http://localhost:${port}`))