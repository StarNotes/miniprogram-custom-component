Component({
	properties: {
		dataList: {            // 属性名
			type: Array,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
			value: []     // 属性初始值（可选），如果未指定则会根据类型选择一个
		},
	},
	data: {
		isOutLink:false
	},
	methods: {
		// 判断是否是空对象
		isEmptyObject: function (obj)  {
			for (let p in obj) {
				return false;
			}
			return true;
		},
		// 判断是否是函数
		isFunction: function (fn)  {
			return Object.prototype.toString.call(fn).toLowerCase() === "[object function]";
		},
		// 变量控制跳转到外部链接
		toLink: function(){
			this.setData({
				isOutLink:true
			})
		},
		// 执行参数传入的方法
		toInnerFunc:function(e){
			let index = e.currentTarget.dataset.index;
			this.data.dataList[index].func && this.data.dataList[index].func();
		},
		getUrl: function(data) {
			let url = data.path;
			if (!this.isEmptyObject(data.params)){
				url = `${url}?`;
				let paramArr = [];
				for (let p in data.params){
					paramArr.push(`${p}=${data.params[p]}`);
				}
				url = `${url}${paramArr.join('&')}`;
			}
			console.log(url);
			return url;
		},
		tabClick : function (e) {
			let data = e.currentTarget.dataset.obj;
			switch (data.EType) {
				case 'toPage':// 打开当前小程序页面
					wx.navigateTo({
						url: this.getUrl(data.data),
						fail: function (e) {
							wx.switchTab({ url: this.getUrl(data.data) });
						}
					})
					break;
				case 'toMiniprogram':
					wx.navigateToMiniProgram({
						appId: data.data.appid,
						path: this.getUrl(data.data),
						extraData: data.data.extraData,
						envVersion: 'trial',
						success: (res) => {
							console.log(res)
						},
						fail: res => {
							console.log("res")
							console.log(res)
						}
					})
					break;
				case 'link':
					
					break;
				case 'function':
					
					break;
				default:
					break;
			}
		}
	}
});