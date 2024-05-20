const loggerStream = {
    write: message => {

        console.log('LOG:', message)
             
    },
  };


  module.exports = loggerStream;