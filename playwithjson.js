$(document).ready(function(){
	console.log(j.length);
//	for(var i = 0; i < j.length; i++){
	//	console.log(j[i].filter1);
		//console.log(j[i]);
	//}
//	console.log($.parseJSON(j["A"]));
	var v = $.parseJSON(j);
	$.each(v,function(i,item){
		console.log(item.name);
		console.log(item);
		console.log(item.filter1);
	});
});