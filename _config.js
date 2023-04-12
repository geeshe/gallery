var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://gee:mHouZU5Xi0Coyqqq@cluster0.avtxxln.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://gee:mHouZU5Xi0Coyqqq@cluster0.avtxxln.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://gee:mHouZU5Xi0Coyqqq@cluster0.avtxxln.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
