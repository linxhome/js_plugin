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
    //var resultstring =  textlist[minindex].textContent;
    //var pattern = /\n{2,}/
    //var result = resultstring.replace(pattern,"");
   // return resultstring; 
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
console.log(node);
    body.appendChild(node); 
}

window.onload = addItem;
//window.onload = getMainbody;


