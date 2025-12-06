var slides = document.getElementsByClassName("slide");

var current = 0;
var total = slides.length;

var next = document.getElementById("next");
var prev = document.getElementById("previous")

next.addEventListener("click", function()
{
    console.log("next");
    current ++;


    if(current === total)
    {
        current = 0;
    }
    console.log(current);

    for(var i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slides[current].style.display = "block";
});

prev.addEventListener("click", function()
{
    console.log("next");
    current --;

    if(current <= -1)
    {
        current = total - 1;
    }
    console.log(current);

    for(var i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slides[current].style.display = "block";
});