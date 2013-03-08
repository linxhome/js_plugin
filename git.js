console.log("start")
function getMainbody() {
    bodylength = document.getElementsByTagName("body")[0].textContent.length;
    var textlist = document.getElementsByTagName("div");
    var minlength = bodylength ; 
    var minindex = 0;
    for(var i=1;i<textlist.length;i++) {
        onediv = textlist[i].textContent;
        if(onediv.length/bodylength > 0.5) {
            if(onediv.length<minlength) {
                minlength = onediv.length;
                minindex = i;
            }
        }
    } 
    var resultstring =  textlist[minindex].textContent;
   return textlist[minindex];
}


function addItem() {
    var body = document.body;
    //var node = document.createElement("div");
   // node.innerHTML = getMainbody();
    var node = getMainbody().cloneNode(true);
    node.id = "linxhometext";
    node.setAttribute("style","display:none");
    node.style.overflow = "auto";
    node.style.height = "400px"
    body.appendChild(node); 
}

function showmask() {
    mask = document.createElement("div");
    var width = $(document).width();
    var height = $(document).height();
    mask.id = "mask";
    mask.style.cssText = "position:absolute;z-index:5;width:"+width+"px;height:"+height+"px;background:#000;filter:alpha(opacity=30);opacity:0.3;top:0;left:0";
    $("#mask").click(function() {
        console.log('click');
        $("#mask").remove();
    });  
    document.body.appendChild(mask); 
    
}

//show table
function showdiv() {
   var superbox = document.createElement("div"); 
   superbox.id  = "superbox";
   superbox.style.cssText = "display:none;position:absolute;z-index:40; border:solid 1px #79BCFF; background-color: #FFFFFF; maxWidth:900px;height:450px;";
   var node = getMainbody().cloneNode(true);
   node.id = "linxhometext";
   node.style.overflow = "auto";
   node.style.height = "400px"
   node.style.width = "900px"
   //superbox.appendChild(document.createElement('br'));
   superbox.appendChild(node);
 
   var submitbutton = document.createElement("p");
   submitbutton.id = "submit";  
   submitbutton.style.cssText = "cursor:pointer;height:30px;background-color:#EEF2FB;text-align:center";
   submitbutton.innerHTML = "<a style='width:900px;font-size:18px;'><strong><span style='color:#000000'>submit</span></strong></a>"; 
   superbox.appendChild(submitbutton);
   
   document.body.appendChild(superbox); 
   var o  = document.getElementById("superbox");
   o.style.display="block";
   o.style.top="253px";
   var width = $(document).width();
   var left = (width-800)/2;
   o.style.left = left+"px";


}

function init() {
    //抽取内容
    getMainbody();
    //显示蒙层
    showmask();
    //显示内容
    showdiv();
    $("#submit").click(function(){
       var url = "http://kan.weibo.com/ceditor?editType=2";
       var data = Array();
       data[0] = 1;
       $.post(url,data);
       document.getElementById("superbox").style.display='none';
       document.getElementById("mask").style.display='none';
     
    });
    
}
function showagain() {
    document.getElementById("superbox").style.display='';
    document.getElementById("mask").style.display='';

}
init();
//window.onload = getMainbody;


