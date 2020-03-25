
//点击播放视频
var historyVideo = document.getElementsByClassName("historyBottom")[0].getElementsByTagName("div")
// console.log(historyVideo[2].getAttribute("videoSrc"))
var videoNum = historyVideo.length
//bug1： historyVideo.addEventListener is not a function
//这里获取的domhistoryVideo是一个数组而不是单个dom元素，应该使用historyVideo[0]

// for(var i=0;i<videoNum;i++){
//     historyVideo[i].addEventListener('click',function(){
//         var src = historyVideo[i].getAttribute("videoSrc")
//         console.log(src)
//         var video = document.getElementById("video")
//         video.setAttribute("src",src)
//     })
// }
historyVideo[0].addEventListener("click",function(){
    var src = historyVideo[0].getAttribute("videoSrc")
    var video = document.getElementById("video")
    video.setAttribute("src",src)
    video.setAttribute("autoplay","autoplay")
})
historyVideo[1].addEventListener("click",function(){
    var src = historyVideo[1].getAttribute("videoSrc")
    var video = document.getElementById("video")
    video.setAttribute("src",src)
    video.setAttribute("autoplay","autoplay")
})
historyVideo[2].addEventListener("click",function(){
    var src = historyVideo[2].getAttribute("videoSrc")
    var video = document.getElementById("video")
    video.setAttribute("src",src)
    video.setAttribute("autoplay","autoplay")
})

//评论功能
//获取评论按钮
var commentButton = document.getElementsByClassName("login")[0]
//获取输入框
var massageInput = document.getElementsByClassName("massageInput")[0]
//使用Object.definedProtety实现双向数据绑定
var obj = {}
Object.defineProperty(obj,'txt',{
    get:function(){
        return obj
    },
    set:function(newValue){
        massageInput.innerHTML = newValue
    }
})
commentButton.addEventListener("click",function(e){
    obj.txt = e.target.value;
    var comment = massageInput.value
    var newComment = document.getElementsByClassName("commentOne")[0].cloneNode(true)
    newComment.getElementsByClassName("commentMassage")[0].innerHTML = comment
    document.getElementsByClassName("comment")[0].appendChild(newComment)
})

//点赞功能
//获取点赞按钮
var thumbsUp = document.getElementById("comment").getElementById("commentIcon")
thumbsUp.addEventListener("click",function(){
    var thumbsUpNum = thumbsUp.getElementsByTagName("span")[0].textContent;
    thumbsUpNum++
    thumbsUp.getElementsByTagName("span")[0].textContent = thumbsUpNum
})
