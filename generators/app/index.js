var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    // Prompt user
    promptUser: function () {

        this.log(this.yeoman);

        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'What is the app\'s name?',
            default: this.appname
        }, function (answers) {

            this.log(answers);

            done();

        }.bind(this));
    },

    // Setup Gruntfile with desired tasks
    makeGruntfile: function() {
        this.gruntfile.insertConfig('watch', '{ coffee: { files: [], tasks: [] } }');
        this.gruntfile.registerTask('default', ['coffee', 'jade', 'stss', 'watch']);
    }

});