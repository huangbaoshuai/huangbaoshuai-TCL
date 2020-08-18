function ajax(url,target){
    // console.log($(target).siblings('header').find('h2').html());
    var info=$(target).siblings('header').find('h2').html();
    $.ajax({
        type: "get",
        url: url,
        // data: "data",
        dataType: "json",
        success: function (json) {
            var str=`<div class="content_left"><a href="#"><img src="${json.titleImg}" alt=""></a></div>`;
            var ul=document.createElement('ul');
            ul.className='content_right';
            var oFragmeng = document.createDocumentFragment(); //创建文档碎片
            json.content.forEach(item => {
                // console.log(encodeURI(item.img));  
                // console.log(json.type);              
                var li=document.createElement('li');
                li.innerHTML=`
                <img src="${item.rightbadge}" alt="" class="rightbadge">
                <a href="./details.html?info=${info}&type=${json.type}&id=${item.id}" class="to_goodsList" target="_blank">
                    <img src="${item.img}" alt="" class="content_img">
                    <p class="title">${item.title}</p>
                    <p class="dice">${item.dice}</p>
                    <p class="price">${item.price} 元</p>
                </a>`;
                oFragmeng.appendChild(li);
            });
            //将数据写入页面
            ul.appendChild(oFragmeng);
            $(target).html(str).append(ul);
        }
    });
}

(function(){
    //电视模块
    ajax('../data/tv.json','.tv_content');
    //空调模块
    ajax('../data/air.json','.air_content');
    //冰箱模块
    ajax('../data/refrigerator.json','.refrigerator_content');
    //洗衣机模块
    ajax('../data/washer.json','.washer_content');
    //厨房电器模块
    ajax('../data/cj.json','.cj_content');
    //智能配件模块
    ajax('../data/parts.json','.parts_content');
})();