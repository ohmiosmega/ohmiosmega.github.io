function message(x) {
    x.classList.toggle("active");
    var panel = x.nextElementSibling;
    if (panel.style.display == "block")
        panel.style.display = "none";
    else
        panel.style.display = "block";
}