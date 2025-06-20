//.textpatt-box>p
//.textpart-box
//#left-p
//.textpart-right
//#left-a
const textpart = document.querySelector(`.textpart-box`)
const imgpart = document.querySelector(`.textpart-right`)
const imgparttext = document.querySelector(`.left-p`)
const imagelink = document.getElementById(`#left-a`)
const imagep = document.getElementById(`#left-p`)
let images = [
    `./image/product-1.png`,
    `./image/product-2.png`,
    `./image/product-3.png`,
    `./image/product-4.png`,
    `./image/product-5.png`,
    `./image/product-6.png`,
    `./image/product-7.png`,
    `./image/product-8.png`,
]
let atext = [
    `会议信息无损记录，可回顾、好协作、易二创`,
    `复杂场景专业项目管理平台`,
    `复杂场景专业项目管理平台`,
    `交付快人一步，业务持续领先`,
    `交付快人一步，业务持续领先`,
    `交付快人一步，业务持续领先`,
    `交付快人一步，业务持续领先`,
    `交付快人一步，业务持续领先`,

]
let ptext = [
    `基于数百万人才招聘经验打造。三合一工作台，不限量视频面试。深度打通 IM、日历、邮件，多角色高效协同。高精度模糊查重，不为一份简历花两份钱1`,
    `飞书妙记会自动把视频会议转录成易搜索、有整理、可翻译的逐字稿，且支持在线评论、@ 同事。智能总结待办，对应会上讨论的责任人，事事有着落。`,
    `基于数百万人才招聘经验打造。三合一工作台，不限量视频面试。深度打通 IM、日历、邮件，多角色高效协同。高精度模糊查重，不为一份简历花两份钱1`,
    `飞书原生体验的低代码平台，提供开箱即用的模块，让开发聚焦核心业务，节省开发成本。满足复杂系统的开发需求，快速搭出10 倍好用，10 倍强的系统`,
    `基于数百万人才招聘经验打造。三合一工作台，不限量视频面试。深度打通 IM、日历、邮件，多角色高效协同。高精���模糊查重，不为一份简历花两份钱1`,
    `基于数百万人才招聘经验打造。三合一工作台，不限量视频面试。深度打通 IM、日历、邮件，多角色高效协同。高精度模糊查重，不为一份简历花两份钱。`,
    `随时随地获取员工完整信息，掌控组织全局；轻松操作架构与流程，灵活服务组织需求。无代码配置和调整各类人事流程，流程化设置、自动化推送审批消息。`,
    `基于数百万人才招聘经验打造。三合一工作台，不限量视频面试。深度打通 IM、日历、邮件，多角色高效协同。高精度模糊查重，不为一份简历花两份钱`,
]




function changecolor(element) {
    if (element) {
        element.style.backgroundColor = '#f1f0f1';
        element.style.borderRadius = '20px';
    }
}

let currentIndex = 0; 

function changeimg(index) {
    const imgpart = document.querySelector(`.textpart-right img`);
    const imgparttext = document.querySelector(`#left-a`);
    const imagep = document.getElementById(`left-p`);
    const textpartBoxes = document.querySelectorAll('.textpart-box');

    // 先移除所有 .textpart-box 的样式
    textpartBoxes.forEach(box => {
        box.style.backgroundColor = '';
        box.style.borderRadius = '';
    });

    if (imgpart && imgparttext && imagep && index < images.length && index < textpartBoxes.length) {
        imgpart.src = images[index];
        imgparttext.innerHTML = atext[index];
        imagep.innerHTML = ptext[index];
        changecolor(textpartBoxes[index]);
    }
}
/*在轮播图切换过程中，若不清除之前应用的样式，随着轮播的进行，每个 .textpart-box 元素都会保留之前切换时添加的样式，这样就会出现多个 .textpart-box 元素同时显示样式的情况，与预期中只有当前对应元素显示样式不符。 */

function autoChange() {
    changeimg(currentIndex);
    currentIndex = (currentIndex + 1) % images.length; 
}

autoChange();
const intervalId = setInterval(autoChange, 3000);

