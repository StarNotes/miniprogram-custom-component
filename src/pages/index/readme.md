## 轮播组件使用说明
* 传入数组对象为dataList
* 该数组内每个元素均为对象
* 根据对象的EType属性确定对应事件
* EType的值为toPage、toMiniprogram、link、function中的一个，其余视为无效

##### EType:toPage(跳转到当前小程序的其他页面)
传值示例：
~~~~
{
	imageUrl: "/pages/images/1.jpg",// 占位图片路径(必传)
	EType: "toPage",
	path:"../index/index?a=1&b=2"// 跳转路径(EType为toPage或toMiniprogram时必传)
}
~~~~
##### EType:toMiniprogram(跳转到其他小程序)
传值示例：
~~~~
{
	imageUrl: "/pages/images/1.jpg",// 占位图片路径(必传)
	EType: "toMiniprogram",
  appid: "wx4ce9e32110e32716",// 目的小程序的appid(EType为toMiniprogram时必传)
	path:"../index/index?a=1&b=2"// 跳转路径(EType为toPage或toMiniprogram时必传)
}
~~~~
##### EType:link(跳转到外部链接，域名需要再微信公众平台配置)
传值示例：
~~~~
{
	imageUrl: "/pages/images/1.jpg",
	EType: "link",
	link:"www.baidu.com"// 跳转路径(EType为link时必传)
}
~~~~
##### EType:function(执行内部方法)
传值示例：
~~~~
{
	imageUrl: "/pages/images/1.jpg",
	EType: "function",
	func:  () => {
		console.log('1111');
	}// 跳转路径(EType为function时必传)
}
~~~