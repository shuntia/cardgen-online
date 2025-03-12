function loadImage(event) {
    var image = document.getElementById('image');
    var reader = new FileReader();
    reader.onload = function () {
        image.style.backgroundImage = 'url(' + reader.result + ')';
    }
    reader.readAsDataURL(event.target.files[0]);
}

function download() {
    domtoimage.toBlob(document.getElementsByClassName("card")[0])
        .then(function (blob) {
            window.saveAs(blob, 'card.png');
        });
}

function replacedesc(value) {
    var desc = value.split("\n");
    var accumulate = "";
    for (var i = 0; i < desc.length; i++) {
        accumulate += "<li>" + desc[i] + "</li>";
    }
    document.getElementById("description").innerHTML = accumulate;
}

function adjustbg(value){
    var body=document.getElementById("body");
    body.style.backgroundColor=value.value;
}

function togglemenu(){
    var menu=document.getElementById("menu");
    if(menu.style.display=="none"){
        menu.style.display="flex";
    }else{
        menu.style.display="none";
    }
}

function adjustheader(value){
    var header=document.getElementById("header");
    var genre=document.getElementById("genre");
    header.style.backgroundColor=value.value;
    genre.style.backgroundColor=value.value;
}

function descpad(value){
    document.getElementById("description").style.padding=value.value+"px";
}
function descheight(value){
    document.getElementById("description").style.height=value.value+"px";
}
function descwidth(value){
    document.getElementById("description").style.width=value.value+"px";
}
function adjustgenre(value){
    var accumulate="";
    var genre=value.split("\n");
    for(var i=0;i<genre.length;i++){
        accumulate+="<div>"+genre[i]+"</div>";
    }
    document.getElementById("genre").innerHTML=accumulate;
}
