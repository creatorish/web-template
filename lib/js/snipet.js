/*--------------------------------------------------------------------------*
 *  
 *  SmoothScroll JavaScript Library V2
 *  
 *  MIT-style license. 
 *  
 *  2007-2011 Kazuma Nishihata 
 *  http://www.to-r.net
 *  
 *--------------------------------------------------------------------------*/
 
new function(){var attr="data-tor-smoothScroll";var attrPatt=/noSmooth/;var d=document;function addEvent(elm,listener,fn){try{elm.addEventListener(listener,fn,false)}catch(e){elm.attachEvent("on"+listener,function(){fn.apply(elm,arguments)})}}function SmoothScroll(a){if(d.getElementById(a.rel.replace(/.*\#/,""))){var e=d.getElementById(a.rel.replace(/.*\#/,""))}else{return}var end=e.offsetTop;var docHeight=d.documentElement.scrollHeight;var winHeight=window.innerHeight||d.documentElement.clientHeight;if(docHeight-winHeight<end){var end=docHeight-winHeight}var start=window.pageYOffset||d.documentElement.scrollTop||d.body.scrollTop||0;var flag=(end<start)?"up":"down";function scrollMe(start,end,flag){setTimeout(function(){if(flag=="up"&&start>=end){start=start-(start-end)/10-1;window.scrollTo(0,start);scrollMe(start,end,flag)}else if(flag=="down"&&start<=end){start=start+(end-start)/10+1;window.scrollTo(0,start);scrollMe(start,end,flag)}else{scrollTo(0,end)}return},8)}scrollMe(start,end,flag)}addEvent(window,"load",function(){var anchors=d.getElementsByTagName("a");for(var i=0,len=anchors.length;i<len;i++){if(!attrPatt.test(anchors[i].getAttribute(attr))&&anchors[i].href.replace(/\#[a-zA-Z0-9_]+/,"")==location.href.replace(/\#[a-zA-Z0-9_]+/,"")){anchors[i].rel=anchors[i].href;anchors[i].href="javascript:void(0)";anchors[i].onclick=function(){SmoothScroll(this)}}}})}


/**
 * 簡単なロールオーバー機能を作成
 * ソース内にある<img src="○○_off.□□"を探し、マウスオーバー時に○○_on.□□に変更します。
 **/
 
var useDropDown = false;
jQuery.each(jQuery("a:has(img)"),function(i) {
	var parent = $(this).parent();
	jQuery.each($(this).find("img"),function(i) {
		var img = $(this);
		if(!jQuery(this).attr("src").match("_off.")) {
			return;
		}
		
		var target = img;
		if (useDropDown) {
			target = parent;
		}
		
		target.hover(function() {
			if (!img.hasClass("keep")) {
				img.addClass("hover");
				img.attr('src', img.attr("src").replace("_off.", "_on."));
			}
		}, function() {
			if (!img.hasClass("keep")) {
				img.removeClass("hover")
				img.attr('src', img.attr("src").replace("_on.", "_off."));
			}
		});
	});
});

jQuery.fn.keepOn = function() {
	jQuery.each($(this),function(i) {
		jQuery(this).addClass("keep");
		jQuery(this).attr('src', jQuery(this).attr("src").replace("_off.", "_on."));
	});
}
jQuery.fn.keepOff = function() {
	jQuery.each($(this),function(i) {
		jQuery(this).removeClass("keep");
		jQuery(this).attr('src', jQuery(this).attr("src").replace("_on.", "_off."));
	});
}

/**
 * スマートフォンでのアクセス時にはbodyにクラスを付加
 * iPhoneアクセス時に<body class="iPhone">
 * iPodアクセス時に<body class="iPod">
 * iPadアクセス時に<body class="iPad">
 * Androidアクセス時に<body class="Android">
 **/

var ua = navigator.userAgent.toLowerCase();
if (ua.search(/iphone/) !== -1) {
	jQuery(document.body).addClass("iPhone");
}
if (ua.search(/ipad/) !== -1) {
	jQuery(document.body).addClass("iPad");
}
if (ua.search(/ipod/) !== -1) {
	jQuery(document.body).addClass("iPod");
}
if (ua.search(/android/) !== -1) {
	jQuery(document.body).addClass("android");
}