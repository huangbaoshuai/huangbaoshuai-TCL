"use strict";!function(){$(".header_module").load("./header.html"),$(".footer_module").load("./footer.html");var a=decodeURI(location.href).split("?")[1].split("=")[1].split("#")[0];$(".searchRes strong").html(a),$.ajax({type:"get",url:"../data/goodsList.json",dataType:"json",success:function(n){$(".ipt").val(a);var t=n,e=document.createElement("ul"),o=document.createDocumentFragment();t.forEach(function(n){if(n.keyword===a){if($(".searchRes em").html(n.content.length),n.content.length<=0)return void $(".not_search").css("display","block");n.content.forEach(function(n){var t=document.createElement(t);t.innerHTML='\n                        <li>\n                            <a href="#">\n                                <img src="'.concat(n.comImg,'" alt="">                                                \n                            </a>\n                            <div class="com_text">\n                                <div class="info">\n                                    <strong>\n                                        ').concat(n.title,"\n                                    </strong>\n                                    <p>\n                                    ").concat(n.text,'\n                                    </p>\n                                </div>\n                                <div class="pri">').concat(n.price,' 元</div>\n                                <a href="#" class="addCart">立即购买</a>\n                            </div>\n                        </li>'),o.appendChild(t)}),e.appendChild(o),$(".goodsList").append(e)}})}})}();