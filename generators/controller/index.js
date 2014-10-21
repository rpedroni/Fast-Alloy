var generators = require('yeoman-generator');

var _ = require('underscore.string');

module.exports = generators.NamedBase.extend({

    promptUser: function() {

        this.log(this.yeoman);

        var done = this.async();
        var questions = [
            {
                type: 'checkbox',
                name: 'files',
                message: 'Which files do you wish to create?',
                choices: [
                    { value: 0, name: 'Script file (.coffee)', checked: true },
                    { value: 1, name: 'View file (.jade)', checked: true },
                    { value: 2, name: 'Style file (.stss)', checked: true }
                ]
            }
        ];

        this.prompt(questions, function (answers) {
            this.createFileTypes = answers.files;
            done();
        }.bind(this));
    },

    createFiles: function() {

        var context = {
            controller: this.name,
            controllerFileName: _.underscored(this.name)
        };

        var yo = this;
        function script() {
            yo.template('_controller.coffee', 'app/controller/' + context.controllerFileName + '.coffee', context);
        }
        function view() {
            yo.template('_view.jade', 'app/views/' + context.controllerFileName + '.jade', context);
        }
        function style() {
            yo.template('_style.stss', 'app/styles/' + context.controllerFileName + '.stss', context);
        }

        // Create files
        if (this.createFileTypes.indexOf(0) !== -1) {
            script();
        }
        if (this.createFileTypes.indexOf(1) !== -1) {
            view();
        }
        if (this.createFileTypes.indexOf(2) !== -1) {
            style();
        }

        this.log('All done. Bye bye!');
    }

});