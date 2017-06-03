'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

// rewrite virtual urls to react app to enable refreshing of internal pages
app.get('*', function (req, res, next) {
    res.sendFile(path.resolve('public/index.html'));
});


app.listen(3000, () => {
  console.log('Express server is up on port 3000...');
})
