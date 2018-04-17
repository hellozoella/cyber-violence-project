window.onload = function(){
    countnumbers();
    pictureStyle();
    fadeIn();
    
};

//设置时间
function countnumbers(){
    var change_num = document.getElementById("count");
    var timeleft = 1;
        
    /**
    1. 获取分钟元素
    2. 设置时间的变化
    3. 把变化的时间添加到分钟元素的内容子元素中
    **/
    
    var uploadMin = setInterval(
        
    function countMinute(){
    var minute = document.getElementById("minute");
    var min = 0;
        minute.textContent = min;
        min++;      
    }, 1000
        )

    //设置时间增长
    var uploadTimer = setInterval(
        
        function (){ 
            timeleft += 32;
            change_num.textContent = timeleft;
            

            if(timeleft >= 300){ //7680
                clearInterval(uploadTimer); //stop the time
                //插入结束语句变量
    
                var para = document.createElement("p");
                var para_father = document.getElementById("added");
                var para_content = document.createTextNode("THE HURT LASTS LIFE TIME LONG");
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
    para.style.position = "absolute";
    con.style.position = "absolute";
    para.style.left = width/3 + "px";
    para.style.top = height/5 + "px";
    con.style.left = width/3 + "px";
    con.style.top = height/3 + "px";
    
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








    












