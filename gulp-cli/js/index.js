$('.header_module').load('./header.html');
$('.banner_module').load('./banner.html');
$('.layout_module').load('./layout.html');
$('.main_module').load('./main.html');
$('.footer_module').load('./footer.html');


//返回顶部
$('.goto_top').click(()=>{
    animate(document.documentElement,{'scrollTop':0});
})

//左侧锚点链接
var li=$('.float_nav li');
$(document).scroll(()=>{
    var t=document.documentElement.scrollTop;
    if(document.documentElement.scrollTop<800||document.documentElement.scrollTop>4706){
        $('.float_nav').css('display','none');
    }else{
        $('.float_nav').css('display','block');
    }
    if(t>977&&t<1477){
        $(li[0]).addClass('col_red').siblings().removeClass('col_red');
    }
    else if(t>1477&&t<2177){
        $(li[1]).addClass('col_red').siblings().removeClass('col_red');
    }
    else if(t>2177&&t<2777){
        $(li[2]).addClass('col_red').siblings().removeClass('col_red');
    }
    else if(t>2777&&t<3377){
        $(li[3]).addClass('col_red').siblings().removeClass('col_red');
    }
    else if(t>3377&&t<4077){
        $(li[4]).addClass('col_red').siblings().removeClass('col_red');
    }   
    else if(t>4077){
        $(li[5]).addClass('col_red').siblings().removeClass('col_red');
    }   
})
$('.float_nav li').on('click',function(){
    var index=$(this).index();
    $(this).addClass('col_red').siblings().removeClass('col_red');
    // console.log($(this).index());
    // var tv_t=$('.tv_series').offset().top;
    // console.log(tv_t);
    switch(index){
        case 0:
            animate(document.documentElement,{'scrollTop':977});
            break;//电视
        case 1:
            animate(document.documentElement,{'scrollTop':1703});
            break;//空调
        case 2:
            animate(document.documentElement,{'scrollTop':2429});
            break;//冰箱
        case 3:
            animate(document.documentElement,{'scrollTop':3155});
            break;//洗衣机
        case 4:
            animate(document.documentElement,{'scrollTop':3880});
            break;//厨房电器
        case 5:
            animate(document.documentElement,{'scrollTop':4606});
            break;//智能配件
    }
});
