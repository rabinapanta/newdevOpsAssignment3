const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

//middleware to serve static files from public directory
app.use(express.static('public'));

//welcome mesage 
app.get('/api',(req, res) =>{
    res.json({message: 'Welcome to my DevOps Website!!!!'});
});

//about 
app.get('/api/devops', (req,res) =>{
    res.json({message: 'DevOps is about collaboration, automation, and continuous delivery.'});
});

//sample data
app.get('/api/data', (req,res)=>{
    res.json({
        id: 1,
        name:'Node.js Sample Data',
        description: 'This is some sample data for the /api/data endpoint.'
    });
});

//server status
app.get('/api/status', (req,res) =>{
    res.json({
        status: 'Server is up and running.',
        uptime: process.uptime() + 'seconds'
    });
});

//rtoute for serving the index.html
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Start the server 
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});