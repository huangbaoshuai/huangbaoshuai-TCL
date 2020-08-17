//轮播图
(function(){
var imgs=document.querySelectorAll('.banner_main img');
var prev=document.querySelector('.prev');
var next=document.querySelector('.next');
var nums=document.querySelectorAll('.num li');
var timer;
var showIndex=0;
var prevIndex=0;
animate(imgs[showIndex],{'opacity':1},function (){
    timer=setInterval(() => {
        moveNext();
    }, 2000);
});

function moveNext(){
    imgs[prevIndex].className='';
    nums[prevIndex].className='';
    imgs[prevIndex].style.opacity=0.02;

    showIndex++;
    if(showIndex>=imgs.length){
        showIndex=0;
    }
    imgs[showIndex].className='show';
    nums[showIndex].className='active';
    prevIndex=showIndex;
    animate(imgs[showIndex],{'opacity':1});
}

function movePrev(){
    // 重置上次显示的样式
    imgs[prevIndex].className = '';
    nums[prevIndex].className = '';
    imgs[prevIndex].style.opacity = 0.02;

    // 下标递减
    showIndex--;
    // 判断临界值
    if (showIndex < 0) {
        showIndex = imgs.length-1;
    }
    // 当前显示的样式
    imgs[showIndex].className = 'show';
    nums[showIndex].className = 'active';
    // 更新上次显示的下标
    prevIndex = showIndex;

    // 开始动画
    animate(imgs[showIndex],{'opacity':1});
}

// 点下一页
next.onclick = function (){
    // 清除所有计时器
    clearInterval(timer);
    clearInterval(imgs[showIndex].timer);

    // 切换到下一页
    moveNext();

    // 开启自动播放到下一页
    timer = setInterval(function (){
        moveNext();
    },3000);
}

// 点上一页
prev.onclick = function (){
    // 清除所有计时器
    clearInterval(timer);
    clearInterval(imgs[showIndex].timer);

    // 切换到上一页
    movePrev();

    // 开启自动播放到下一页
    timer = setInterval(function (){
        moveNext();
    },3000);
}

for (var i = 0, len = nums.length; i < len; i++){
    nums[i].index = i;
    nums[i].onclick = function (){
        // 清除所有计时器
        clearInterval(timer);
        clearInterval(imgs[showIndex].timer);

        // 重置上次显示的样式
        imgs[prevIndex].className = '';
        nums[prevIndex].className = '';
        imgs[prevIndex].style.opacity = 0.02;

        showIndex = this.index;

        // 当前显示的样式
        imgs[showIndex].className = 'show';
        nums[showIndex].className = 'active';
        // 更新上次显示的下标
        prevIndex = showIndex;

        // 开始动画
        animate(imgs[showIndex],{'opacity':1});

        // 开启自动播放到下一页
        timer = setInterval(function (){
            moveNext();
        },3000);
    }
}
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