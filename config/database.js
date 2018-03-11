if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://ankushgarg1998:jaimatadi@ds263948.mlab.com:63948/vidjot-prod'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}