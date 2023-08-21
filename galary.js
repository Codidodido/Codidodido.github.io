var videosource = document.querySelector("#video-source");
var video_cover = document.querySelectorAll(".video-cover");
var mainVideo = document.querySelector("#mainVideo");
let videoindex = 0
 function videoset(id){ 
          let video = document.getElementById(id);
          const src = video.getAttribute("src");
          videosource.removeAttribute("src");
          mainVideo.removeAttribute("src",src);
    videosource.setAttribute("src",src);
    mainVideo.setAttribute("src",src);

   
}
