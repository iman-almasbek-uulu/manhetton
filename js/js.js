// let clicks = document.querySelectorAll(".anouncements-btn");
// clicks[1].onclick = function () {
//     if (clicks[0].className)
//     clicks[0].classList.toggle('anouncements-btn-active');
//     clicks[1].classList.add('anouncements-btn-active');
//     console.log(clicks[0].className)
// }
// clicks[0].onclick = function () {
//     clicks[1].classList.toggle('anouncements-btn-active');
//     clicks[0].classList.add('anouncements-btn-active');
// }



function generateHashtag (str) {
    str = str.trim().split(" ");
    if (str.join("") === "" || str.join("").length > 140 ) {
        return false;
    }else {
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
    }
    return "#" + str.join("");
}

console.log(generateHashtag("a".repeat(139)));
