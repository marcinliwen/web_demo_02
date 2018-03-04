var menu = document.getElementsByClassName("menu_item");
var arrowDown = document.getElementsByClassName("arrow_down");

/*****show arrows under menu when active********/
function showme(evt, name) {
    var i;
    for(i = 0; i < arrowDown.length; i++){
        arrowDown[i].style.display = "none";
    }

    for (i = 0; i < menu.length; i++) {
        menu[i].className = menu[i].className.replace(" active", "");
    }
    
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

function openNav() {
    document.getElementById("myNav").style.display = "block";
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


function colormenu(n){
    for (i = 0; i < menu.length; i++) {
        menu[i].className = menu[i].className.replace(" active", "");
    }
    menu[n].className += " active";
}

/********scroll*******
var button = document.getElementById('slide');
button.onclick = function () {
    var container = document.getElementById('moveme');
    sideScroll(container,'right',10,500,10);
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    var container = document.getElementById('moveme');
    sideScroll(container,'left',10,500,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
******/

var distance = document.getElementsByTagName("body")[0].offsetWidth;
var mainItemWidth =((24*distance)/100);

var button = document.getElementById('slide');
button.onclick = function () {
    var container = document.getElementById('moveme');
    container.scrollBy({ top: 0, left: mainItemWidth, behavior: 'smooth' });
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    var container = document.getElementById('moveme');
    container.scrollBy({ top: 0, left: -mainItemWidth, behavior: 'smooth' });
};
