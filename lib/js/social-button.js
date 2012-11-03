/*--------------------------------------------------------------------------*
 *  
 *  Social Button JS
 *  ソーシャルボタン埋め込み用のJavaScriptをまとめたもの
 *  MIT license. 
 *  2011 creatorish.com
 *  http://creatorish.com
 *
 *  
 *--------------------------------------------------------------------------*/


/*twitter*/
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

window.___gcfg = {lang: 'ja'};
/*google+*/
(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = '//apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

/*hatena*/
(function() {
  var hate = document.createElement('script'); hate.type = 'text/javascript'; hate.async = true;
  hate.src = '//b.st-hatena.com/js/bookmark_button.js';
  var hateb = document.getElementsByTagName('script')[0]; hateb.parentNode.insertBefore(hate, hateb);
})();

/*facebook*/
window.fbAsyncInit = function() {
    FB.init({
      //appId      : 'YOUR_APP_ID', // App ID
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

    // Additional initialization code here
  };
  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/ja_JP/all.js";
     ref.parentNode.insertBefore(js, ref);
}(document));