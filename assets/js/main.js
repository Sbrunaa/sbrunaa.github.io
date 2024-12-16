const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");

    if(currentTheme === "dark") rootHtml.setAttribute("data-theme" , "light")
    else rootHtml.setAttribute("data-theme" , "dark")

    toggleTheme.classList.toggle("bi-sun")
    toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const acordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");
        accordionActive ? acordionItem.classList.remove("active") : acordionItem.classList.add("active");

        accordionActive ? acordionItem.classList.remove("active")  : acordionItem.classList.add("active");
    })
})

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menulinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    })
})