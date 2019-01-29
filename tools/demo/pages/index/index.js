Page({
	data: {
		list: [{
			imageUrl: "/pages/images/1.jpg",
			EType: "toPage",
			path:"../index/index?a=1&b=2"
		}, {
				imageUrl: "/pages/images/1.jpg",
			EType: "toMiniprogram",
			appid: "wx4ce9e32110e32716",
			path: "../index/index?a=1&b=2"
		}, {
			imageUrl: "/pages/images/1.jpg",
			EType: "link",
			link:"https://mqa666.moretickets.com"
		}, {
			imageUrl: "/pages/images/1.jpg",
			EType: "function",
			func:  () => {
				console.log('1111');
			}
		}, {
			imageUrl: "/pages/images/1.jpg",
		}]
	},
})
