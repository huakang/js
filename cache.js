<html>
<head>
<script>
var manual = "manual";
var system = "system";
var divContent = {};
var cache = {manual:{},system:{}};

function getCacheType(classList){
  if(has(classList,system)){
		return system;
	}
	return manual;
}

function has(collection,value){
	for(var i=0;i<collection.length;i++){
		if(value == collection[i]){
			return true;
		}
	}
	return false;
}

function init(){
	var doms = document.getElementsByClassName("cache");
	for(var i=0;i<doms.length;i++){
		var dom = doms[i];
		if(dom.nodeName == "DIV"){
			dom.onfocus = function(){
				divContent[this.id] = this.innerHTML;
			};
			dom.onblur = function(){
				if(this.innerHTML != divContent[this.id]){
					divContent[this.id] = this.innerHTML;
					var type = getCacheType(this.classList);
					cache[type][this.id] = this.innerHTML;
				}
			};
		}else{
			dom.onchange = function(){
				var type = getCacheType(this.classList);
				cache[type][this.id] = this.value;
			}
		}
	}
};
</script>
</head>
<body onLoad="init();">
<input id = "id0" class="cache" type = "text" value = ""/>
<div id = "id1" class="cache system" contenteditable = "true" class="cache">abcdefg</div>
<textarea id = "id2" class="cache">abc</textarea>
</body>
</html>
