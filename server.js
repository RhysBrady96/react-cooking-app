const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8182;

const springServer = 'http://localhost:8181';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/recipes', (req, res) => {
    axios.get(`${springServer}/recipes`)
    .then(recipes => {
        // console.log(recipes);
        console.log(JSON.parse(recipes));
        console.log(JSON.stringify(recipes));
        res.json({recipes})
        // res.send(recipes);
        // res.send(rsecipes);
    })
    .catch(err => {
        // console.log(err);
    });
    // res.send("hello world");
});



// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });



app.listen(port, () => console.log(`Listening on port ${port}`));