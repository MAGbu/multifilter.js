$(document).ready( function(){
	var v = $.parseJSON(j);
	var html = "";
	$.each(v,function(i,item){
		html += "<tr class=\"filterable\"><td class=\"filterHere\">"+item.filter1+" "+item.filter2+" "+item.filter3+"</td></tr>";
	});
	$(".table").append(html);
$(".filterer.textFilter").keyup(function(){
			var filterTexts = [];
		$(".textFilter").each(function() {
			filterTexts.push($(this).val());
		});
		console.log(filterTexts);
		$(".filterable").each(function(){
			var elementToHide = $(this);
			var toBeFiltered= $(this).find(".filterHere");
			$.each(toBeFiltered, function(){
				var hide = false;
				var curElem = $(this);
				//and
				for(var i = 0; i < filterTexts.length; i++){
					if(String($(curElem).html()).indexOf(filterTexts[i]) == -1){
						hide = true;
					}
				}
				if(hide){
					$(elementToHide).hide();
				}else{
					$(elementToHide).show();
				}
			});
		});
	});				
});
		
