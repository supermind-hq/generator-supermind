import { Base } from 'yeoman-generator'
import packageDir from 'pkg-dir'
// import { compact, map, forEach } from 'lodash'
// import { join } from 'path'

export default class LintingGenerator extends Base {

  //----------------------------------------
  // Prompt User
  //----------------------------------------

  prompting() {
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
  // Configure
  //----------------------------------------

  configuring() {
    const rootDir = packageDir.sync(this.resolved)
    const useFlow = this.config.get('flow')
    this.log('LintingGenerator.configuring:', rootDir, useFlow)
    // const files = compact(map([
    //   '.editorconfig',
    //   '.eslintrc',
    //   '.jshintrc',
    //   flow && '.flowconfig'
    // ], file => join(rootDir, file)))
    // forEach(files, (file) => {
    //   this.fs.copy(file, this.destinationPath(file))
    // })
  }

  //----------------------------------------
  // Install
  //----------------------------------------

  install() {
    this.log('LintingGenerator.install')
  }
}
