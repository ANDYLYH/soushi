const getDataFn = function(url,data,callback){
					$.ajax({
		    			type:"get",
		    			url:url,
		    			async:true,
		    			data:data,
		    			dataType:'jsonp',
		    			jsonp:'callback',
		    			success:function(res){
		    				callback(res);
		    			}
		    		});
				} 
export default getDataFn;