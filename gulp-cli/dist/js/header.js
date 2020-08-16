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
$('.header_list').mouseleave(function () {    
    animate(nav,{'left':0},function(){        
        animate(nav,{'bottom':-10},function(){
            nav.style.display='none';
        })
    });
});


$('.headerWrap').on('mouseenter','.slide',function () {
    $('.menu_list').stop(true,false).slideDown();
});
$('.headerWrap').on('mouseleave','.slide',function () {
    $('.menu_list').stop(true,false).slideUp();
});

$('.menu_list').on('mouseenter',function () {
    $('.menu_list').stop(false).slideDown();
    nav_line.css('left',left);
    animate(nav,{'bottom':0},function(){
        animate(nav,{'left':left});
    });
});
$('.menu_list').on('mouseleave',function () {
    $('.menu_list').stop(false).slideUp();
    animate(nav,{'left':0},function(){        
        animate(nav,{'bottom':-10},function(){
            nav.style.display='none';
        })
    });
});
})();


//ajax数据渲染
(function(){
    $('.header li').on('mouseenter',function(){
        var index=$(this).index();
        $.ajax({
          type: "get",
          url: "../data/json1.json",
          // data: "data",
          dataType: "json",
          success: function (json) {
            json.forEach((ele,i)=> {
                if(i===index){
                  var arr=ele.content;
                  $('.menu_content ul').html('');
                  arr.forEach((item,j)=>{
                    var str=`
                        <li>
                            <a href="#">
                                <img src="${item.img}" alt="">
                                <p>${item.title}</p>
                                <p>${item.price} 元</p>
                            </a>
                        </li>`;
                    $('.menu_content ul').append(str);
                  })
                }
              });
          }
        });
    
      })
})();