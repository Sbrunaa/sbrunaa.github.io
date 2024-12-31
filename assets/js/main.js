const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion_header");
const menuLinks = document.querySelectorAll(".menu_link")

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
      const accordionItem = header.parentElement;
      const accordionActive = accordionItem.classList.contains("active");
  
      accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
})

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menulinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    })
})