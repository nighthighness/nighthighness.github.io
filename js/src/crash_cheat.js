//崩溃欺骗
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
//         $('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = '不要玩啦,快回来~';
         clearTimeout(titleTime);
     }
     else {
//         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '你回来啦~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });