
//点击播放视频
var historyVideo = document.getElementsByClassName("historyBottom")[0].getElementsByTagName("div")
// console.log(historyVideo[2].getAttribute("videoSrc"))
var videoNum = historyVideo.length
//bug1： historyVideo.addEventListener is not a function
//这里获取的domhistoryVideo是一个数组而不是单个dom元素，应该使用historyVideo[0]

//bug2: 在for循环中注册点击事件，在注册事件中的方法如getAttribute会报错
//      因为点击事件属于异步加载过程，会等待for循环结束后再执行，这里使用闭包的方法解决
for(var i=0;i<videoNum;i++){
    (function(i){
        historyVideo[i].addEventListener('click',function(){
            var src = historyVideo[i].getAttribute("videoSrc")
            console.log(src)
            var video = document.getElementById("video")
            video.setAttribute("src",src)
            video.setAttribute("autoplay","autoplay")
        })
    })(i)
}
// historyVideo[0].addEventListener("click",function(){
//     var src = historyVideo[0].getAttribute("videoSrc")
//     var video = document.getElementById("video")
//     video.setAttribute("src",src)
//     video.setAttribute("autoplay","autoplay")
// })
// historyVideo[1].addEventListener("click",function(){
//     var src = historyVideo[1].getAttribute("videoSrc")
//     var video = document.getElementById("video")
//     video.setAttribute("src",src)
//     video.setAttribute("autoplay","autoplay")
// })
// historyVideo[2].addEventListener("click",function(){
//     var src = historyVideo[2].getAttribute("videoSrc")
//     var video = document.getElementById("video")
//     video.setAttribute("src",src)
//     video.setAttribute("autoplay","autoplay")
// })

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

//右侧栏固定

var rightSide = document.getElementsByClassName("rightSide")[0]
var titleBox1 = document.getElementsByClassName("titleBox1")[0]


$(window).bind("scroll", function(){ 
    var top = $(this).scrollTop(); // 当前窗口的滚动距离
    if(top<=132){
        // console.log(top)
        rightSide.style.position = 'static';
        rightSide.style.height = "932px";
        rightSide.style.overflow = "visible";
        titleBox1.style.marginTop = "-18px";
    }else{
        rightSide.style.position = 'fixed';
        rightSide.style.top = (top-122)+"px";
        rightSide.style.height = "800px";
        rightSide.style.overflow = "scroll";
        titleBox1.style.marginTop = "0px";
    }
});


