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

app.get('/app/', (req, res) => {
    res.status(200).send('200 OK');
});

app.get('/app/rps/', (req, res) => {
    res.status(200).send('rps()');
});

app.get('/app/rpsls/', (req, res) => {
    res.status(200).send('rpsls()');
});

app.get('/app/rps/play/', (req, res) => {
    res.status(200).send('rps(req.query.shot)');
});

app.get('/app/rps/play/', (req, res) => {
    res.status(200).send('rpsls(req.query.shot)');
});