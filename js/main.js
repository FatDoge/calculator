//获取按钮内容
function buttonClick(num){
		$("#numResult").append(num);
	}
$(document).ready(function(){
	//结果存储
	var answer=0;
	// 特殊按键
	$("#AC").click(function(){
		$("#numResult").html("");
	})
	$("#CE").click(function(){
		//退格
		var strArr=$("#numResult").text().split("");
		strArr.pop();
		var temp=strArr.join("");
		$("#numResult").html(temp);
	})
	// 运算
	$("#calResult").click(function(){
		var result=$("#numResult").text();
		$("#numResult").html(eval(result));
		anwser=eval(result);
	})
	// 结果存储
	$("#Ans").click(function(){
		$("#numResult").append(anwser);
	})

})