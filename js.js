window.onload = function(){
    countnumbers();
    fadeIn();
};

//设置时间
function countnumbers(){
    var change_num = document.getElementById("count");
    var timeleft = 1;

    //设置时间增长
    var uploadTimer = setInterval(
        
        function (){ 
            timeleft += 32;
            change_num.textContent = timeleft;

            if(timeleft >= 7680){ //7680
                clearInterval(uploadTimer); //stop the time
                //插入结束语句变量
    
                var para = document.createElement("p");
                var para_father = document.getElementById("added");
                var para_content = document.createTextNode("THE HURT NEVER ENDS");
                para_father.appendChild(para); //把<p>加入到div中
                para.appendChild(para_content); //在<p>节点中加入文字内容
                    
        
            }else{}
            },
        500);
}

//设置图片透明度渐变

function fadeIn(){
    var timer = setInterval(colorLiner,500);
    var val = 4;

    function colorLiner(){
        if(val>0 && val<120){
        var picture = document.getElementById("picture");
        picture.style.opacity = val/120;
        val++;
        }
    
}
}






    












