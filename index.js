function changeLightMode() {
    document.getElementById("btn-light-mode").addEventListener("click", btn => {
        document.body.classList.toggle("light-mode")
    })
}
[...document.querySelectorAll(".control")].forEach(button => {
    
    button.addEventListener("click",()=>{
        document.querySelector(".active-btn").classList.remove("active-btn");
        button.classList.add("active-btn");
        button.classList.add("active");

    })
});