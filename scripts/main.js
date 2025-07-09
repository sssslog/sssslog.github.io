/*
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Carnation Lily Lily Rose_约翰·辛格·萨金特.jpg") {
    myImage.setAttribute("src", "images/Vincent_Willem_van_Gogh_Rain_麦田艺术.jpg");
    
  } else {
    myImage.setAttribute("src", "images/Carnation Lily Lily Rose_约翰·辛格·萨金特.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = function () {
  setUserName();
};
*/
let count =1;
const maxpainting=4;
const head="画作欣赏"+count;
const myA=document.querySelector("a");
const myImage=document.querySelector("img");
const myP1=document.querySelector("#p1");
const myP2=document.querySelector("#p2");
const myP3=document.querySelector("#p3");
const myLi1=document.querySelector("#li1");
const myLi2=document.querySelector("#li2");
const myLi3=document.querySelector("#li3");
let myHeading=document.querySelector("h1");
myHeading.textContent=head;


function countnum(){
  count= count+1;
  if(count>maxpainting){
    count=1;
  }
}

function changePage(){
  countnum();
  myHeading.textContent = "画作欣赏" + count;
  switch(count){
  case 1:
    myImage.setAttribute("src","images/Carnation Lily Lily Rose_约翰·辛格·萨金特.jpg");
    myA.setAttribute("href","https://zhuanlan.zhihu.com/p/276298324");
    myA.textContent="作品名：康乃馨、百合与玫瑰花";
    myP1.textContent="艺术家：约翰·辛格·沙金";
    myP2.textContent="作品材质：布面油画 174厘米x153.7厘米";
    myP3.textContent="现藏地点：英国-伦敦-泰特不列颠";
    myLi1.textContent="《康乃馨、百合与玫瑰花》是萨金特精心绘制的传世经典作品，很多人会被这幅异常优美的画所深深地吸引，并产生一种莫名的感动。";
    myLi2.textContent="画面描绘了黄昏暮色笼罩下的花园里，两个纯朴天真的小姑娘正在点燃手中的灯笼，满是粉红色玫瑰里，周围点缀着一丛丛盛开的石竹、金黄康乃馨以及白色百合花。";
    myLi3.textContent="她们带着天真的梦想正小心翼翼地把灯笼挂在花枝上，灯笼为鲜花抹上一层温暖的光芒，于是，娇艳的花朵变得沉默而高贵，柔和而纯美。烛火柔软的光芒也为两个孩子笼上一层温暖的光芒，映衬出女孩活泼健康的脸庞。";


    break;
  case 2:
    myImage.setAttribute("src","images/1665_Girl_with_a_Pearl_Earring.jpg");
    myA.setAttribute("href","https://baike.baidu.com/item/%E6%88%B4%E7%8F%8D%E7%8F%A0%E8%80%B3%E7%8E%AF%E7%9A%84%E5%B0%91%E5%A5%B3/12922");
    myA.textContent="作品名：戴珍珠耳环的少女";
    myP1.textContent="艺术家：约翰内斯·维米尔";
    myP2.textContent="作品材质：画布 44.5厘米×39厘米";
    myP3.textContent="现藏地点：荷兰海牙莫瑞泰斯皇家美术馆";
    myLi1.textContent="该画描绘了一名身穿棕色衣服，佩戴黄、蓝色头巾的少女，气质超凡出众，宁静中淡恬从容、欲言又止的神态栩栩如生。";
    myLi2.textContent="看似带有一种既含蓄又惆怅的、似有似无的伤感表情，惊鸿一瞥的回眸使她犹如黑暗中的一盏明灯，光彩夺目，平实的情感也由此具有了净化人类心灵的魅力。";
    myLi3.textContent="该画采用了全黑的背景，十分烘托少女外形轮廓，似乎她是黑夜里的明灯，微微的光彩，不夺目不耀眼，十分温和。画面之中构成强烈视觉效果。";
    break;
  case 3:
    myImage.setAttribute("src","images/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son.jpg");
    myA.setAttribute("href","https://zhuanlan.zhihu.com/p/268455076");
    myA.textContent="作品名：撑阳伞的女人";
    myP1.textContent="艺术家：克劳德·奥斯卡·莫奈";
    myP2.textContent="作品材质：布面油画81厘米 x 100厘米";
    myP3.textContent="现藏地点：美国-华盛顿-国家艺廊";
    myLi1.textContent="此画描绘一个阳光明媚的清晨，卡米尔和大儿子在草地上漫步的场景";
    myLi2.textContent="微风吹拂起女子淡紫色的衣裙及头巾，让画面充满动感的视觉效果，而阳伞、面部、衣裙和草地上的阴影区和衣裙上的光影形成鲜明的对比。";
    myLi3.textContent="其细腻的笔触表现了背光和向阳的草地阴影变化。其中，撑阳伞的女士被明亮的阳光包围，她的伞面上方和背后都有明亮的白色笔触，腰间还有一抹黄色视觉焦点，和底下黄色野花相对映。";
    break;
  case 4:
    myImage.setAttribute("src","images/Vincent_Willem_van_Gogh_Rain_麦田艺术.jpg");
    myA.setAttribute("href","https://app.fta.art/zh/artwork/b7720731be43c239bfbb42fc71a1accff259e347");
    myA.textContent="作品名：雨";
    myP1.textContent="艺术家：文森特·梵高";
    myP2.textContent="作品材质：布面油画 73.3厘米×92.4厘米";
    myP3.textContent="现藏地点：美国-费城-艺术博物馆";
    myLi1.textContent="雨（法语：La Pluie;F650， H565， JH1839）是文森特·梵高（Vincent van Gogh）创作的一幅布面油画。";
    myLi2.textContent="创作于1889年，当时他是普罗旺斯地区圣雷米精神病院的一名自愿患者。";
    myLi3.textContent="他反复透过房间的窗户画出风景，描绘了圣雷米周围田野和山丘的颜色和阴影，因为它们出现在一天中的不同时间和不同的天气条件下。";
    break;
  }
}

let myButton=document.querySelector("button");
myButton.onclick=changePage;
