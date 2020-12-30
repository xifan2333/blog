---
title: CSS响应式设计
date: 2020-12-29
categories:
- 👨‍💻 编程
tags:
- CSS
---

## 响应式设计的特征

- 媒体查询
- 图片调整
- 栅格布局

## 媒体查询

通过可以根据各种设备特征和参数的值或者是否存在来调整您的网站或应用。

### @media

`@media` CSS @规则 可根据一个或多个 媒体查询 的结果应用样式表的一部分。

例如,根据屏幕大小匹配样式: 

```css
@media screen and (max-width: 600px){
    /* 当屏幕最大宽度为600px时对应的CSS规则 */
}
```

## 图片调整

### 图片

根据父容器自适应

```css
img {
    width:100%;
    height:auto;
}
```

根据父容器自适应但不超过图片最大尺寸

```css
img {
    max-width:100%;
    height:auto;
}
```

使用 `picture` 标签指定资源

```html
<picture>
  <source srcset="img_small.jpg" media="(max-width: 400px)">
  <source srcset="img.jpg">
  <!-- 下行为回退性支持 -->
  <img src="img.jpg" alt="image">
</picture>
```

- `srcset` 指定资源
- `media` 指定条件

### 背景图片

用 `background-size` 指定填充方式

- `auto` 以背景图片的比例缩放背景图片
- `cover` 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见
- `contain` 缩放背景图片以完全装入背景区，可能背景区部分空白

```css
div.bgimg {
    background-size:auto|cover|contain;
}
```

使用媒体查询指定资源

```css

div.bgimg {
    background-image: url('img_small.jpg');
}

/* 设备大于等于 400px  */
@media only screen and (min-device-width: 400px) {
    div.bgimg {
        background-image: url('img.jpg');
    }
}
```

## 网格化布局

### float 布局

常用的清除浮动的方法：

```css
.float-clear::after{
    content:"";
    display:block;
    clear:both;
}
```

### flex 布局

![flex布局](https://images.xifan.fun/20201230105701.png)

#### 父容器

```css
div.parent{
    /* 设置为弹性盒模型 */
    display: flex;
    /* 设置排列方向 行 | 反向行 | 列 | 反向列 */
    flex-direction: row | row-reverse | column | column-reverse;
    /* 设置换行方式 不换行 | 换行 | 反向换行*/
    flex-wrap: nowrap | wrap | wrap-reverse;
    /* 排列方向与换行方式的缩写 */
    flex-flow: <flex-direction> || <flex-wrap>;
    /* 默认 row 排列 */
    /* 水平对齐方式 左对齐 | 右对齐 | 居中 | 两端对齐 | 间距相等两边留空 | 间距平均 */
    justify-content: flex-start | flex-end | center | space-between | space-around |space-evenlyevenly;
    /* 垂直对齐方式 顶部对齐 | 底部对齐 | 垂直居中 | 基于文字基线对齐 | 如果项目未设置高度或设为auto，将占满整个容器的高度*/
    align-items: flex-start | flex-end | center | baseline | stretch;

}

```

#### 子容器

```css
div.children {
    /* 顺序：默认为零，越大越靠后 */
    order:<整数>;
    /* 放大因数： 有富余空间则按比例放大*/
    flex-grow:<数字>|默认为 0;
    /* 缩小因数：无富余空间则按比例缩小 */
    flex-shrink:<数字>|默认为 1;
    /* 指定初始大小 一般为百分数*/
    flex-basis:<宽度>;
    /* flex GSB 的缩写 单值 auto 相当于 "flex: 1 1 auto". */
    flex:<flex-grow> <flex-shrink> <flex-basis>;
    /* 自定义垂直对齐方式 */
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

### grid 布局

#### 父容器

```css
div.parent {
    /*  设置为栅格模式*/
    display: grid;
    /* 单位：fr 两列的宽度分别为1fr和2fr，就表示后者是前者的两倍*/
    /* 设置列项目数及列宽 repeat 次数可为 auto-fill 宽度一定，个数自动填充*/
    /* line-name 指定线名称 */
    /* 宽度为 auto 时 浏览器自己决定长度 */
    /* minmax(最小值,最大值)指定长度范围 */
    grid-template-columns: [line-name] <宽度> | repeat(次数,宽度);
    /* 设置行项目数及行高 */
    grid-template-rows: [line-name] <高度> | repeat(次数,高度);

    /* 行间距 */
    row-gap:<宽度>;
    /* 列间距 */
    column-gap:<宽度>;
    /* 格子之间的间距 */
    gap:<grid-row-gap> <grid-column-gap>; 
    /* 定义区域名称，区域不需用利用，用.填充 */
    /* 注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为区域名-start，终止网格线自动命名为区域名-end。 */
    grid-template-areas:"header header header"
                     "main main sidebar"
                     "footer footer footer";
   
   /* 排列方式：先行后列 | 先列后行 紧密排布*/
    grid-auto-flow:[row|column] dense;
    /* 单元格对齐方式  */
    justify-items: start | end | center | stretch;
    align-items: start | end | center | stretch;
    /* 简写 */
    place-items: <align-items> <justify-items>;
    /* 容器对齐方式 */
    justify-content: start | end | center | stretch | space-around | space-between | space-evenly;align-content: start | end | center | stretch | space-around | space-between | space-evenly; 
    /* 简写 */
    place-content: <align-content> <justify-content>;
    
    /* 指定多余的宽高 */
    grid-auto-rows: <高度>; 
    grid-auto-columns:<宽度>;
}
```

#### 子容器

```css
div.children {
    /* 指定位置 span表示跨越*/
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    /* 简写 */
    grid-column: <start-line> / <end-line>;
    grid-row: <start-line> / <end-line>;

    /* 指定区域 */
    grid-area: e;
    /* 也可为简写 */
    grid-area: <row-start> / <column-start> / <row-end> / <column-end>;

    /* 单元格对齐方式 */
    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;
    /* 简写 */
    place-self: <align-self> <justify-self>;
}


```