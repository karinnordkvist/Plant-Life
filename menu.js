const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")

// When I click the toggleTag, toggle a class of open on the mainTag
// and if its open, make the toggleTag say closed, 
// and if its closed, make the toggleTag say Menu again

toggleTag.addEventListener ("click", function(){
    mainTag.classList.toggle("open")

    if (mainTag.classList.contains("open")) {
        toggleTag.innerHTML = '<img src="assets/close.svg"> Close'
    } else {
        toggleTag.innerHTML = '<img src="assets/menu.svg"> Menu'
    }
})