//获取页面内容
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

//页面蒙层
function showmask() {
    mask = document.createElement("div");
    var width = $(document).width();
    var height = $(document).height();
    mask.id = "mask";
    mask.style.cssText = "position:absolute;z-index:5;width:"+width+"px;height:"+height+"px;background:#000;filter:alpha(opacity=30);opacity:0.3;top:0;left:0";
    $("#mask").click(function() {
        $("#mask").remove();
    });  
    document.body.appendChild(mask); 
    
}

//show table
function showdiv() {
   var daijun_box = document.createElement("div"); 
   daijun_box.id  = "daijun_box";
   daijun_box.style.cssText = "display:none;position:absolute;z-index:40; border:solid 1px #79BCFF; background-color: #FFFFFF;minWidth:900px; maxWidth:900px;minHeight:450px;maxHeight:450px";
   var node = getMainbody().cloneNode(true);
   node.id = "linxhometext";
   node.style.overflow = "auto";
   node.style.height = "400px"
   node.style.width = "900px"
   //daijun_box.appendChild(document.createElement('br'));
   daijun_box.appendChild(node);

   var submitbutton = document.createElement("p");
   submitbutton.id = "submit";  
   submitbutton.style.cssText = "cursor:pointer;height:30px;background-color:#EEF2FB;text-align:center";
   submitbutton.innerHTML = "<a style='width:900px;font-size:18px;'><strong><span style='color:#000000'>submit</span></strong></a>"; 
   daijun_box.appendChild(submitbutton);
   document.body.appendChild(daijun_box); 
   var o  = document.getElementById("daijun_box");
   o.style.display="block";
   o.style.top="253px";
   var width = $(document).width();
   var left = (width-800)/2;
   o.style.left = left+"px";


}

function init() {
    //抽取内容
    body = getMainbody();
    //显示蒙层
    showmask();
    //显示内容
    showdiv();
    $("#submit").click(function(){
       var url = "http://kan.weibo.com/ceditor?editType=2";
       submit(removeHTMLTag(body.outerHTML));
       document.getElementById("daijun_box").style.display='none';
       document.getElementById("mask").style.display='none';
     
    });
    
}



function removeHTMLTag(str) {
    str = str.replace(/<\/?>\(link|a|script\)[^>]*>/g,'');
    str = str.replace(/href[^>]*/g,"");
    return str;
}

//再次点击
function showagain() {
    document.getElementById("daijun_box").style.display='';
    document.getElementById("mask").style.display='';

}

//提交到编辑器
function submit(body) {
 url = "http://kan.weibo.com/ceditor?editType=2";
 openPostWindow(url,body,'_blank');
   
}

//post数据到页面
function openPostWindow(url, data, name)    
{    
   title = "title";
   url = "http://kan.weibo.com/ceditor?editType=2";
   var tempForm = document.createElement("form");    
   tempForm.id="tempForm1";    
   tempForm.method="post";    
   tempForm.action=url;    
   tempForm.target=name;    
    
   var hideInput = document.createElement("input");    
   hideInput.type="hidden";    
   hideInput.name= "title"  
   hideInput.value= "title";  
   tempForm.appendChild(hideInput);     
   
   var hideInput2 = document.createElement("input");    
   hideInput2.type="hidden";    
   hideInput2.name= "body"  
   hideInput2.value= data;  
   tempForm.appendChild(hideInput2);     
   
   var hideInput3 = document.createElement("input");    
   hideInput3.type="hidden";    
   hideInput3.name= "medias"  
   hideInput3.value= "medias";  
   tempForm.appendChild(hideInput3);     
   tempForm.addEventListener("onsubmit",function(){ openWindow(name); });  
   document.body.appendChild(tempForm);    
  
//   tempForm.fireEvent("onsubmit");  
   tempForm.submit();  
   document.body.removeChild(tempForm);  
}  
  
  
  
function openWindow(name)    
{    
    window.open('about:blank',name,'height=400, width=400, top=0, left=0, toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes,location=yes, status=yes');     
  
}
init()

