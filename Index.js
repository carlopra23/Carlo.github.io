const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")

function clickLike(){
  let totalLikes = parseInt(countlLike1.value) + 1
  countLike1.textContent = totalLikes.toString()
}
btnLike1.AddEventListener("click",clickLike1)