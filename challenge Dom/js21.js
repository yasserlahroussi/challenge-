const input_ = document.getElementById("live-input")
const output = document.getElementById("live-output")

input_.addEventListener('input', (e) => {
    output.textContent = e.target.value
})