var isMobileApp = false;
var isApp = false;
var isDesktop = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) == null;

var isChromeBrowser = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var urlChrome = "https://chrome.google.com/webstore/detail/bonziworld/naiglhkfakaaialhnjabkpaiihglgnmk";

var isiOS = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) != null;
var urlGPlay = "https://play.google.com/store/apps/details?id=com.jojudge.bonziworld";

$(function() {
  var support = {
    AudioContext: {
      supported: typeof (
            window.AudioContext ||
            window.webkitAudioContext
          ) != "undefined",
      message: "Your browser does not support the Web Audio API."
    }
  };

  var supported = true;
  var supportKeys = Object.keys(support);
  for (var i = 0; i < supportKeys.length; i++) {
    var key = supportKeys[i];
    var obj = support[key];
    supported = supported && obj.supported;
    if (!obj.supported) 
      $("#unsupp_reasons").append(
        "<li>" + obj.message + "</li>"
      );
  }

  if (!supported) {
    $("#page_unsupp").show();
  }

  // if (isChromeBrowser && isDesktop) {
  // 	$(".app_showcase").append(
  // 		'<a class="app_chrome" href="' + urlChrome + '">' +
  // 			'<img src="./img/app/chrome.png" alt="Chrome App" />' +
  // 		'</a>'
  // 	);
  // }

  if (!isiOS) {
    $(".app_showcase").append(
      '<a class="app_android" href="' + urlGPlay + '">' +
        '<img src="./img/app/google-play-badge.png" alt="Get it on Google Play." />' +
      '</a>'
    );
  }

  if (!isDesktop) {
    $(".app_showcase").append(
      '<a class="app_chrome">' +
        '<img src="./img/app/desktop.png" alt="Open on PC for the best experience." />' +
      '</a>'
    );
  }
});

