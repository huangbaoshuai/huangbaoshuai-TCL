"use strict";$(".footer_module").load("./footer.html"),$(".loginIn").click(function(){var a=$(".user").val(),l=$(".pass").val(),e=$(".email").val(),o=$(".phone").val();""!==a&&""!==l&&""!==e&&""!==o?(console.log(a),$.ajax({type:"get",url:"http://localhost/huangbaoshuai/gulp-cli/data/user.php",data:{type:"login",user:a,pass:l,email:e,phone:o},dataType:"json",success:function(a){console.log(a),$(".user").val(""),$(".pass").val(""),$(".email").val(""),$(".phone").val(""),alert(a.msg)}})):alert("输入不能为空!")}),$(".clear").click(function(){$(".user").val(""),$(".pass").val(""),$(".email").val(""),$(".phone").val("")});