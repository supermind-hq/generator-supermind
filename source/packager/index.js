import { Base } from 'yeoman-generator'

export default class PackagerGenerator extends Base {

  //----------------------------------------
  // Prompt User
  //----------------------------------------

  prompting() {
    this.log('PackagerGenerator.prompting')
    return this.prompt([{
      type: 'confirm',
      name: 'flow',
      message: 'Use flow type checker:',
      default: true
    }]).then((answers) => {
      this.config.set(answers)
    })
  }

  //----------------------------------------
  // Writing
  //----------------------------------------

  writing() {
    this.log('PackagerGenerator.writing')
  }

  //----------------------------------------
  // Install
  //----------------------------------------

  install() {
    this.log('PackagerGenerator.install')
  }
}
