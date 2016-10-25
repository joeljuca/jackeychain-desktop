const gulp = require('gulp')
const pug = require('gulp-pug')
const concat = require('gulp-concat')
const rename = require('gulp-rename')

const args = {
  html: {
    src: 'src/views/*.view.pug',
    watch: 'src/views/**/*.pug',
    dest: 'build/'
  },
  js: {
    src: ['src/services/*.js', 'src/models/*.js', 'src/controllers/*.js'],
    dest: 'build/'
  },
  css: {
    vendor: {
      src: 'node_modules/photon/dist/css/photon.css',
      dest: 'build/',
      filename: 'vendor.css'
    },
    app: {
      src: 'src/styles/*.sass',
      dest: 'build/',
      filename: 'app.css'
    }
  }
}

gulp.task('build', ['build:html'])
gulp.task('build:html', function () {
  gulp.src(args.html.src)
    .pipe(pug({pretty: true}))
    .pipe(rename(p => p.basename = p.basename.slice(0, '.view'.length * -1)))
    .pipe(gulp.dest(args.html.dest))
})

gulp.task('build:css', ['build:css:vendor', 'build:css:app'])
gulp.task('build:css:vendor', function () {
  gulp.src(args.css.vendor.src)
    .pipe(concat(args.css.vendor.filename))
    .pipe(gulp.dest(args.css.vendor.dest))
})
gulp.task('build:css:app', function () {
  gulp.src(args.css.app.src)
    .pipe(concat(args.css.app.filename))
    .pipe(gulp.dest(args.css.app.dest))
})

gulp.task('watch', ['watch:html'])
gulp.task('watch:html', function () {
  gulp.watch(args.html.watch, ['build:html'])
})
gulp.task('watch:css', function () {
  gulp.watch(args.css.vendor.src, ['build:css'])
})
