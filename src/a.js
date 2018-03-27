/**
 * Created by eyoo8 on 2018/1/12.
 */
window.onresize=function(){var winWidth;if(window.innerWidth)winWidth=window.innerWidth;else if((document.body)&&(document.body.clientWidth))winWidth=document.body.clientWidth;if(winWidth>640){document.documentElement.style.fontSize='85px'}else{document.documentElement.style.fontSize=winWidth/750*100+'px'}};var e=document.createEvent("Event");e.initEvent("resize",true,true);window.dispatchEvent(e);