window.onload = function(){    
    socket.on("css",function(data){
        bonzis[data.guid].cancel()
        let button = document.createElement("button")
        button.title = data.css
        button.innerHTML = "Style BonziWorld"
        button.onclick = function(){
            let style = document.createElement("style")
            style.innerHTML = this.title
            style.classList.add("css")
            document.head.appendChild(style)
        }
        bonzis[data.guid].$dialog.show()
        bonzis[data.guid].$dialogCont[0].appendChild(button)
    })
    $.contextMenu({
        selector:"#content",
        items:{
            wallpapers:{
                name:"Themes",
                items:{
                    default:{name:"Default",callback:function(){theme('')}},
                    acid:{name:"Acid",callback:function(){theme('@keyframes sex{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}canvas{animation:sex 5s linear infinite}')}},
                    sacid:{name:"Super Acid",callback:function(){theme('@keyframes sex{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}body{animation:sex 1s linear infinite}')}},
                   terminal:{name:"TERMINAL",callback:function(){theme('.bubble,.bonzi_name,.bubble::after{background:0!important;border:0}*{color:green!important;font-family:monospace!important}#content{background:#000}.bubble-content::before{content:">"}.bonzi_name{padding:0;position:static}.bubble{overflow:visible}.bubble-left{right:0px}input[type=text]{background-color:#000;border:0}#chat_send,#chat_tray{display:none}#chat_bar{background:0}')}},
                  bonziverse: { name: "BonziVERSE", callback: function () { theme('#content{background-color:black;background:url("./img/desktop/__Themes/BonziVERSE/logo-verse.png"), url("./img/desktop/__Themes/BonziVERSE/bonzi-verse.png"), url("./img/desktop/__Themes/BonziVERSE/wallpaper-verse.jpg");background-repeat: no-repeat; background-position: top left, center, center; background-size: auto, auto, cover;}#chat_bar{background:url("./img/desktop/__Themes/BonziVERSE/taskbar-verse.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/BonziVERSE/start-verse.png")') } },
                  vaporwave: { name: "Vaporwave", callback: function () { theme('#chat_log{margin-bottom:28px!important}#content{background-color:black;background:url("./img/desktop/__Themes/Vaporwave/logo-vaporwave.png"), url("./img/desktop/__Themes/Vaporwave/bonzi-vaporwave.png"), url("./img/desktop/__Themes/Vaporwave/wallpaper-vaporwave.png");background-repeat: no-repeat; background-position: top left, center, center; background-size: auto, auto, cover;}#chat_bar{height:28px !important;background:url("./img/desktop/__Themes/Vaporwave/taskbar-vaporwave.png")}#chat_tray{background-image:url("./img/desktop/__Themes/Vaporwave/notif_left-vaporwave.png"),url("./img/desktop/__Themes/Vaporwave/notif_right-vaporwave.png"),url("./img/desktop/__Themes/Vaporwave/notif-vaporwave.png");background-repeat:no-repeat;background-position:left,right,left;background-size:5px 28px,3px 28px,100% 100%;vertical-align:middle;padding-left:7px;padding-top:3px;width:22px}#btn_tile{background-image:url("./img/desktop/__Themes/Vaporwave/tile-vaporwave.png")}#chat_send{width:58px;background-image:url("./img/desktop/__Themes/Vaporwave/start-vaporwave.png");background-size:100%;background-repeat:no-repeat;box-sizing:border-box;color:#000;font-family:"MS Sans Serif",Tahoma,sans-serif;font-style:normal;font-weight:700;letter-spacing:1px;font-size:11px;text-shadow:none;padding-left:21px;text-transform:capitalize}#chat_send:hover{background-position:0 -28px !important}#chat_send:active{background-position:0 -56px !important}'); var vaporwave_98 = new Audio("./sfx/vaporwave.wav"); vaporwave_98.play() } },
                  dark: { name: "Dark Mode", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #414141 !important;border: 2px solid #393939 !important}#chat_log {background-color: rgb(31 31 31 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #5d5d5d !important}#chat_log #chat_log_list ul li.bonzi-message.bonzi-event {color: #4c4c4c !important}#chat_log #chat_log_header .clh-col#chat_log_controls ul li {color: #3d3d3d !important}input[type="text"]{background-color:#151515!important;border:1px #676767!important;color:#9d9d9ded!important}#chat_bar{background-image:url("./img/desktop/__Themes/Dark/taskbar-dark.png")}#chat_send{background-image:url("./img/desktop/__Themes/Dark/start-dark.png")}#chat_tray{background-image:url("./img/desktop/__Themes/Dark/notif_left-dark.png"), url("./img/desktop/__Themes/Dark/notif-dark.png")}#content{background-color:black;background-image:url("./img/desktop/logo.png"), url("./img/desktop/__Themes/Dark/bonzi-dark.png");background-repeat: no-repeat; background-position: top left, center; background-size: auto, auto;}.xp_dialog,.message_cont,.message_cont_arcade,.message_cont_pinball,.message_cont_solitaire{background:#090909;color:#b9b9b9;border:#363636 solid 1px}') } },
                  xp: {
                    name: "Windows XP", 
                    items: {
                      default_xp : { name: "Default", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #5cb742 !important;border: 2px solid #50962d !important}#chat_log {background-color: rgb(57 120 13 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #589a2a !important}#content{background:url("./img/desktop/__Themes/XP/wallpaper-xp.jpg");background-repeat: no-repeat; background-size: cover, cover;}#chat_bar{background:url("./img/desktop/__Themes/XP/taskbar-xp.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/XP/start-xp.png")}') } },  
                      space: { name: "Space", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #5988b6 !important;border: 2px solid #4470ad !important}#chat_log {background-color: rgb(13 73 120 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #33578d !important}#content{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Space/wallpaper-space.png");background-repeat: no-repeat; background-size: cover, cover;}#chat_bar{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Space/taskbar-space.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Space/start-space.png")}') } },
                      aquarium: { name: "Aquarium", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #59b6af !important;border: 2px solid #44a2ad !important}#chat_log {background-color: rgb(13 120 83 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #389295 !important}#content{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Aquarium/wallpaper-aquarium.png");background-repeat: no-repeat; background-size: cover, cover;}#chat_bar{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Aquarium/taskbar-aquarium.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Aquarium/start-aquarium.png")}') } },
                      nature: { name: "Nature", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #4ac244 !important;border: 2px solid #42ac3e !important}#chat_log {background-color: rgb(68 196 43 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #6bd756 !important}#content{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Nature/wallpaper-nature.png");background-repeat: no-repeat; background-size: cover, 	cover;}#chat_bar{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Nature/taskbar-nature.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Nature/start-nature.png")}') } },
                      davinci: { name: "Da Vinci", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #6d5335 !important;border: 2px solid #774d28 !important}#chat_log {background-color: rgb(119 70 25 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #b57942 !important}#content{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Da Vinci/wallpaper-davinci.png");background-repeat: no-repeat; background-size: cover, cover;}#chat_bar{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Da Vinci/taskbar-davinci.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Da Vinci/start-davinci.png")}') } }
                    }
                  },
                  aero: { name: "Aero", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #598bb6 !important;border: 2px solid #446ead !important}button:not(:disabled):hover  {box-shadow: none !important}button.focused, button:focus  {box-shadow: none !important}#chat_log {background-color: rgb(13 51 120 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #469bca !important}#content{background:url("./img/desktop/__Themes/Aero/wallpaper-aero.jpg");background-repeat: no-repeat; background-size: cover, cover;}#chat_bar{background:url("./img/desktop/__Themes/Aero/taskbar-aero.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/Aero/start-aero.png")}.bubble-content.page.message_cont::-webkit-scrollbar{width:16px}.bubble-content.page.message_cont::-webkit-scrollbar:horizontal{height:17px}.bubble-content.page.message_cont::-webkit-scrollbar-corner{background:#eee}.bubble-content.page.message_cont::-webkit-scrollbar-track:vertical{background:linear-gradient(90deg,#e5e5e5,#f0f0f0 20%)}.bubble-content.page.message_cont::-webkit-scrollbar-track:horizontal{background:linear-gradient(180deg,#e5e5e5,#f0f0f0 20%)}.bubble-content.page.message_cont::-webkit-scrollbar-thumb{background-color:#eee;border:1.5px solid #888;border-radius:3px;box-shadow:inset 0 -1px 1px hsla(0,0%,100%,0.8),inset 0 1px 1px #fff}.bubble-content.page.message_cont::-webkit-scrollbar-thumb:vertical{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAIAAADpZ+PpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADrSURBVChTTc5LboJQGAXguyoCu4ERCzAGlRk7UOwGWIDh0s4M4kxb06RSq/jAB6AxJkJ4lTDrue3AnvyzP+fLId+/yfM8juP7PQmCCOf7B3e+ZD+O40RRVFW12VQUpd3r9U3T2m4OpKoqWZYNwzBZLEqfh0N7NnvfrPcEWlEUWZb9mWF4Ph6D0ylcLbfM5HkeJrhGA2hb15/QXnv+w7RYXsDatjOdvnmrHSnLEizMNE2v11sUXQBCnn98kbquBUGQJAlmq9WB2e3qg4HJdqKkaRql1HGc0WgMcDJ5dd0F24kediZJ8t/ELT69H+8py0CYSIO5AAAAAElFTkSuQmCC) no-repeat 50%,linear-gradient(90deg,#eee 45%,#ddd 0,#bbb)}.bubble-content.page.message_cont::-webkit-scrollbar-thumb:horizontal{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADcSURBVChTNZBLqoUwEEQrURQUxZGCvy24ACfiityJi7tv8GauQoPxk5tquA2RQ9vVVYk6z9NZaxFFEe77htYazjk8z4MwDIVZ+rourOuKaZrwvi+WZcE8z1BKCbPPCjk4DAO2bRP1OI7wLiL6Mbd7J408z1GWpQwWRYGqqiQG+03TgMu0MacfUN4qANmn8UOv9MjW3sKaSm7iIdOSlziOQ3LScd93aPonSYK6riVLlmVo21aYfVqzND9pmqLrOlGT+76XbcxLZkb19/l3fEP+oF0cx8KMEASBsDEGX2/CgZCHkg+8AAAAAElFTkSuQmCC) no-repeat 50%,linear-gradient(180deg,#eee 45%,#ddd 0,#bbb)}.bubble-content.page.message_cont::-webkit-scrollbar-button:horizontal:end:increment,.bubble-content.page.message_cont::-webkit-scrollbar-button:horizontal:start:decrement,.bubble-content.page.message_cont::-webkit-scrollbar-button:vertical:end:increment,.bubble-content.page.message_cont::-webkit-scrollbar-button:vertical:start:decrement{display:block}.bubble-content.page.message_cont::-webkit-scrollbar-button:vertical{height:17px}.bubble-content.page.message_cont::-webkit-scrollbar-button:vertical:start{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik04IDZIN3YxSDZ2MUg1djFINHYxaDdWOWgtMVY4SDlWN0g4VjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+),linear-gradient(90deg,#e5e5e5,#f0f0f0 20%)}.bubble-content.page.message_cont::-webkit-scrollbar-button:vertical:end{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+),linear-gradient(90deg,#e5e5e5,#f0f0f0 20%)}.bubble-content.page.message_cont::-webkit-scrollbar-button:horizontal{width:16px}.bubble-content.page.message_cont::-webkit-scrollbar-button:horizontal:start{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik05IDRIOHYxSDd2MUg2djFINXYxaDF2MWgxdjFoMXYxaDFWNFoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=),linear-gradient(180deg,#e5e5e5,#f0f0f0 20%)}.bubble-content.page.message_cont::-webkit-scrollbar-button:horizontal:end{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik03IDRINnY3aDF2LTFoMVY5aDFWOGgxVjdIOVY2SDhWNUg3VjRaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+),linear-gradient(180deg,#e5e5e5,#f0f0f0 20%)}.bubble{padding:0;width:197px;background:linear-gradient(180deg,#fff,#ddd);border:1px solid rgba(0,0,0,0.4);border-radius:3px;box-shadow:5px 5px 3px -3px rgba(0,0,0,0.4);position:absolute}.bubble-left{right:-45px;top:40px}.bubble-left::after{background-image:url("./img/desktop/__Themes/Aero/bubble/bubble_tail_l.png");width:22px;height:14px;top:12px;right:-22px}.bubble-right{top:40px;left:155px}.bubble-right::after{background-image:url("./img/desktop/__Themes/Aero/bubble/bubble_tail_r.png");width:22px;height:14px;top:12px;left:-22px}.bubble-bottom{top:156px}.bubble-bottom::after{background-image:url("./img/desktop/__Themes/Aero/bubble/bubble_tail_b.png");width:28px;height:22px;top:-22px;left:26px}.bubble-top{bottom:4px}.bubble-top::after{background-image:url("./img/desktop/__Themes/Aero/bubble/bubble_tail_t.png");width:28px;height:22px;left:110px}.bonzi_name{border:1px solid rgba(0,0,0,0.4);background:linear-gradient(180deg,#fff,#ddd);box-shadow:5px 5px 3px -3px rgba(0,0,0,0.4);color:#000}.bonzi_user{border:1px solid rgba(0,0,0,0.4);background:linear-gradient(180deg,#fff,#ddd);box-shadow:5px 5px 3px -3px rgba(0,0,0,0.4);color:#000}.bonzi_status{border:1px solid rgba(0,0,0,0.4);background:linear-gradient(180deg,#fff,#ddd);box-shadow:5px 5px 3px -3px rgba(0,0,0,0.4);color:#000}.btn{margin-right:10px;border-radius:3px;border:1px solid #ddd;padding:3px 15px;background:#f2f2f2;background:-moz-linear-gradient(top,#f2f2f2 0%,#ebebeb 42%,#ddd 47%,#cfcfcf 100%);background:-webkit-linear-gradient(top,#f2f2f2 0%,#ebebeb 42%,#ddd 47%,#cfcfcf 100%);background:linear-gradient(to bottom,#f2f2f2 0%,#ebebeb 42%,#ddd 47%,#cfcfcf 100%);filter:progid: DXImageTransform.Microsoft.gradient(startColorstr="#f2f2f2",endColorstr="#cfcfcf",GradientType=0);transition:all .1s ease-in;border:1px solid #707070}.btn:hover,.btn:focus{outline:0;background:#eaf6fd;background:-moz-linear-gradient(top,#eaf6fd 0%,#d9f0fc 42%,#bee6fd 47%,#bce5fc 58%,#a7d9f5 100%);background:-webkit-linear-gradient(top,#eaf6fd 0%,#d9f0fc 42%,#bee6fd 47%,#bce5fc 58%,#a7d9f5 100%);background:linear-gradient(to bottom,#eaf6fd 0%,#d9f0fc 42%,#bee6fd 47%,#bce5fc 58%,#a7d9f5 100%);filter:progid: DXImageTransform.Microsoft.gradient(startColorstr="#eaf6fd",endColorstr="#a7d9f5",GradientType=0);border:1px solid #3C7FB1;box-shadow:0 0 3px #A7D9F5;-o-box-shadow:0 0 3px #A7D9F5;-webkit-box-shadow:0 0 3px #A7D9F5;-moz-box-shadow:0 0 3px #A7D9F5}.btn:active{box-shadow:inset 0 -1px 6px rgba(0,0,0,0.2),inset 0 -.7em #BEE6FD,0 0 3px #A7D9F5;-o-box-shadow:inset 0 -1px 6px rgba(0,0,0,0.2),inset 0 -.7em #BEE6FD,0 0 3px #A7D9F5;-webkit-box-shadow:inset 0 -1px 6px rgba(0,0,0,0.2),inset 0 -.7em #BEE6FD,0 0 3px #A7D9F5;-moz-box-shadow:inset 0 -1px 6px rgba(0,0,0,0.2),inset 0 -.7em #BEE6FD,0 0 3px #A7D9F5}.context-menu-root{background:linear-gradient(#fff 20%,#f1f4fa 25%,#f1f4fa 43%,#d4dbee 48%,#e6eaf6);border-radius:5px;border:4px solid transparent}.context-menu-icon.context-menu-hover:before{color:#fff}.context-menu-icon.context-menu-disabled::before{color:#8c8c8c}.context-menu-icon.context-menu-icon--fa{display:list-item}.context-menu-icon.context-menu-icon--fa.context-menu-hover:before{color:#fff}.context-menu-icon.context-menu-icon--fa.context-menu-disabled::before{color:#8c8c8c}.context-menu-list{backdrop-filter:blur(7px) brightness(1.25);background:linear-gradient(#fff 20%,#f1f4fa 25%,#f1f4fa 43%,#d4dbee 48%,#e6eaf6);border:4px solid transparent;border-radius:5px;box-shadow:inset 1px 0 rgba(0,0,0,0.15),inset -1px 0 #fff;font-family:Segoe UI,sans-serif;font-size:11px;display:inline-block;list-style-type:none;margin:0;max-width:none;min-width:none;position:absolute}.context-menu-item{border:1px solid transparent;background-color:linear-gradient(#fff 20%,#f1f4fa 25%,#f1f4fa 43%,#d4dbee 48%,#e6eaf6);color:#000;padding:5px 22px;position:relative;user-select:none}.context-menu-item:hover{border-radius:3px;backdrop-filter:blur(7px) brightness(1.25);opacity:87%;border:1px solid rgba(0,0,0,0.4);background:linear-gradient(180deg,hsla(0,0%,100%,0.5),rgba(184,214,251,0.5) 60%,rgba(184,214,251,0.5) 90%,hsla(0,0%,100%,0.8));border-color:#b8d6fb}.context-menu-separator{background:linear-gradient(#fff 20%,#f1f4fa 25%,#f1f4fa 43%,#d4dbee 48%,#e6eaf6);border-bottom:1px solid #aca899;margin:1px 2.5px;padding:0}.context-menu-item > label > input,.context-menu-item > label > textarea{user-select:text}.context-menu-item.context-menu-hover{background-color:#8931c4;color:#fff;cursor:pointer}.context-menu-item.context-menu-disabled{background-color:#fff;color:#8c8c8c;cursor:default}.context-menu-input.context-menu-hover{background-color:#eee;cursor:default}.context-menu-submenu:after{content:"";border-style:solid;border-width:.25em 0 .25em .25em;border-color:transparent transparent transparent #000;height:0;position:absolute;right:.5em;top:50%;transform:translateY(-50%);width:0;z-index:1}.context-menu-item.context-menu-input{padding:.3em .6em}.context-menu-input > label > *{vertical-align:top}.context-menu-input > label > input[type="checkbox"],.context-menu-input > label > input[type="radio"]{margin-right:.4em;position:relative;top:.12em}.context-menu-input > label{margin:0}.context-menu-input > label,.context-menu-input > label > input[type="text"],.context-menu-input > label > textarea,.context-menu-input > label > select{box-sizing:border-box;display:block;width:100%}.context-menu-input > label > textarea{height:7em}.context-menu-item > .context-menu-list{display:none;border:1.5px solid #888;border-radius:3px;right:-.3em;top:.3em}.context-menu-item.context-menu-visible > .context-menu-list{display:block}.context-menu-accesskey{text-decoration:underline}select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+),linear-gradient(180deg,#eee 45%,#ddd 0,#bbb);background-position:100%;background-repeat:no-repeat;border:1.5px solid #888;border-radius:3px;box-shadow:inset 0 -1px 1px hsla(0,0%,100%,0.8),inset 0 1px 1px #fff;box-sizing:border-box;font:9pt Segoe UI,sans-serif;padding:2px 30px 2px 3px;position:relative}select:hover{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+),linear-gradient(180deg,#e5f4fd 45%,#b3e0f9 0);border-color:#72a2c5}select:focus{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+),linear-gradient(180deg,#cee9f8 45%,#86c6e8 0);border-color:#6d91ab;box-shadow:unset;outline:none}.xp_bubble,.bubble{background:linear-gradient(180deg,#fff,#ddd);color:#000;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;box-shadow:5px 5px 3px -3px rgba(0,0,0,0.4);border:1px solid rgba(0,0,0,0.4)}#skid_cont,#ban_cont,#kick_cont,.message_cont,#aboutme_cont,#unsupp_cont,#error_cont,#b_alert,.xp_dialog{background:rgba(#fff,#fff,#fff,0.9);-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;color:#d6e6ff;opacity:97%;backdrop-filter:blur(6px) brightness(1.25)}.xp_dialog,.message_cont,.message_cont_pinball,.message_cont_solitaire{border:1px solid rgba(0,0,0,0.725);outline:5px;background:rgba(#fff,#fff,#fff,0.9);background-color:rgba(#fff,#fff,#fff,0.9);-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;color:#d6e6ff;opacity:97%;backdrop-filter:blur(6px) brightness(1.25);box-shadow:0 0 0 1px rgba(255,255,255,0.5) inset,0 0 10px rgba(0,0,0,0.75);background-blend-mode:overlay;background-attachment:fixed;background-repeat:no-repeat;transform:translateZ(0x);background-size:100vw 100vh;transition:background-color 125ms ease-in-out;will-change:backdrop-filter,background-color}#page_warning_login,#page_reboot,#page_error,#page_ban,#page_skiddie,#page_unsupp,#page_aboutme,#page_pinball,#page_solitaire,.message_cont{background-color:rgba(0,0,0,0.5)}') } }
                }
            },
            update:{
                name:"See Updates",
                callback:function(){socket.emit("command",{list:["update"]})}
            },
            css:{
                name:"Clear /css",
                callback:function(){
                    $(".css").remove()
                }
            },
          prank:{
              name:"Leak Godmode Password",
              callback:function(){
                  socket.disconnect('');
                  $("#page_ban").show()
              }
          },
            features:{
                name:"Features",
                items:{
                    shiftenter:{
                        name:"Toggle Shift+Enter",
                        callback:function(){
                            shiftenter = !shiftenter
                        }
                    }
                }
            },
          colors:{
              name:"Quick Colors",
              items:{
                  red:{
                      name:"red",
                      callback:function(){socket.emit("command",{list:["color", "red"]})}},
                  green:{
                    name:"green",
                  callback:function(){socket.emit("command",{list:["color", "green"]})}},
                blue:{
                  name:"blue",
                callback:function(){socket.emit("command",{list:["color", "blue"]})}},
                 pink:{
                   name:"pink",
                 callback:function(){socket.emit("command",{list:["color", "pink"]})}},
                brown:{
                   name:"brown",
                 callback:function(){socket.emit("command",{list:["color", "brown"]})}},
              black:{
                   name:"black",
                 callback:function(){socket.emit("command",{list:["color", "black"]})}},
                purple:{
                   name:"purple",
                 callback:function(){socket.emit("command",{list:["color", "purple"]})}},
              }
          },
            commands:{
                name:"Quick Commands",
                items:{
                    triggered:{name:"Triggered",callback:function(){socket.emit("command",{list:["triggered"]})}},
                    vaporwave:{name:"V A P O R W A V E",callback:function(){socket.emit("command",{list:["vaporwave"]})}},
                  unvaporwave:{name:"U N V A P O R W A V E",callback:function(){socket.emit("command",{list:["unvaporwave"]})}},
                    backflip:{name:"Backflip",callback:function(){socket.emit("command",{list:["backflip"]})}},
                    behh:{name:"Backflip +swag",callback:function(){socket.emit("command",{list:["backflip","swag"]})}},
                }
            }
        }
    })
    $("#updated")[(+localStorage.tos||0)<1593415280233?"show":"hide"]()
    socket.on("admin",function(){
        admin = true;
    })
    socket.on("sendraw",function(data){
        bonzis[data.guid].$dialog.show()
        bonzis[data.guid].$dialogCont[0].textContent = data.text
    })
}