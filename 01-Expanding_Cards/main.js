let divNodes=document.querySelectorAll('.container>div')
//1、需要增加动态属性，设置动态变化
//2、每次点击img需要清除之前的acive
//3、设置去掉active的动画和新增active的动画

//去掉之前的active
function removeActive(){
    divNodes.forEach((divNode)=>{
        divNode.setAttribute('class','')
    })
}

divNodes.forEach((divNode)=>{
    divNode.addEventListener("click",()=>{
        removeActive()
        divNode.setAttribute('class','active')        
    })
})