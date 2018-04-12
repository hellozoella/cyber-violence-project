//先拍一张照片，把相片储存起来
//在2分钟的时间内，相片的透明度为5%至100%
//在2分钟的时间内，数字从1开始，以每秒+64的速度上涨，然后结束
// https://zhidao.baidu.com/question/1690596534652224188.html


window.onload = function(){
    countnumbers();
    fadeIn();
    insertAfter();
};

function countnumbers(){
    var change_num = document.getElementById("count");
    var timeleft = 1;
    var father_p = document.getElementById("p");
    
    //插入结束语句变量
    var add_element = document.createElement("p");  //add <p>
    var add_sentence = document.createTextNode("But the hurt never ends");
    var description = add_element.appendChild(add_sentence);
    
    //设置时间增长
    var uploadTimer = setInterval(
        
        function (){ 
            timeleft += 64;
            change_num.textContent = timeleft;

            if(timeleft >= 300){
                clearInterval(uploadTimer); //stop the time
                insertAfter(description, father_p);
            }else{}
            },
        500

);
}

    function fadeIn(changepic, speed, opacity){    
        /*    
        * 参数说明    
        * elem==>需要淡入的元素    
        * speed==>淡入速度,正整数(可选)    
        * opacity==>淡入到指定的透明度,0~100(可选)    
        */    
        
        var speed = speed || 20;    
        var opacity = opacity || 100;    

        //显示元素,并将元素值为0透明度(不可见)   
        var changepic = document.getElementById("changepic");
        changepic.style.display = 'block';    
        changepic.SetOpacity(changepic, 0);  
        
        //初始化透明度变化值为0    
        var val = 0;    
        //循环将透明值以5递增,即淡入效果    
        (function(){    
           changepic.SetOpacity(changepic, val);    
           val += 10;    
           if (val <= opacity) {    
               setTimeout(arguments.callee, speed)    
           }    
        })();    
        
    } 













