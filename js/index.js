window.onload = function () {
	//获取dom元素
	var arrowEl = document.querySelector('#head .arrow')
	var liNodes = document.querySelectorAll('#head .headMain .nav .lists li')
	var upNodes = document.querySelectorAll('#head .nav .lists li .up')
	var firstLiNode = liNodes[0]
	// 获取到第一个li里面类名为up的元素
	var firstUpNode = firstLiNode.querySelector('.up')
	
	var head = document.querySelector('#head')
	var content = document.querySelector('#content')
	var cLiNodes = document.querySelectorAll('#content .lists > li')
	var cList = document.querySelector('#content .lists')
	
	var now = 0
	
	//onresize 事件会在窗口或框架被调整大小时发生
	window.onresize = function () {
		// 调整分辨率
			//1.没有点击时,视口只出现一屏 contentBind()
			//2.点击后只能出现一屏 在1的基础上对每一屏的偏移量需要重新调整
			//3.小箭头的位置也需要调整
		contentBind()
		cList.style.top = -now*(document.documentElement.clientHeight - head.offsetHeight) + "px"
		//解决三角形偏移的问题
		arrowEl.style.left = liNodes[now].offsetLeft + liNodes[now].offsetWidth/2 - arrowEl.offsetWidth/2+"px"
	}
	//内容区的交互
	contentBind()
	function contentBind() {
		// 内容区的高度 = 视口的高度 - 头部的高度
		content.style.height = document.documentElement.clientHeight - head.offsetHeight + "px"
		//让每个li的高度=内容区的高度
		for (var i = 0; i < cLiNodes.length; i++) {
			cLiNodes[i].style.height = document.documentElement.clientHeight - head.offsetHeight + "px"
		}
	}
	//头部的交互
	headBind()
	function headBind() {
		firstUpNode.style.width = "100%"
		console.log(firstLiNode.offsetLeft, firstLiNode.offsetWidth, arrowEl.offsetWidth)
		//把三角形先显示在home下面
		arrowEl.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth/2 - arrowEl.offsetWidth/2+"px"
		// 点击每个li时，三角形显示到相应的li下面
		for (var i = 0; i < liNodes.length; i++) {
			// 把每次循环得到的li绑定给li的index属性 对i进行转绑（转绑很重要）
			liNodes[i].index = i
			console.log(i)
			liNodes[i].onclick = function (){
				move(this.index)
				now = this.index
			}
		}
		//小三角形的移动
		function move(index) {
			for (var i = 0; i < upNodes.length; i++) {
					upNodes[i].style.width = ""
				}
			upNodes[index].style.width = "100%"
			console.log(index)
			arrowEl.style.left = liNodes[index].offsetLeft + liNodes[index].offsetWidth/2 - arrowEl.offsetWidth/2+"px"
			cList.style.top = -index*(document.documentElement.clientHeight - head.offsetHeight) + "px"
		}
	}
}
