let count = 1
const btn = document.getElementById("toggle-btn")
const div = document.getElementById("details")
btn.addEventListener('click', (e) => {
    if (count % 2 !== 0) {
        div.style.display = "block"
        count++
    } else if (count % 2 == 0) {
        div.style.display = "none"
        count++
    }
})
