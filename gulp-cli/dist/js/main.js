//电视模块
(function(){
    $.ajax({
        type: "get",
        url: "../data/tv.json",
        // data: "data",
        dataType: "json",
        success: function (json) {
            var str=`<div class="content_left"><a href="#"><img src="${json.titleImg}" alt=""></a></div>`;
            var ul=document.createElement('ul');
            ul.className='content_right';
            var oFragmeng = document.createDocumentFragment(); //创建文档碎片
            json.content.forEach(item => {
                // console.log(item);
                var li=document.createElement('li');
                li.innerHTML=`
                <img src="${item.rightbadge}" alt="" class="rightbadge">
                <a href="#">
                    <img src="${item.img}" alt="" class="content_img">
                    <p class="title">${item.title}</p>
                    <p class="dice">${item.dice}</p>
                    <p class="price">${item.price} 元</p>
                </a>`;
                oFragmeng.appendChild(li);
            });
            //将数据写入页面
            ul.appendChild(oFragmeng);
            $('.tv_content').html(str).append(ul);
        }
    });
})();

//空调模块
(function(){
    $.ajax({
        type: "get",
        url: "../data/air.json",
        // data: "data",
        dataType: "json",
        success: function (json) {
            var str=`<div class="content_left"><a href="#"><img src="${json.titleImg}" alt=""></a></div>`;
            var ul=document.createElement('ul');
            ul.className='content_right';
            var oFragmeng = document.createDocumentFragment(); //创建文档碎片
            json.content.forEach(item => {
                // console.log(item);
                var li=document.createElement('li');
                li.innerHTML=`
                <img src="${item.rightbadge}" alt="" class="rightbadge">
                <a href="#">
                    <img src="${item.img}" alt="" class="content_img">
                    <p class="title">${item.title}</p>
                    <p class="dice">${item.dice}</p>
                    <p class="price">${item.price} 元</p>
                </a>`;
                oFragmeng.appendChild(li);
            });
            //将数据写入页面
            ul.appendChild(oFragmeng);
            $('.air_content').html(str).append(ul);
        }
    });
})();

//冰箱模块
(function(){
    $.ajax({
        type: "get",
        url: "../data/refrigerator.json",
        // data: "data",
        dataType: "json",
        success: function (json) {
            var str=`<div class="content_left"><a href="#"><img src="${json.titleImg}" alt=""></a></div>`;
            var ul=document.createElement('ul');
            ul.className='content_right';
            var oFragmeng = document.createDocumentFragment(); //创建文档碎片
            json.content.forEach(item => {
                // console.log(item);
                var li=document.createElement('li');
                li.innerHTML=`
                <img src="${item.rightbadge}" alt="" class="rightbadge">
                <a href="#">
                    <img src="${item.img}" alt="" class="content_img">
                    <p class="title">${item.title}</p>
                    <p class="dice">${item.dice}</p>
                    <p class="price">${item.price} 元</p>
                </a>`;
                oFragmeng.appendChild(li);
            });
            //将数据写入页面
            ul.appendChild(oFragmeng);
            $('.refrigerator_content').html(str).append(ul);
        }
    });
})();

//洗衣机模块
(function(){
    $.ajax({
        type: "get",
        url: "../data/washer.json",
        // data: "data",
        dataType: "json",
        success: function (json) {
            var str=`<div class="content_left"><a href="#"><img src="${json.titleImg}" alt=""></a></div>`;
            var ul=document.createElement('ul');
            ul.className='content_right';
            var oFragmeng = document.createDocumentFragment(); //创建文档碎片
            json.content.forEach(item => {
                // console.log(item);
                var li=document.createElement('li');
                li.innerHTML=`
                <img src="${item.rightbadge}" alt="" class="rightbadge">
                <a href="#">
                    <img src="${item.img}" alt="" class="content_img">
                    <p class="title">${item.title}</p>
                    <p class="dice">${item.dice}</p>
                    <p class="price">${item.price} 元</p>
                </a>`;
                oFragmeng.appendChild(li);
            });
            //将数据写入页面
            ul.appendChild(oFragmeng);
            $('.washer_content').html(str).append(ul);
        }
    });
})();

//厨房电器模块
(function(){
    $.ajax({
        type: "get",
        url: "../data/cj.json",
        // data: "data",
        dataType: "json",
        success: function (json) {
            var str=`<div class="content_left"><a href="#"><img src="${json.titleImg}" alt=""></a></div>`;
            var ul=document.createElement('ul');
            ul.className='content_right';
            var oFragmeng = document.createDocumentFragment(); //创建文档碎片
            json.content.forEach(item => {
                // console.log(item);
                var li=document.createElement('li');
                li.innerHTML=`
                <img src="${item.rightbadge}" alt="" class="rightbadge">
                <a href="#">
                    <img src="${item.img}" alt="" class="content_img">
                    <p class="title">${item.title}</p>
                    <p class="dice">${item.dice}</p>
                    <p class="price">${item.price} 元</p>
                </a>`;
                oFragmeng.appendChild(li);
            });
            //将数据写入页面
            ul.appendChild(oFragmeng);
            $('.cj_content').html(str).append(ul);
        }
    });
})();

//厨房电器模块
(function(){
    $.ajax({
        type: "get",
        url: "../data/parts.json",
        // data: "data",
        dataType: "json",
        success: function (json) {
            var str=`<div class="content_left"><a href="#"><img src="${json.titleImg}" alt=""></a></div>`;
            var ul=document.createElement('ul');
            ul.className='content_right';
            var oFragmeng = document.createDocumentFragment(); //创建文档碎片
            json.content.forEach(item => {
                // console.log(item);
                var li=document.createElement('li');
                li.innerHTML=`
                <img src="${item.rightbadge}" alt="" class="rightbadge">
                <a href="#">
                    <img src="${item.img}" alt=""  class="content_img">
                    <p class="title">${item.title}</p>
                    <p class="dice">${item.dice}</p>
                    <p class="price">${item.price} 元</p>
                </a>`;
                oFragmeng.appendChild(li);
            });
            //将数据写入页面
            ul.appendChild(oFragmeng);
            $('.parts_content').html(str).append(ul);
        }
    });
})();