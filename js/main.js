let toggleBtn = document.querySelector("#clickBtn")
let siteBody = document.querySelector("#site-body")

toggleBtn.addEventListener("click", () => {
siteBody.classList.toggle("body-night")
})