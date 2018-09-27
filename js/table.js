function show() {
    var div = document.getElementById("tab_body");
    var img = document.getElementById("i1");
    if (div.style.display == "none") {
        div.style.visibility = "visible";
        div.style.display = "inline-block";
        img.src = "images/down.png";
    } else {
        div.style.visibility = "hidden";
        div.style.display = "none";
        img.src = "images/left.png";
    }
}
function show2() {
    var img = document.getElementById("i2");
    if (img.src == "images/down.png") {
        img.src = "images/left.png";
    } else{
        img.src = "images/down.png";
    }
}
function show3() {
    var img = document.getElementById("i3");
    var div = document.getElementById("tab_body3");
    if (div.style.display == "none") {
        div.style.visibility = "visible";
        div.style.display = "inline-block";
        img.src = "images/down.png";
    } else {
        div.style.visibility = "hidden";
        div.style.display = "none";
        img.src = "images/left.png";
    }
}
function addTab(title, url){
       if ($('#daohang').tabs('exists', title)){
        $('#daohang').tabs('select', title);
    } else {
        var content = '<iframe scrolling="no" frameborder="0"  src="'+url+'" style="width:100%;height:1000px;"></iframe>';
        $('#daohang').tabs('add',{
            title:title,
            content:content,
            closable:true
        });
    }
}
