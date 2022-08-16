const btn = document.getElementById("btn");
const imgContainer = document.querySelector(".image-container");

btn.addEventListener("click", () => {
    for (let i = 0; i < Math.floor(Math.random() * 50) + 1; i++) {
        const img = document.createElement("img")
        img.src = `https://picsum.photos/300?random=${Math.floor(Math.random() *2000)}`;
        imgContainer.appendChild(img);
    }
})