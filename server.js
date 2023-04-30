#!/usr/bin/env node
import express from 'express';
import minimist from 'minimist';
import { rps, rpsls } from './lib/rpsls.js'

var args = minimist(process.argv.slice(2));

// default is 5000
const PORT = args.port || 5000;

const app = express()

app.use(express.json())

// default endpoint
app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND');
});

app.get('/app', (req, res) => {
    res.status(200).send('200 OK');
});

app.get('/app/rps', (req, res) => {
    res.status(200).send(rps());
});

app.get('/app/rpsls', (req, res) => {
    res.status(200).send(rpsls());
});

app.get('/app/rps/play/', (req, res) => {
    res.status(200).send(rps(req.query.shot));
});

app.post('/app/rps/play', (req, res) => {
	res.status(200).send(rps(req.body.shot));
})

app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.query.shot));
});

app.post('/app/rpsls/play', (req, res) => {
	res.status(200).send(rpsls(req.body.shot));
})

app.get('/app/rps/play/:arg', (req, res) => {
	res.status(200).send(rps(req.params.arg));
})

app.get('/app/rpsls/play/:arg', (req, res) => {
	res.status(200).send(rpsls(req.params.arg));
})

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
})