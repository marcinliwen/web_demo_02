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