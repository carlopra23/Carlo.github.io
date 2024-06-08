const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")

function clickLike1(){
  let totalLikes = parseInt(countlLike1.value) + 1
  countLike1.textContent = totalLikes.toString()
}
btnLike1.addEventListener("click",clickLike1)

function clickLike2(){
  let totalLikes = parseInt(countlLike2.value) + 1
  countLike2.textContent = totalLikes.toString()
}
btnLike2.AddEventListener("click",clickLike2)
