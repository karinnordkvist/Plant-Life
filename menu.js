const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")
const navTag = document.querySelector("nav")

// When I click the toggleTag, toggle a class of open on the mainTag
// and if its open, make the toggleTag say closed, 
// and if its closed, make the toggleTag say Menu again

toggleTag.addEventListener ("click", function(){
    navTag.classList.toggle("open")

    //Changing appearance of the toggle button
    if (navTag .classList.contains("open")) {
        toggleTag.innerHTML = '<img src="assets/close.svg"> Close'
        toggleTag.style.color = "#ffffff"
    } else {
        toggleTag.innerHTML = '<img src="assets/menu.svg"> Menu'
        toggleTag.style.color = "#2a2a2a"
    }
})