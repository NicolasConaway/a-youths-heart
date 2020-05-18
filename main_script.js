// Hamburger fold menu
function onClickMenu() {
    document.getElementById("mobile_hamburger").classList.toggle("change"); 

    document.getElementById("nav_list").classList.toggle("change");
}

// Home page slideshow
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideshow__images");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
}

// Item sorter on Products page
filterSelection("all")
function filterSelection(c) {
    var b, y;
    b = document.getElementsByClassName("filter__items");
    if (c == "all") c = "";
    for (y = 0; y < b.length; y++) {
        w3AddClass(b[y], "show");
        if (b[y].className.indexOf(c) > -1) w3RemoveClass(b[y], "show");
    }
}

function w3AddClass(element, name) {
    var y, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (y = 0; y < arr2.length; y++) {
        if (arr1.indexOf(arr2[y]) == -1) {element.className += " " + arr2[y];}
    }
}

function w3RemoveClass(element, name) {
    var y, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (y = 0; y < arr2.length; y++) {
        while (arr1.indexOf(arr2[y]) > -1) {
            arr1.splice(arr1.indexOf(arr2[y]), 1);
        }
    }
    element.className = arr1.join(" ");
}
