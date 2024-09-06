function d() {
    let b=document.getElementById("r1").value;

    if(b==1)
    {
    var img = document.createElement("img");
    img.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
    var src = document.getElementById("div");
    src.appendChild(img);
   
    } 
          }

    else
    {
        if(b==2)
            {
            var img = document.createElement("img");
            img.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
            var src = document.getElementById("div");
            src.appendChild(img);

            var img1 = document.createElement("img");
            img1.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
            var src = document.getElementById("div");
            src.appendChild(img1);
           
            }
        }
// let btn = document.getElementById("toggle");
//     let bulb = document.getElementById("bulb");
//     btn.addEventListener("click",toggleBulb)

//     function toggleBulb(event){
//         if(btn.textContent.includes("On")){
//         bulb.src = "Bulb_On.jpg";
//         btn.textContent = "Turn Off";
//         }else{
//         bulb.src = "Bulb_Off.jpg";
//         btn.textContent = "Turn On";
//         }
//     }