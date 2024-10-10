console.log("site is under construction");

/*====================================================================*/
/*====================================================================*/
/*  
                      Drop Down Hide and Unhide Logic        
*/
/*====================================================================*/
/*====================================================================*/
const dropDownBTN = document.querySelector(".fa-angle-down");
const dropUpBTN = document.querySelector(".fa-angle-up");
const ulItems = document.querySelector(".drop-down");
const container = document.querySelector(".main_container");

// Show the dropdown when the dropdown button is clicked
dropDownBTN.addEventListener("click", () => {
  if (ulItems.style.display === "none" || ulItems.style.display === "") {
    ulItems.style.display = "flex";
    container.style.overflow = "visible";
    dropDownBTN.style.display = "none";
  }
});

dropUpBTN.addEventListener("click", (e) => {
  dropDownBTN.style.display = "flex";
  ulItems.style.display = "none";
});

document.addEventListener("click", (e) => {
  const isClickInside =
    ulItems.contains(e.target) || dropDownBTN.contains(e.target);
  if (!isClickInside) {
    ulItems.style.display = "none";
    dropDownBTN.style.display = "flex";
  }
});

/*====================================================================*/
/*====================================================================*/
/*  
                      Home drop down        
*/
/*====================================================================*/
/*====================================================================*/

document.querySelectorAll(".custom_dropdown summary").forEach((summary) => {
  summary.addEventListener("click", function () {
    const mainContainer = document.querySelector(".main_container");
    const details = this.parentNode;

    if (details.hasAttribute("open")) {
      // If the dropdown is closing
      mainContainer.style.overflow = "hidden";
    } else {
      // If the dropdown is opening
      mainContainer.style.overflow = "visible";
    }
  });
});
/*====================================================================*/
/*====================================================================*/
/*  
                      Home integration slider        
*/
/*====================================================================*/
/*====================================================================*/ 
const home_main_container = document.querySelector(".box_home");
 
function resetDots() {
  document.querySelectorAll(".dots-container span").forEach((dot) => {
    dot.classList.remove("active");
  });
}
 
function updateContent(dotNumber, contentHTML) { 
  resetDots();
 
  document.querySelector(`.dot${dotNumber}`).classList.add("active");
 
  home_main_container.innerHTML = contentHTML;
}
 
document.querySelector(".dot1").addEventListener("click", function () {
  updateContent(
    1,
    ` <div class="header_text hi2 column">  <h1><span class="accent1">What you get with DHANGO</span> <br> Full integration with your processor</h1><p>Processing part is the easy part. It's the rest that requires real work (keeping reading...).</p></div><div class="header_image center"><div class="box1 column">  <div class="comp_icon center"><img src="home21.png" alt="home" class="image_home2"></div><div class="interaction center"><span class="accent">Single interaction with dhango</span></div><div class="inter_logo center"><h1><span class="accent">dhango.</span></h1></div></div></div>`
  );
});

document.querySelector(".dot2").addEventListener("click", function () {
  updateContent(
    2,
    `
    <div class="header_text hi2 column"><h1><span class="accent1">What you get with DHANGO</span> <br> Handelling of reports</h1><p>dhango process the reports form your processor for deposit and debit recognition, Charge_back tracking ACH returns and cost levels.</p></div> <div class="header_image center"><div class="box hey center"><div class="box hi3"><div class="image" style="margin-bottom: 20px;"><img src="home22.png" alt="icons" class="img_homes"></div><div class="box_txt"><p>Brand dashboard transaction quidem eum in libero, similique rem!</p></div>   </div> </div></div>`
  );
});

document.querySelector(".dot3").addEventListener("click", function () {
  updateContent(
    3,
    `<div class="header_text hi2 column"><h1><span class="accent1">What you get with DHANGO</span> <br> Reduce your PCI</h1><p>Processing part is the easy part. It's the rest that requires real work (keeping reading...). Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, reiciendis!</p></div><div class="header_image center"><div class="box hey center"><div class="box hi3"><div class="image" style="margin-bottom: 20px;"><img src="jsHome.png" alt="icons" class="img_homes" ></div><div class="box_txt"><p>Javascript option to prevent similique corporis exercitationem quod rem!</p></div></div></div></div>`
  );
});

document.querySelector(".dot4").addEventListener("click", function () {
  updateContent(
    4,
    `<div class="header_text hi2 column"><h1><span class="accent1">What you get with DHANGO</span> <br> Legacy gateway support</h1><p>dhango process the reports form your processor for deposit and debit recognition, Charge_back tracking ACH returns and cost levels.</p></div><div class="header_image center"><div class="box "><div class="image" style="margin-bottom: 20px;"><img src="home23.png" alt="icons"></div><div class="box_txt"><p>Javascript option to prevent similique corporis exercitationem quod rem!</p></div></div> </div>`
  );
});

document.querySelector(".dot5").addEventListener("click", function () {
  updateContent(
    5,
    `<div class="header_text hi2 column"> <h1><span class="accent1">What you get with DHANGO</span> <br> Centralized token store</h1><p>Processing part is the easy part. It's the rest that requires real work (keeping reading...). Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, incidunt!</p></div> <div class="header_image center"><div class="box hey center"> <div class="box hi3"><div class="image" style="margin-bottom: 20px;"><img src="jsHome.png" alt="icons" class="img_homes"></div><div class="box_txt"> <p>Javascript option to prevent similique corporis exercitationem quod rem!</p></div>    </div> </div> </div>`
  );
});

document.querySelector(".dot6").addEventListener("click", function () {
  updateContent(
    6,
    `<div class="header_text hi2 column"><h1><span class="accent1">What you get with DHANGO</span> <br> White labelled dashboard</h1><p>Processing part is the easy part. It's the rest that requires real work (keeping reading...). Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, incidunt!</p></div><div class="header_image center"><div class="box"> <div class="image" style="margin-bottom: 20px;"><img src="home25.png" alt="icons"></div><div class="box_txt"> <p>Javascript option to prevent similique corporis exercitationem quod rem!</p></div>  </div> </div>`
  );
});
