const imageUrl = "image.jpg";
const div = document.getElementById("image-container")
const img = document.createElement("img")
img.setAttribute("src",imageUrl)
img.className="rounded-img"
div.appendChild(img)