var items=document.querySelectorAll(".item img");
var tests=document.getElementById("test");


for (var i = 0; i < items.length; i++) {
   items[i].addEventListener('click',function (x) {
    var done=x.target.getAttribute("src");
    tests.setAttribute("src",done)
   })
    
}