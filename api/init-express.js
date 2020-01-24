const express = require('express')

const isProduction = process.env.NODE_ENV === 'production';

const app = express()
app.use(require('./routes'))

// Error Handlers
// ----------------------------
// development error handler
// will print stacktrace
if (!isProduction) {
    app.use(function(err, req, res, next) {
      console.log(err.stack);
  
      res.status(err.status || 500);
  
      res.json({'errors': {
        message: err.message,
        error: err
      }});
    });
  }
  
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({'errors': {
      message: err.message,
      error: {}
    }});
  });

  const server = app.listen(process.env.PORT || 3000, function() {
      console.log(`Listening on port ${server.address().port}`)
  })

  module.exports = app