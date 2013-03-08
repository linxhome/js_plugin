function start() {
 url = "http://kan.weibo.com/ceditor?editType=2";
openPostWindow(url,'','_blank');
   
}

function sendpost() {
   //$.post(url,data,callback); 
   title = "title";
   body = "body";
   medias = {"242342kjkjk":{"name":"name","pid":"pid","type":"type","src":"http://www.baidu"}};
   medias = jQuery.parseJSON(medias); 
console.log(medias);
   medias = encodeURIComponent(medias);
console.log(medias);
   data = {"title":title,"body":body,"medias":"dfd"};
   url = "http://kan.weibo.com/ceditor?editType=2";
   $.post(url,data,function(result){
        alert(result);
    });
}
window.onload = start;

function openPostWindow(url, data, name)    
{    
   title = "title";
   body = "body";
   medias ='{"242342kjkjk":{"name":"name","pid":"pid","type":"type","src":"http://www.baidu"}}';

   data = {"title":title,"body":body,"medias":"dfd"};
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
   hideInput2.value= "body";  
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
