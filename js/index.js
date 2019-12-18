window.onload = function () {
	//获取dom元素
	var arrowEl = document.querySelector('#head .arrow')
	var liNodes = document.querySelectorAll('#head .headMain .nav .lists li')
	var upNodes = document.querySelectorAll('#head .nav .lists li .up')
	var firstLiNode = liNodes[0]
	// 获取到第一个li里面类名为up的元素
	var firstUpNode = firstLiNode.querySelector('.up')
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
				for (var i = 0; i < upNodes.length; i++) {
					upNodes[i].style.width = ""
				}
				upNodes[this.index].style.width = "100%"
				console.log(this.index)
				arrowEl.style.left = liNodes[this.index].offsetLeft + liNodes[this.index].offsetWidth/2 - arrowEl.offsetWidth/2+"px"
			}
		}
}
