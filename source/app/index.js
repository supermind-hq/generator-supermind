import { Base } from 'yeoman-generator'
// import { forEach } from 'lodash'
// import { join } from 'path'

export default class AppGenerator extends Base {

  //----------------------------------------
  // Initialise
  //----------------------------------------

  initializing() {
    this.log('AppGenerator.initializing')
  }

  //----------------------------------------
  // Prompt
  //----------------------------------------

  prompting() {
    this.log('AppGenerator.prompting')
    // return this.prompt([{
    //   name: 'name',
    //   message: 'Name:',
    //   default: this.appname
    // }, {
    //   name: 'description',
    //   message: 'Description:'
    // }, {
    //   name: 'keywords',
    //   message: 'Keywords:'
    // }, {
    //   type: 'confirm',
    //   name: 'private',
    //   message: 'Private:',
    //   default: false
    // }, {
    //   name: 'author',
    //   message: 'Author:',
    //   default: 'name <email>'
    //     .replace('name', this.user.git.name())
    //     .replace('email', this.user.git.email())
    // }, {
    //   name: 'url',
    //   message: 'Repository URL:',
    //   default: this.cacheRoot()
    // }]).then((answers) => {
    //   console.log(answers)
    //   this.config.set(answers)
    // })
  }

  //----------------------------------------
  // Configure
  //----------------------------------------

  configuring() {
    this.log('AppGenerator.configuring')
    // forEach([
    //   '.eslintrc',
    //   '.editorconfig'
    // ], (file) => {
    //   this.fs.copyTpl(
    //     join(rootDir, file),
    //     this.destinationPath(file),
    //     this.config.getAll())
    // })
  }

  //----------------------------------------
  // Write
  //----------------------------------------

  writing() {
    this.log('AppGenerator.writing')
    // this.fs.copyTpl(
    //   this.templatePath('**/*'),
    //   this.destinationPath(),
    //   this.config.getAll())
  }

  //----------------------------------------
  // Conflicts
  //----------------------------------------

  conflicts() {
    this.log('AppGenerator.conflicts')
  }

  //----------------------------------------
  // Install
  //----------------------------------------

  install() {
    this.log('AppGenerator.install')
  }

  //----------------------------------------
  // End
  //----------------------------------------

  end() {
    this.log('AppGenerator.end')
  }
}
