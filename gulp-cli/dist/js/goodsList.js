(function(){    
$('.header_module').load('./header.html');
$('.footer_module').load('./footer.html');
var loc = decodeURI(location.href);//URL解析中文
var keyword=loc.split('?')[1].split('=')[1].split('#')[0];//获取档期啊URL地址的keyword，如AI(注意清除哈希值)
// console.log(keyword);
$('.searchRes strong').html(keyword)
//ajax加载数据
    $.ajax({
    type: "get",
    url: "../data/goodsList.json",
    // data: "data",
    dataType: "json",
    success: function (json){
        var arr=json;
        // console.log(arr);
        var ul=document.createElement('ul');
        var oFragmeng = document.createDocumentFragment();
        arr.forEach(ele => {
            if(ele.keyword===keyword){
                // console.log(ele.content.length);
                $('.searchRes em').html(ele.content.length);
                if(ele.content.length<=0){//如果无数据，显示无数据的样式
                    $('.not_search').css('display','block');
                    return;
                }
                ele.content.forEach(item=>{
                    var li=document.createElement(li);
                    li.innerHTML=`
                        <li>
                            <a href="#">
                                <img src="${item.comImg}" alt="">                                                
                            </a>
                            <div class="com_text">
                                <div class="info">
                                    <strong>
                                        ${item.title}
                                    </strong>
                                    <p>
                                    ${item.text}
                                    </p>
                                </div>
                                <div class="pri">${item.price} 元</div>
                                <a href="#" class="addCart">立即购买</a>
                            </div>
                        </li>`;
                    oFragmeng.appendChild(li);
                });
                ul.appendChild(oFragmeng);
                $('.goodsList').append(ul);
            }
        });
    }
});
})();