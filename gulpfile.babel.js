/* eslint import/no-extraneous-dependencies: 'off' */

import del from 'del'
import gulp from 'gulp'
import pump from 'pump'
import babel from 'gulp-babel'
import filter from 'gulp-filter'
import uglify from 'gulp-uglify'
import plumber from 'gulp-plumber'
import sourcemaps from 'gulp-sourcemaps'
import { log, colors } from 'gulp-util'
import { padStart, startCase } from 'lodash'

//----------------------------------------
// Constants
//----------------------------------------

const sourceGlob = 'source/**/*'
const generatorGlob = 'source/*/index.js'
const eventColors = {
  default: 'magenta',
  added: 'green',
  changed: 'blue',
  renamed: 'yellow',
  deleted: 'red',
  error: 'red'
}

//----------------------------------------
// Helpers
//----------------------------------------

const replaceDirname = message =>
  message.replace(`${__dirname}/`, '')

const logError = ({ name, message }) =>
  log(`${colors.red(name)} ${replaceDirname(message)}`)

//----------------------------------------
// Task: Clean
//----------------------------------------

gulp.task('clean', () => del.sync('generators'))

//----------------------------------------
// Task: Compile
//----------------------------------------

gulp.task('compile', [ 'clean' ], (callback) => {
  const generatorFilter = filter(generatorGlob, { restore: true })
  pump([
    gulp.src(sourceGlob),
    plumber(logError),
    generatorFilter,
    sourcemaps.init(),
    babel({ plugins: [ 'add-module-exports' ] }),
    uglify(),
    sourcemaps.write('.'),
    generatorFilter.restore,
    gulp.dest('generators')
  ], () => callback())
})

//----------------------------------------
// Task: Watch
//----------------------------------------

gulp.task('watch', [ 'compile' ], () => {
  const watcher = gulp.watch(sourceGlob, [ 'compile' ])
  watcher.on('change', ({ type, path }) => {
    const color = eventColors[type] || eventColors.default
    const event = padStart(startCase(type), 8)
    const file = path.replace(`${__dirname}/`, '')
    log(`${colors[color](event)} '${colors.cyan(file)}'`)
  })
})
