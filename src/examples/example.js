/**
 * Example file
 */

const { Command } = require('@oclif/command')
// const { cli } = require('cli-ux')

class ExampleCommand extends Command {
  async run() {
    this.log('Hello World')
  }
}

module.exports = ExampleCommand
