import express, { Application } from 'express';
const app: Application = express();
const port: number = 3000;

app.get('/', (req, res) => {
    res.send('sup')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
