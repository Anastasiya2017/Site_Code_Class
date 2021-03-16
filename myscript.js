var btn = document.getElementById('myBtn');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');
var content = document.getElementById('cont');

function opacity1() {
    content.style.opacity = '1';
}

function none() {
    modal.style.display = "none";
}

btn.onclick = function () {
    modal.style.display = 'block';
    setTimeout(opacity1, 100)
}

close.onclick = function () {
    content.style.opacity = '0';
    setTimeout(none, 1000)
}

$("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top - 158 });
    return false;
});