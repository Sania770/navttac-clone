
function playVideo1(){
    const thumbnail = document.querySelector(".thumbnail1");
    const video = document.querySelector(".video1");
    
    thumbnail.style.display = "none";
    video.style.display = "block";
    video.play();

}
function playVideo2(){
    const thumbnail = document.querySelector(".thumbnail2");
    const video = document.querySelector(".video2");
    
    thumbnail.style.display = "none";
    video.style.display = "block";
    video.play();
}




function showSidebar(){
    const menuIcon = document.querySelector(".menu-resp-icon");
    const menuSidebar = document.querySelector(".menu-sidebar");

    menuIcon.classList.add("menuSidebar");
    menuSidebar.style.display = "block";
}

function hideSidebar(){
    // const menuIcon = document.querySelector(".menu-resp-icon");
    const menuSidebar = document.querySelector(".menu-sidebar");

     menuSidebar.style.display = "none";
}