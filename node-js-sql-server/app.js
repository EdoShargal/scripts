const express = require('express')
const categoryRouter = require('./routes/categoryRouter')
const customerRouter = require('./routes/customerRouter')

const app = express()

// //-------optionaly morgan
const morgan = require('morgan');
morgan.token('id', function getId(req) {
    return req.id
});

var loggerFormat = ':id [:date[web]]" :method :url" :status';

app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: process.stderr
}));
app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode >= 400
    },
    stream: process.stdout
}));

// //--------------------------------



//app.use('/',router)
app.use('/categories', categoryRouter);
app.use('/customers', customerRouter);


const port = 8080

app.listen(process.env.PORT || port, (err) => {
    if(err) console.log("Unable to start the server!")
    else {
        console.log("Server started running on: " + port)
        console.log(process.env.PORT)
    }
})