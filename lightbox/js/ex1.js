window.addEventListener("load", () => {
  console.log("완료");
  const pics = document.querySelectorAll(".pic");
  const lightbox = document.querySelector("#lightbox");
  const lightboximg = document.querySelector("#lightbox-img");
  const lightboxTitle = document.querySelector("#lightBOx-title");

  pics.forEach((pic) => {
    //console.log(pic);
    const bigSrc = pic.dataset.src;
    //console.log(bigSrc);
    const bigTitle = pic.dataset.title;
   // console.log(bigTitle);

    pic.addEventListener("click", ()=>{
        lightbox.style.display = "flex"
        lightboximg.src = bigSrc;
       lightboxTitle.textContent = bigTitle;
    })
  });
  // 배경클릭시 닫기
  
});
