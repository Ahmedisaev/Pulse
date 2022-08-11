const gulp        = require('gulp');    // Означает что мы используем тот или иной пакет
const browserSync = require('browser-sync');    // Означает что мы используем тот или иной пакет
const sass        = require('gulp-sass')(require('sass'));  // Означает что мы используем тот или иной пакет
const cleanCSS = require('gulp-clean-css');     // Означает что мы используем тот или иной пакет
const autoprefixer = require('gulp-autoprefixer');      // Означает что мы используем тот или иной пакет
const rename = require("gulp-rename");      // Означает что мы используем тот или иной пакет

gulp.task('server', function() {   //gulp означает, что обращаемся к пакету gulp для создания новой задачи. В кавычках, мы пишем как будет называться эта задача. Далее идет базовая конструкция function. Она служит как базовая настройка.

    browserSync({
        server: {
            baseDir: "src"  //Означает, что будет запускаться сервер из определенной папки. 
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")   //return означает, что возвращает задача когда она выполнится до конца. gulp.src означает, что требуется gulp который будет переходить по адресу src и что-то делать с файлом. Внутри скобок прописываем путь к этому файлу который нас интересует. Данная конструкция означает, что мы будем рассматривать оба типа файлов.
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))     //.pipe означает, что мы будем что-то делать с файлом который мы указали выше. В данном случае, мы просто компилируем sass код.  
        .pipe(rename({suffix: '.min', prefix: ''}))     // Означает, что файл переименовывается для того, чтобы в результате получиться style.min.css
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))     // Означает,что полученный скомпилированный файл из sass в css мы перемещаем в данную папку.
        .pipe(browserSync.stream());    // После пересохранения файлов sass, browserSync будет снова запускаться.
});

gulp.task('watch', function() {     // Данная задача постоянно следит за изменениями в этих файлах и когда происходят изменения в этих файлах то она выполняет определенный задачи с этит файлами. 
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles')); //Означает, что когда в данный файлах появляются какие-то изменения, то выполняется задача styles.
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));      // Данная задача запускает сразу все задачи одновременно. 