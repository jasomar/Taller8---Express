const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res)=> {
    res.send('Hello Word of express');
});

app.get('/contact-us', (req,res)=> {
    res.send('My email jasomar1998@gmail.com');
});


app.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}`)
});