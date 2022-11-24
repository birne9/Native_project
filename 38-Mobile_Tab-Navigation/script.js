// 获取大图图片
const bigImgNodes = document.querySelectorAll(".bkg>img");

// 获取小图
const smallNodes = document.querySelectorAll(".center");

smallNodes.forEach((item,index) => {
  item.addEventListener("click", () => {
    remove();
    bigImgNodes[index].classList.add("active")
    for (let i in item.children) {
      if (typeof item.children[i] === "object") {
        item.children[i].classList.add("active");
      }
    }
  });
});

const smallImgNodes = document.querySelectorAll(".center>img");
const smallDivNodes = document.querySelectorAll(".center>div");

function remove() {
  smallImgNodes.forEach((item) => item.classList.remove("active"));
  smallDivNodes.forEach((item) => item.classList.remove("active"));
  bigImgNodes.forEach((item) => item.classList.remove("active"));

}
