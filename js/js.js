let anounBtn = document.querySelectorAll(".anouncements-btn");
let anounList = document.querySelectorAll(".anouncements_list");

for (let i = 0; i < anounBtn.length; i++) {
    anounBtn[i].addEventListener("click", () => {
        anounBtn.forEach(item => {
            item.classList.remove("anouncements-btn-active")
        })
        if (Array.from(anounBtn[i].classList).indexOf("anouncements-btn-active") == -1) {
            anounBtn[i].classList.add("anouncements-btn-active")
        }
        anounList.forEach(item => {
            item.classList.remove("left");
        })
        if (Array.from(anounList[i].classList).indexOf("left") == -1) {
            anounList[i].classList.add("left");
        }
    })
}

