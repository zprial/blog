---
title: '我认识的前端动画'
path: "/posts/我认识的前端动画"
date: '2018-06-04'
tags: ['css', 'javascript', 'html5', '动画']
category: ['分享', '前端']
cover: //assertss.oss-cn-hongkong.aliyuncs.com/blog/%E6%88%91%E8%AE%A4%E8%AF%86%E7%9A%84%E5%89%8D%E7%AB%AF%E5%8A%A8%E7%94%BB/noflash.jpeg
---

# 我认识的前端动画--分享稿

　　应同事的要求，搞了这次分享（[PPT](/posts/我认识的前端动画/PPT/index.html)），一方面算是在组内普及下常用的和不常用的前端动画技术，另一方面也是想对前端动画做个汇总，好让自己知道的更全面些，对人对己都有好处，何乐而不为呢。本人才疏学浅，难免有疏漏出错的地方，欢迎指正！

<!-- end -->

## 一、老生常谈--什么是动画

> 动画是指由许多帧静止的画面，以一定的速度（如每秒16张）连续播放时，肉眼因视觉残象产生错觉，而误以为画面活动的作品。——维基百科

盗用不知道谁的一张图：
<div style="text-align: center">

![前端动画](https://assertss.oss-cn-hongkong.aliyuncs.com/blog/%E6%88%91%E8%AE%A4%E8%AF%86%E7%9A%84%E5%89%8D%E7%AB%AF%E5%8A%A8%E7%94%BB/640.gif)
</div>

## 二、谈谈前端动画

### 1、老大哥-Flash

　　谈到动画，就不得不提下这个老大哥了，他对Web的发展有着不可磨灭的贡献。自1996年诞生开始，Flash便扛起了Web的半壁江山，在当时Web1.0的时代，大多网站只是简单的文字与图片排版，如果一个网站使用了Flash技术，整个网站将焕然一新，甚至成了人们衡量一个网站先进与否的标准。笔者在第一家公司工作的时候，接触过一个之前的员工用Flash写的网站（整站全是Flash），其实效果还是不错的，只是有BUG😂。

　　不过，Flash虽然给Web带来了生机，但其暴露出来的问题更为的严重，效率低、臃肿、不安全，在html5标准提出后变得风雨飘摇，最后终于被iPhone这根稻草压倒，Adobe宣布，Flash将会在2020年停止开发和更新。

　　讲个题外话，笔者最早是在高中那会的电脑课接触的Flash，那时候看着一个正方形慢慢变成圆形的效果，心里是激动地，可能那时候就对动画感到兴趣才导致一脚踩进前端这个坑了吧😝。

　　最后还得送一句：若一去不回 便一去不回！

### 2、GIF、 APNG、 WebP

　　经常能在往上看到各种各样的GIF，给网站增添色彩，其体积小，在互联网上易于传播，但体积小是付出了降低质量这一代价换来的，导致有的GIF会有很强的颗粒感。

　　APNG是Mozilla推出的一个新的格式（不查不知道，原来这家伙在2004年就出来了），其也能实现图片的动态展显示，并且质量优于GIF，而且体积也比GIF更小，能给用户更为清晰的视觉感官，而且在不支持APNG的浏览器里，能优雅的降级，表现的跟普通PNG表现一样。也不知道是不是正是由于其兼容性问题，导致没有大范围的使用开来，笔者至今(2018-06)只在常用的[图片压缩网站](https://tinypng.com/)看到过。

<div style="text-align: center">
    <img src="//tinypng.com/images/apng/panda-waving-2x.png" style="max-height:300px" alt="APNG" />
    <p class="tip">如果图片没有动态效果，请在支持APNG的浏览器上查看，推荐使用Chrome 59+</p>
</div>

　　同APNG一样，WebP也是新出的一种图片格式，由Google在2010年推出，并在2013年再次推出Animated WebP，实现动态WebP，其体积较普通的GIF、PNG、JPG等格式要来的小，可查看官方提供的[demo](https://isparta.github.io/compare-webp/index_a.html#12)，不过在动态方面，相比较于APNG，WebP的体积似乎来得更大些。同样的，各浏览器的支持度还不是很高就是啦。

　　当然，使不使用，或者怎么使用就仁者见仁，智者见智了。

### 3、SVG(Scalable Vector Graphics)

　　先来看下下面这张图：
<div style="text-align: center">
    <img src="//assertss.oss-cn-hongkong.aliyuncs.com/blog/%E6%88%91%E8%AE%A4%E8%AF%86%E7%9A%84%E5%89%8D%E7%AB%AF%E5%8A%A8%E7%94%BB/dianwoda-logo.gif" style="max-height:300px" alt="APNG" />
</div><br/>

#### How To Do

　　实现的方式可能多种多样，笔者这里为了演示，采用了SVG的写法：

<iframe width="100%" height="300" src="//jsfiddle.net/ztktct/wt3e4f7c/47/embedded/result,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

#### Why SVG

* 矢量图，不失真
* 语义化标签，可访问性强
* CSS可控
* 可编程，JS可控，轻松实现各种动画
* SVG甚至有一套自己的动画体系，不用依赖CSS和JS就能轻松实现动画(此处[@张鑫旭大神](https://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/))

### 4、CSS动画

　　CSS3给我们带来了很多有趣和有用的属性，如果非要给出排名，我觉得`transition`和`animation`可以排的上，它们的到来给前端er带来了很大的便利与想象空间。笔者最近在抖音上看到一个好玩的动画，废话不多，上demo：

<iframe width="100%" height="400" src="//jsfiddle.net/ztktct/t40oufyp/61/embedded/result,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<p class="tip">你以为他是滚动的？</p>

　　如果说`transform`,给元素带来了变化，那么`transition`和`animation`给元素带来了生机，我们能很轻易的实现原本需要JS才能实现的动画。再加上，`transition`和`animation`很容易学，它们的API也类似，然后就有了我经常挂嘴边的"能用CSS实现的，我为啥要用JS呢？"😝

来看下两者的API对比吧：

|   释义  |     transition     |   animation   |
| -------- | -------------- | --------- |
| 动画名称(搭配keyframes) | - | animation-name |
| 动画属性 |   transition-property | - |
| 动画时长 |   transition-duration | animation-duration |
| 动画缓动函数 |   transition-timing-function | animation-timing-function |
| 动画开始前延迟 |   transition-delay | animation-delay |
| 动画播放次数 | - | animation-iteration-count |
| 动画是否反向播放 | - | animation-direction |
| 动画开始前后如何给动画的目标应用样式 | - | animation-fill-mode |
| 动画是否运行或者暂停 | - | animation-play-state |

提到CSS动画，就有不得不提到的另一个CSS属性：[transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)，它允许我们修改CSS视觉格式模型的坐标空间，这是另一个排的上号的CSS新属性了，读者可以自行查阅相关资料🤩。

#### 硬件加速

　　上面谈到了`transform`，就不得不谈下硬件加速了。性能一直是长久的话题，特别是对动画而言，如果性能跟不上，动画再炫，效果再酷，在用户看来也不过是PPT。在`transform`出来之前，想实现元素的变换效果，一般是通过JS改变`left`、`top`、`width`、`height`等属性的值来实现动画效果的，而这些操作都是有可能会触发重绘和重排的，对性能的损耗是非常大的。

　　硬件加速可以不触发重绘，创建新的复合层，最后由GPU形成渲染纹理。之前在笔者的认识观里，觉得只有3D变换才会触发硬件加速，不曾想，[@大漠老师](https://www.w3cplus.com/css3/introduction-to-hardware-acceleration-css-animations.html)又教我做人了😂 。原来CSS中能触发硬件加速的属性有这么多：`transform`、`opacity`、`filter`、`will-change`等等。再等等，为啥我在哪里见到过这种写法呢：

```css
/* 强制使用GPU渲染 */
transform: translateZ(0);
transform: translate3d(0, 0, 0);
```

>3D 和 2D transform 的区别就在于，浏览器在页面渲染前为3D动画创建独立的复合图层，而在运行期间为2D动画创建。动画开始时，生成新的复合图层并加载为GPU的纹理用于初始化 repaint。然后由GPU的复合器操纵整个动画的执行。最后当动画结束时，再次执行 repaint 操作删除复合图层。著作权归作者所有。原文: https://www.w3cplus.com/css3/introduction-to-hardware-acceleration-css-animations.html © w3cplus.com

### 5、JS动画

#### setTimeout 与 setInterval

　　跟大多数人一样，这是笔者进入前端开发动画领域的大门（jQuery.animate哭晕在沙滩上），用这两个API很容易就能实现一些动画效果，而且还不用担心浏览器兼容问题。笔者第一次实现动画效果的时候，心里满是激动的，也正是前端各种炫酷的效果领笔者进了前端的坑吧😁。

　　不过，这两个API虽然是好用的额，但其也有不少缺点，它们的内在运行机制决定了时间间隔参数实际上只是指定了把动画代码添加到浏览器UI线程队列中以等待执行的时间，如果队列前面已经加入了其他任务，那动画代码就要等前面的任务完成后再执行，这就会导致我们常见的掉帧了。

#### 走上神坛的(?)requestAnimationFrame

　　由于`setTimeout`与`setInterval`有着上述缺点，为了更好地性能与体验，`requestAnimationFrame`横空出世啦！！大多数显示器的刷新频率是60Hz，而且60Hz对人肉眼看来已经是很流畅的了，所以`requestAnimationFrame`会采用系统时间间隔，一般会在1秒内回调60次，以保证最佳效率。

> 1. 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率。
> 2. 在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这就意味着更少的CPU、GPU和内存使用量。
> 3. 由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销。
> 原文: https://www.w3cplus.com/javascript/requestAnimationFrame.html © w3cplus.com

　　似乎听起来`requestAnimationFrame`已经很完美了，是的，`requestAnimationFrame`很多优化的地方，我们能写出高性能的流畅的动画，但是,当我们懒出一个境界的时候，发现用`requestAnimationFrame`还是挺麻烦的😂。

憋走，我要放大招了！！！

#### Web Animations API(WAAPI)

　　新的前端动画解决方案?在谈它之前，先来看看浏览器对它的兼容性吧（打轻点😁）：

<iframe src="https://caniuse.com/web-animation/embed" width="100%" height="300" frameborder="0" scrolling="no"></iframe>

　　哦！！！IE不支持就算了，我可以搞移动开发，但是iOS全都不支持哦，那还玩个毛线哦！莫慌莫慌，标准虽然老早出来的，但是并不是所有浏览器都支持，没关系，我们有万能的[Polyfill](https://github.com/web-animations/web-animations-js/tree/master)😁，没有什么能阻挡我们对技术的追求。

　　先来看个简单的demo吧，猜猜下面两个动画哪个是用WAAPI写的，哪个是用CSS动画写的：

<iframe width="49%" height="300" src="//jsfiddle.net/ztktct/mj4zfsr3/17/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<iframe width="49%" height="300" src="//jsfiddle.net/ztktct/h3jo5r20/32/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

　　看了上面的demo你可能会问：能用CSS解决的我为啥要用JS？倒不是有了WAAPI，就可以不用CSS动画了，两者搭配是用，口味更佳哦！

##### 更优雅、高效的操作

```javascript
// WAAPI 支持 event 和 promise 两种方式。
// animation 对象的 finished 属性会返回一个 promise，在动画结束的时候调用 resolve。
myAnimation.finished.then(() =>{
    element.remove();
    ...
});
// 在页面中所有动画都结束后去执行
Promise.all(element.getAnimations().map(animation => animation.finished)).then(() => {
    // do something cool
})
```

　　WAAPI支持`event`和`promise`两种方式，特别是`promise`方式，写起来很是令人惊叹，很是优雅，很是灵活，但是各大浏览器至今(2018-06-04)对promise的写法还不是很好，笔者期待着各大浏览器能尽快实现WAAPI，虽然有pollyfill，但性能毕竟没有原生支持的好嘛！

### 6、Canvas动画

　　对现代的前端开发来说，Canvas的到来给了广大前端开发者们带来了更为广阔的世界，我们能在这块画布上尽情发挥自己的想象，实现各种想要的效果，尤其是WebGL的支持，让很多我们原本没法实现的都变成了现实。Canvas这块是前端的新的领域，笔者还没有很深入的了解过，曾有幸给公司做过年报，用的就是Canvas，虽然笔者能力有限，最后的效果也只是马马虎虎，但这并不妨碍笔者对Canvas的热爱。

　　最后放上一个效果惊艳的WebGL的[demo](http://www.babylonjs.com/demos/pbrglossy/)吧：

<div style="text-align: center">

![WebGL](https://assertss.oss-cn-hongkong.aliyuncs.com/blog/%E6%88%91%E8%AE%A4%E8%AF%86%E7%9A%84%E5%89%8D%E7%AB%AF%E5%8A%A8%E7%94%BB/qrcode%20(1).png)
<p class="tip">PS:这不是笔者写的</p>
</div>

## 三、总结

　　最后，总结全文，笔者列举了目前为止(2018-06-04)前端所有关于动画的技术，整理了一份[思维导图](https://github.com/zprial/blog/blob/master/src/pages/%E6%88%91%E8%AE%A4%E8%AF%86%E7%9A%84%E5%89%8D%E7%AB%AF%E5%8A%A8%E7%94%BB/PPT/%E5%89%8D%E7%AB%AF%E5%8A%A8%E7%94%BB.xmind)，欢迎下载，如有疏漏，欢迎指正！

![前端动画小结](https://assertss.oss-cn-hongkong.aliyuncs.com/blog/%E6%88%91%E8%AE%A4%E8%AF%86%E7%9A%84%E5%89%8D%E7%AB%AF%E5%8A%A8%E7%94%BB/%E5%89%8D%E7%AB%AF%E5%8A%A8%E7%94%BB.jpg)

　　最后的最后，由于笔者能力有限，文中可能有不正确的地方，欢迎来笔者[Github](https://github.com/zprial/blog)提Issue😁，与君共勉！

## 四、参考资料

* [Flash的兴衰之路你知多少](http://pcedu.pconline.com.cn/966/9661584.html)
* [GIF与APNG](http://www.ui.cn/detail/34100.html)
* [APNG那些事](https://aotu.io/notes/2016/11/07/apng/index.html)
* [svg](https://www.w3cplus.com/animation/create-animated-text-fills.html)
* [SVG基础——填充和描边](https://www.w3cplus.com/svg/svg-fill-stroke.html)
* [超级强大的SVG SMIL animation动画详解](https://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/)
* [硬件加速](https://www.w3cplus.com/css3/introduction-to-hardware-acceleration-css-animations.html)
* [深入理解定时器](https://www.cnblogs.com/xiaohuochai/p/5773183.html#anchor3)
* [事件循环机制演示](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
* [被誉为神器的requestAnimationFrame](https://www.w3cplus.com/javascript/requestAnimationFrame.html)
* [Web Animation API 从入门到上座](http://www.alloyteam.com/2015/12/web-animation-api-from-entry-to-the-top/)
* [Element.animate](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate)
* [web-animations](https://drafts.csswg.org/web-animations/)
* [中文CSS Animations vs Web Animations API](https://zhuanlan.zhihu.com/p/27867539)
