import { Base } from 'yeoman-generator'

export default class LintingGenerator extends Base {

  //----------------------------------------
  // Prompt User
  //----------------------------------------

  prompting() {
    this.log('LintingGenerator.prompting')
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
    this.log('LintingGenerator.writing')
  }

  //----------------------------------------
  // Install
  //----------------------------------------

  install() {
    this.log('LintingGenerator.install')
  }
}
