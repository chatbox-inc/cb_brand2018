const { mix } = require('laravel-mix');

mix.js('src/js/app.js', 'public/dist/')
    .sass('src/sass/app.scss', 'public/dist/');

//https://browsersync.io/docs/options
mix.browserSync({
    open:"external",
    proxy:false,
    server:{
        baseDir: "public",
        index: "index.html",
    },
    files:[
        "./public/**/*"
    ]
});
