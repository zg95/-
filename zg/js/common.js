/*APP 1.0*/
var App = function() {
    var app =function () {
        var fullStyle,fullMarkdown;
        /*文字部分*/
        if($(window).width() > 768){
            fullStyle=["/*\n* https://github.com/zg95/\n* 大家好，我是张冠。\n* 我来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .1s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  background: rgb(0,43,54);\n  color: rgb(222,222,222);\n}\n/* 这个编辑器有点丑 稍等一下*/\n.app-pre{\n  padding: .5em;\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  background: rgb(0,0,0);\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw;\n  height: 90vh;\n}\n/* 来点提示 代码高亮 */\n.token.selector { color: rgb(133,153,0); }\n.token.property { color: rgb(187,137,0); }\n.token.punctuation { color: yellow; }\n.token.function { color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml {\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed;\n  left: 0;\n  top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/*还行吧 然后给自己准备一个编辑器 */\n.resumeEditor {\n  position: fixed;\n  right: 0;\n  top: 0;\n  padding:  .5em;\n  margin: .5em;\n  width: 48vw;\n  height: 90vh;\n  border: 1px solid;\n  background: #fff;\n  color:  #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n", "\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n", '\n/* 再对 HTML 加点样式 */\n.resumeEditor {\n  padding: 2em;\n}\n.resumeEditor h2 {\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol {\n  list-style: none;\n}\n.resumeEditor ul> li::before {\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n']
        }else{
            fullStyle=["/*\n* https://github.com/zg95/\n* 大家好，我是张冠。\n* 我来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .2s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  background: rgb(0,43,54);\n  color: rgb(222,222,222);\n}\n/* 这个编辑器有点丑 稍等一下*/\n.app-pre{\n  padding: .5em;\n}\n/* 呀 你用手机看啊 那文字离边框太近了 */\n.styleEditor {\n  background: rgb(0,0,0);\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 好像又 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 来点提示 代码高亮 */\n.token.selector {\n  color: rgb(133,153,0);\n}\n.token.property {\n  color: rgb(187,137,0);\n}\n.token.punctuation {\n  color: yellow;\n}\n.token.function {\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果呗 */\nhtml {\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed;\n left: 0;\n top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/*还行吧 然后给自己准备一个编辑器 */\n.resumeEditor {\n  position: fixed;\n  top: 50%;\n  left: 0;\n  padding: .5em;\n  margin: 2.5vh;\n  width: 95vw;\n  height: 45vh;\n  border: 1px solid;\n  background: #fff;\n  color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n", "\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n", '\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2 {\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol {\n  list-style: none;\n}\n.resumeEditor ul> li::before {\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n']
        }
        /*文字部分END*/
        fullMarkdown= ["我叫张冠\n====\n\n坐标：湖北武汉。\n目前：23岁\n做的WEB前端。 对就是我 \n\n 程序写完了才发现,我不咋会写简历.... \n\n  回想当初我错过了 \n  - 2012年的比特币。\n  - 2013年的p2p。\n  - 2014年的杠杆牛市。\n  - 2015年的微商。\n  - 2016年又错过了比特币。\n  - 2017年我也不知道错过了什么。\n 但是皮一下还是很开心 哈哈 \n 我的git:https://github.com/zg95/ \n 这个程序是用jq写的 本来想用js写 但是写到一半我就不认识我代码了.....\n 还有一部分没写完 最近不打算写就先传了 写的不好大家见谅 \n 灵感来自:http://strml.net/。\n\n\n\n\n\n"];
        fullMarkdownEND= ["wojiaozhangguan"];
        /*代码部分END*/

        /*程序 1.0*/
        var number = fullStyle[0].length,
            Introductionnumber = fullMarkdown[0].length,
            IntroductionnumberEND = fullMarkdownEND[0].length,
            a = 0 ,/*计数*/
            x = 0 ,
            l = 0 ,
            L = 0 ,
            y = 0 ,
            html,
            Introductiona = 0,
            IntroductionaEND = 0,
            endl = 0;
        $("#app").prepend("<pre class='app-pre'></pre>");
        $("#app").prepend("<div class='appcss'><style></style></div>");
        $(".styleEditor").after("<div class='resumeEditor htmlMode'><pre></pre></div>");
        fullStyle = fullStyle.join();
        fullMarkdown = fullMarkdown.join();
        fullMarkdownEND = fullMarkdownEND.join();
        fullStyleArr = fullStyle.split("\n");
        function task() {
            if(a < number) {
                $("#app pre").append(fullStyle[a]);
                $("#app .appcss style").append(fullStyle[a]);
                a += 1;
                var jinghua =  fullStyle.replace(/[\r\n]/g,"");

                jinghua =$.trim(jinghua);
                /* 包装文字 用span*/
                if(jinghua.substring(L, l) == fullStyleArr[x]){
                    /*token punctuation标点符号
                     token property class名
                     token selector 标签名*/
                    /*text 文本暂存*/
                    var text = jinghua.substring(L, l);
                    /*不需要判断*/
                    /*if(text.indexOf(":")>0 || text.indexOf("{")>0 || text.indexOf("}")>0){}*/
                    /*判断class名字 token punctuation*/
                    if(text.indexOf("{")>0 ){
                        textClassArr= text.split(" ");
                        // console.log(textClassArr[0])
                        text = text.replace(textClassArr[0],"<span class='token property'>"+textClassArr[0]+"</span>");
                    }
                    if(text.indexOf(":")>1){
                        var textx = text;
                        if(text.indexOf("{")>0){
                            textx = text.substring(text.indexOf("{")+1,text.indexOf("}"))
                        }
                        // var reg = /(?::)[^:]+(?:; )/;
                        textSelectorArr= textx.split(":");
                        $.each(textSelectorArr,function (index,ele) {
                            if(index%2==0){
                                text = text.replace(ele,"<span class='token selector'>"+ele+"</span>")
                            }
                        })
                    }
                    text= text.replace(/:/,"<span class='token punctuation'>:</span>");
                    text= text.replace(/{/,"<span class='token punctuation'>{</span>");
                    text= text.replace(/}/,"<span class='token punctuation'>}</span>");
                    text= text.replace(/\(/g,"<span class='token punctuation'>(</span>");
                    text= text.replace(/\)/g,"<span class='token punctuation'>)</span>");
                    text= text.replace("translateZ","<span class='token function'>translateZ</span>");
                    text= text.replace("rotateY","<span class='token function'>rotateY</span>");
                    text= text.replace("rgb","<span class='token function'>rgb</span>");
                    html = "<span class='token comment'>"+text+"</span><br>";
                    console.log(text)
                    // debugger
                    var character = $("#app pre").html().substring(y, a);
                    L = l;
                    x += 1;
                    $("#app pre").append(html);
                    /* 处理多余文字 */
                    var $p = $("#app pre").find('.comment');
                    $("#app pre").html($p);
                    $p.after('<br>');
                    /* 处理多余文字 END*/

                }else{
                    l += 1;
                }
                /* 包装文字 用span END*/
                /*反复刷新*/
                $("#app pre").html($("#app pre").html());
                $("#app .appcss style").html($("#app .appcss style").html());
                /*反复刷新 END*/
                /*滚动条自动底部*/
                $(".styleEditor").scrollTop($(".styleEditor")[0].scrollHeight);
                /*滚动条自动底部END*/
            }else{
                clearInterval(timer);
                timer = null;

                timerIntroductionEND = setInterval(taskIntroductionEND,50)
            }
        };
        /*皮一下*/
        function taskIntroductionEND() {
            if(IntroductionaEND < IntroductionnumberEND){
                $(".htmlMode pre").append(fullMarkdownEND[IntroductionaEND]);
                IntroductionaEND += 1;
                $(".htmlMode pre").html($(".htmlMode pre").html());
                // $(".htmlMode").scrollTop($(".htmlMode")[0].scrollHeight);
                // $(".htmlMode pre")
            }else {

                var htmlEND = fullMarkdownEND.substring(0,(fullMarkdownEND.length-endl));
                endl += 1;
                $(".htmlMode pre").html(htmlEND);
                // debugger;
                if($(".htmlMode pre").html()==''){
                    clearInterval(timerIntroductionEND);
                    timerIntroductionEND = null;
                    timerIntroduction = setInterval(taskIntroduction,50)
                }
                /*程序 2.0*/
                /*pre 转 div*/
                // var $div = $(".htmlMode pre");
                // var html = $div.get(0).outerHTML;
                // html = html.replace(/^<pre/,"<div");
                // html = html.replace(/\/pre>$/,"/div >");
                // $div.replaceWith(html);
            }
        };

        function taskIntroduction() {
            if(Introductiona < Introductionnumber){
                $(".htmlMode pre").append(fullMarkdown[Introductiona]);
                Introductiona += 1;
                $(".htmlMode pre").html($(".htmlMode pre").html());
                $(".htmlMode").scrollTop($(".htmlMode")[0].scrollHeight);
                // $(".htmlMode pre")
            }else {
                clearInterval(timerIntroduction);
                timerIntroduction = null;
                /*pre 转 div*/
                // var $div = $(".htmlMode pre");
                // var html = $div.get(0).outerHTML;
                // html = html.replace(/^<pre/,"<div");
                // html = html.replace(/\/pre>$/,"/div >");
                // $div.replaceWith(html);
                /*pre 转 div END*/
            }
        };


        timer = setInterval(task,50)


    };
    return{
        init:function () {
            app();
        }
    }
}();

jQuery(document).ready(function(){
    App.init();
});