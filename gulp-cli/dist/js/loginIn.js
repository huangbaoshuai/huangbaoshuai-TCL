(function(){
    $('.footer_module').load('./footer.html');
    $('.loginIn').click(function(){
        var user=$('.user').val();
        var pass=$('.pass').val();
        var email=$('.email').val();
        var phone=$('.phone').val();

        if(user===''||pass===''||email===''||phone===''){
            alert('输入不能为空!');
            return;
        }
        console.log(user);


        $.ajax({
            type: "get",
            url: "http://localhost/huangbaoshuai/gulp-cli/data/user.php",
            data: {
                'type':"login",
                'user':user,
                'pass':pass,
                'email':email,
                'phone':phone
            },
            dataType: "json",
            success: function (res) {
                console.log(res);
                $('.user').val('');
                $('.pass').val('');
                $('.email').val('');
                $('.phone').val('');
                alert(res.msg);
            }
        });
    });
    $('.clear').click(function(){
        $('.user').val('');
        $('.pass').val('');
        $('.email').val('');
        $('.phone').val('');
    });
})();