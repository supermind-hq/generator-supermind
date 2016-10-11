/* eslint import/no-extraneous-dependencies: 'off' */

import del from 'del'
import gulp from 'gulp'
import pump from 'pump'
import gutil from 'gulp-util'
import babel from 'gulp-babel'
import filter from 'gulp-filter'
import uglify from 'gulp-uglify'
import sourcemaps from 'gulp-sourcemaps'
import { padStart, startCase } from 'lodash'

//----------------------------------------
// Constants
//----------------------------------------

const { colors } = gutil
const sourceGlob = 'source/**/*'
const generatorGlob = 'source/*/index.js'
const eventColors = {
  added: 'green',
  changed: 'blue',
  deleted: 'red'
}

//----------------------------------------
// Task: Clean
//----------------------------------------

gulp.task('clean', () => del('generators'))

//----------------------------------------
// Task: Compile
//----------------------------------------

gulp.task('compile', [ 'clean' ], (callback) => {
  const generatorFilter = filter(generatorGlob, { restore: true })
  pump([
    gulp.src(sourceGlob),
    generatorFilter,
    sourcemaps.init(),
    babel({
      plugins: [ 'add-module-exports' ]
    }),
    uglify({
    }),
    sourcemaps.write('.'),
    generatorFilter.restore,
    gulp.dest('generators')
  ], callback)
})

//----------------------------------------
// Task: Watch
//----------------------------------------

gulp.task('watch', [ 'compile' ], () => {
  const watcher = gulp.watch(sourceGlob, [ 'compile' ])
  watcher.on('change', ({ type, path }) => {
    const color = eventColors[type]
    const event = padStart(startCase(type), 8)
    const file = path.replace(`${__dirname}/`, '')
    gutil.log(`${colors[color](event)} '${colors.cyan(file)}'`)
  })
})
