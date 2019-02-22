function banScreenDefault(){    // 1. 禁止默认行为 - 滑屏滚动
    window.addEventListener('touchstart', function (e) {
        e.preventDefault()
    }, {passive: false});
}

function remThis(){    // 2. rem 适配
    const clientWidth = document.documentElement.clientWidth;
    const styleNode = document.createElement("style");
    styleNode.innerHTML = "html{font-size: "+clientWidth/16+"px !important;}";
    document.head.appendChild(styleNode);
}

function aClick() {    // 3. 点透
    const allA = document.querySelectorAll("a");
    Array.prototype.slice.call(allA).forEach(a=>{
        a.addEventListener("touchstart", function () {
            window.location.href = this.href;
        }, false);
    });
}

/******************************* tool *******************************/
function bindSlide({ele, parentEle, direction}, callback){    // 给元素绑定滑动
    ele.style.position = "relative";
    
    let eleOffset = 0;
    let touchOffset = 0;
    
    parentEle.addEventListener("touchstart", function (e) {
        const finger = e.changedTouches;
        if(direction==="x" || direction==="X"){
            touchOffset = finger[0].clientX;
            eleOffset = ele.offsetLeft;
        }else if(direction==="y" || direction==="Y"){
            touchOffset = finger[0].clientY;
            eleOffset = ele.offsetTop;
        }
    
    }, false);
    
    parentEle.addEventListener("touchmove", function (e) {
        const finger = e.changedTouches;
        let newTouchOffset = 0;
        let minOffset = 0;
        if(direction==="x" || direction==="X"){
            newTouchOffset = eleOffset + (finger[0].clientX - touchOffset);
            minOffset = document.documentElement.clientWidth - ele.offsetWidth;
        }else if(direction==="y" || direction==="Y"){
            newTouchOffset = eleOffset + (finger[0].clientY - touchOffset);
            minOffset = document.documentElement.clientHeight - ele.offsetHeight;
        }
    
        const maxY = 0;
        newTouchOffset = newTouchOffset<minOffset?minOffset:newTouchOffset;
        newTouchOffset = newTouchOffset>maxY?maxY:newTouchOffset;
        
        ele.style.top = newTouchOffset + "px";
        callback && callback();
    }, false);
}

function menuActive(){
    const aNodes = document.querySelectorAll("#footer>div>a");
    const pages = document.querySelectorAll("#wrap>div");
    
    Array.prototype.slice.call(aNodes).forEach((a, aIndex)=>{
        a.aIndex = aIndex+1;
        a.addEventListener("touchstart", function () {
            Array.prototype.slice.call(aNodes).forEach(aNode=>removeClass(aNode, "active"));
            Array.prototype.slice.call(pages).forEach(page=>removeClass(page, "active"));
    
            addClass(a, "active");
            addClass(document.querySelector("#wrap>div:nth-child("+this.aIndex+")"), "active");
        }, false)
    })
}

/******************************* main *******************************/
window.addEventListener('DOMContentLoaded', function (e) {
    banScreenDefault();
    remThis();
    aClick();
    bindSlide({
        ele: document.querySelector("#wrap .home_page"),
        parentEle: document.getElementById("wrap"),
        direction: "y"
    });
    menuActive();
}, false);
