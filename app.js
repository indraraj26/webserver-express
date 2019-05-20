const express = require('express')
const path = require('path');
const hbs = require('hbs');

const port = process.env.port || 3000;

var app = express()
 
//define path for express config
const publicPath = path.join(__dirname + '/public');
console.log(publicPath);
const viewsPath = path.join(__dirname + '/templates')
console.log(viewsPath)

//setup handlebar engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

//setup static directory to serve
//app.use(express.static(publicPath));

app.get('', (req, res) => {
  res.render('index', {
      title:'Weather app',
      name: 'indraraj26'
  })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/help', (req, res) => {
    res.render('help', {
        title:'i am from help page'
    });
})

// app.get('', (req, res) => {
//   res.send({
//       name:'indraraj',
//       age:22
//   })
// })

// app.get('/about', (req, res) => {
//     res.send("<h1>Hello i am from about</h1>")
// })

// app.get('/help', (req, res) => {
//     res.send('i am from help!help me !!')
// })

app.listen(port, () => {
    console.log('express server is started on ' + port + ' port');
})