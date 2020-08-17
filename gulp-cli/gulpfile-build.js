// 加载模块
const {task,src,dest,watch,series,parallel} = require('gulp');
// 用于加载其他gulp插件
const load = require('gulp-load-plugins')();
// nodejs的del模块用于删除文件
const del = require('del');

// 删除dist目录
let delDist= async ()=>{
  await del('./dist');
}

// 处理图片
let image= async ()=>{
   src('./img/*.*')
  .pipe(dest('./dist/img'))
}

// 处理iconfont
let iconfont= async ()=>{
  src('./iconfont/*.*')
  .pipe(dest('./dist/iconfont'))
  .pipe(load.connect.reload())
}

// 处理sass
let sass= async ()=>{
   src('./sass/*.scss')
  .pipe(load.sassChina())
  .pipe(load.rev())
  .pipe(load.minifyCss())
  .pipe(dest('./dist/css'))
  .pipe(load.rev.manifest())
  .pipe(dest('./rev/css'))
}

// 处理js
let script= async ()=>{
   src('./js/*.js')
  .pipe(load.rev())
  .pipe(load.babel({presets: ['@babel/env']}))
  .pipe(load.uglify())
  .pipe(dest('./dist/js'))
  .pipe(load.rev.manifest())
  .pipe(dest('./rev/js'))
}


// 处理json
let json= async ()=>{
  src('./data/*.json')
  .pipe(dest('./dist/data'))
  .pipe(load.connect.reload())
}

// 处理html
let html= async ()=>{ 
      await src(['./rev/**/*.json','./html/*.html'])
      .pipe(load.revCollector({replaceReved:true}))
      .pipe(load.minifyHtml())
      .pipe(dest('./dist/html'))
}


// 启动服务，自动刷新
let connect= async ()=>{
  load.connect.server({
    root: './dist',
    livereload: true,
    port: 3001
  });
}

// 构建生产包
// task('build',series('delDist','json','iconfont','image','sass','script','html','connect'))
task('build',async()=>{
  await delDist();
  await json();
  await iconfont();
  await image();
  await sass();
  await script();
  await html();
  await connect();
});