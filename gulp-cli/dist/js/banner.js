//banner轮播
(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    effect : 'fade',
    fadeEffect: {
        crossFade: true,
      },
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
        bulletActiveClass: 'my-bullet-active',
        clickable: true,
        clickableClass : 'my-pagination-clickable',
        // bulletClass:'class1',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
})();
  
// Ajax请求数据
(function(){
  
  $('.banner_nav .ul>li').on('mouseenter',function(){
    var index=$(this).index();
    // console.log(index);
    $.ajax({
      type: "get",
      url: "../data/json2.json",
      // data: "data",
      dataType: "json",
      success: function (json) {
        json.forEach((ele,i)=> {
          if(i===index){
            var arr=ele.content;
            // console.log(arr);
            $('.banner_list ul').html('');
            arr.forEach((item,j)=>{
              var str=`
                       <li>
                            <img src="${item.img}" alt="">
                            <div class="dj">
                                <p>${item.title}</p>
                                <p>${item.price}</p>
                            </div>
                        </li>`;
              $('.banner_list ul').append(str);
            })
          }
        });
      }
    });
  })
})();