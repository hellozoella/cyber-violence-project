window.onload = function(){
    countnumbers();
    pictureStyle();
    fadeIn();
    
};

//设置时间和转发量
function countnumbers(){
    var change_num = document.getElementById("count");
    var timeleft = 1;
    var val = 0;
    var minute = document.getElementById("minute");
    
    var time_raise = setInterval(
        function(){
            if(val<120){
                val++;
                minute.textContent = val;
            }
        }
    ,1000);
        

    //设置转发量增长
    var uploadTimer = setInterval(
        
        function (){ 
            timeleft += 32;
            change_num.textContent = timeleft;
            

            if(timeleft >= 7680){ //7680
                clearInterval(uploadTimer); //stop the time
                //插入结束语句变量
    
                var para = document.createElement("p");
                var para_father = document.getElementById("added");
                var para_content = document.createTextNode("HURT LASTS LIFE TIME LONG");
                para_father.appendChild(para); //把<p>加入到div中
                para.appendChild(para_content); //在<p>节点中加入文字内容
                    
        
            }else{}
            },
        500);
}


function pictureStyle(){
    //设置图片宽高与浏览器一致
    var width = window.screen.width;
    var height = window.screen.height;
    var picture = document.getElementById("picture");
    picture.style.display = "block";
    picture.style.width = width + "px";
    picture.style.height = height + "px";
    
    //设置文字位置
    /**
    1. 获取浏览器宽高
    2. 获取文字元素
    3. 设置文字绝对位置是浏览器宽高的一半
    **/
    var para = document.getElementById("para");
    var con = document.getElementById("added");
    var time = document.getElementById("time");
    para.style.position = "absolute";
    con.style.position = "absolute";
    time.style.position = "absolute";
    para.style.left = width/3 + "px";
    para.style.top = height/5 + "px";
    con.style.left = width/4 + "px";
    con.style.top = height/3 + "px";
    time.style.right = width/10 + "px";
    time.style.top = height/20 + "px";
    
}


//设置图片透明度渐变
function fadeIn(){
    var picture = document.getElementById("picture");
    picture.style.opacity = 0;  
    var timer = setInterval(colorLiner,500);
    var val = 0;

    function colorLiner(){
        if(val>=0 && val<120){
        var picture = document.getElementById("picture");
        picture.style.opacity = val/120;
        val++;
        } 
}
}








    












