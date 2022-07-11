let x = document.getElementsByClassName("global-sprite rating-star user-rating")
let count = x.length
for (let i = 0; i < count; i++){
   x[0].parentElement.parentElement.parentElement.parentElement.parentElement.remove()
}
