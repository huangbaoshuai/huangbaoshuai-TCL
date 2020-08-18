(function (){
//加载头尾模块
$('.header_module').load('./header.html');
$('.footer_module').load('./footer.html');

//放大镜效果
//获取左边小图框
var left = document.querySelector('.left');
//获取蒙板
var mask = document.querySelector('.mask');
//获取大图框
var maxBox = document.querySelector('.maxBox');
// console.log(maxBox);
// 获取大图
var maxImg = document.querySelector('.maxBox img');

left.onmouseenter = function (){
    mask.style.display = 'block';
    maxBox.style.display = 'block';
}
left.onmouseleave = function (){
    mask.style.display = 'none';
    maxBox.style.display = 'none';
}
left.onmousemove = function (ev){
    var e = ev || event;
    // 蒙板的定位值
    var maskX = e.clientX - offset(left,false).left - mask.clientWidth/2;
    var maskY = e.clientY - offset(left,false).top - mask.clientHeight/2+document.documentElement.scrollTop;

    // 边界判断
    if (maskX <= 0){
        maskX = 0;
    }
    if (maskX >= (left.clientWidth - mask.clientWidth)) {
        maskX = left.clientWidth - mask.clientWidth;
    }
    if (maskY <= 0){
        maskY = 0;
    }
    if (maskY >= (left.clientHeight - mask.clientHeight)) {
        maskY = left.clientHeight - mask.clientHeight;
    }
    // console.log(maskX,maskY);
    mask.style.left = maskX + 'px';
    mask.style.top = maskY + 'px';

    // 移动比例
    var scaleX = maskX / (left.clientWidth - mask.clientWidth);
    var scaleY = maskY / (left.clientHeight - mask.clientHeight);

    // 大图移动的坐标
    var maxImgX = scaleX * (maxImg.clientWidth - maxBox.clientWidth);
    var maxImgY = scaleY * (maxImg.clientHeight - maxBox.clientHeight);
    // console.log(maxImgX,maxImgY);
    maxImg.style.left = -maxImgX + 'px';
    maxImg.style.top = -maxImgY + 'px';
}
})();

//数据渲染
(function(){
    var url = decodeURI(location.href);//URL解析中文
    var arr=url.split('?')[1].split('#')[0].split('&');
    // console.log(arr);
    var info=arr[0].split('=')[1];
    var type=arr[1].split('=')[1];
    var id=arr[2].split('=')[1];
    // console.log(info);
    // console.log(type);
    // console.log(id);
    
    $.ajax({
        type: "get",
        url: "../data/"+type+".json",
        // data: "data",
        dataType: "json",
        success: function (res) {
            // console.log(res.content);
            res.content.forEach(ele => {
                // console.log(ele);
                if(ele.id==id){
                    // console.log(Number(ele.price));
                    $('.left img').attr('src',ele.img);
                    $('.maxBox img').attr('src',ele.img);
                    $('.purc_list .pic1 img').attr('src',ele.img);
                    $('.info').html(info);
                    $('.con').html(ele.title);
                    $('.title h2 span').html(ele.title);
                    $('.red em').html(ele.price);
                    $('.un_pri').html('RMB：'+(Number(ele.price)-100)+'.00元');
                }
            });    
        }
    });
    })();

(function(){
    //点击小图列表
    $('.purc_list').on('click','span',function(){
        $(this).addClass('active').siblings().removeClass('active');
        var src=$(this).find('img').attr('src');
        $('.left img').attr('src',src);
        $('.maxBox img').attr('src',src);
    });
    //点击商品类别
    $('.options').on('click','span',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //自增
    $('.add').click(function(){
        let val=Number($('.val').val());
        val++;
        if(val>99){
            val=99;
        }
        $('.val').val(val);
    });
    //自减
    $('.reg').click(function(){
        let val=Number($('.val').val());
        val--;
        if(val<1){
            val=1;
        }
        $('.val').val(val);
    });
})();


