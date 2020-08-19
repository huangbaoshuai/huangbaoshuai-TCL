(function(){
var ul=$('.nav_left ul');
var nav_line=$('.nav_left .nav_line');
var nav=document.querySelector('.nav_line');
var left;//滑动条距离定位父级的距离
$('.header_list li').mouseenter(function () {
    left=$(this).position().left;//获取滑动条距离定位父级的距离
    nav_line.css('display','block');
    var w=$(this).width(); 
    nav_line.width(w);
    animate(nav,{'bottom':0},function(){
        animate(nav,{'left':left});
    });    
});
$('.header_list li').mouseleave(function () {    
    animate(nav,{'left':0},function(){        
        animate(nav,{'bottom':-10},function(){
            nav.style.display='none';
        })
    });
});


$('.headerWrap').on('mouseenter','.header_list .mes',function () {
    $('.menu_list').stop(true,false).slideDown(300);
});
$('.headerWrap').on('mouseleave','.header_list .mes',function () {
    $('.menu_list').stop(true,false).slideUp(300,function(){
        $('.menu_content ul').html('');
    });
});

$('.menu_list').on('mouseenter',function () {
    $('.menu_list').stop(false).slideDown(300);
    nav_line.css('left',left);
    animate(nav,{'bottom':0},function(){
        animate(nav,{'left':left});
    });
});
$('.menu_list').on('mouseleave',function () {
    $('.menu_list').stop(false).slideUp(300);
    animate(nav,{'left':0},function(){        
        animate(nav,{'bottom':-10},function(){
            nav.style.display='none';
        })
    });
});
})();


//ajax数据渲染
(function(){
    $('.header_list li').on('mouseenter',function(){
        var index=$(this).index();
        $.ajax({
          type: "get",
          url: "../data/json1.json",
          // data: "data",
          dataType: "json",
          success: function (json) {
            var oFragmeng = document.createDocumentFragment(); //创建文档碎片
            json.forEach((ele,i)=> {
                if(ele.id===index){
                    var arr=ele.content;
                    $('.menu_content ul').html('');
                    arr.forEach((item,j)=>{
                    var li=document.createElement('li');
                    li.innerHTML=`
                            <a href="#">
                                <img src="${item.img}" alt="">
                                <p>${item.title}</p>
                                <p>${item.price} 元</p>
                            </a>`;
                    oFragmeng.appendChild(li);
                    })
                    $('.menu_content ul').html('');
                    $('.menu_content ul').append(oFragmeng);
                }
            });
          }
        });    
      }) 
})();