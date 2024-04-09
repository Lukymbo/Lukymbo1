 /*           document.getElementById("Napis").focus();

            var prvky = document.getElementsByClassName("BarvaPodDIV");
                console.log(prvky);
            var poleProBarvy = [];

            for(var iii=0; iii<4; iii++){
              //  prvky[iii].addEventListener("click", zcervenej);
                poleProBarvy.push(prvky[iii]);
            }
            /*function zcervenej(){
                var poradi = prvky.indexOf
            }*/

          /*  poleProBarvy.forEach(function(prvek){
                prvek.addEventListener("click", function(){
                    var poradi = poleProBarvy.indexOf(prvek);
                    var ktery;
                    switch(poradi){
                        case 0: ktery = "F";
                        case 1: ktery = "Z";
                        case 2: ktery = "M";
                        case 3: ktery = "N";
                        default: ktery = "N";
                    }
                    localStorage.setItem("barva", ktery);
                    rozhodni();   
                })
            })*/
     /*       function zmenbarvu(poradii){
                var kteryy;
                if(poradii=='0'){kteryy = "F";}
                if(poradii==1){kteryy = "Z";}
                if(poradii==2){kteryy = "M";}
                if(poradii==3){kteryy = "N";}
                localStorage.setItem("barva", kteryy);
                rozhodni(); 
                console.log(kteryy);
            }

            var proCSS = document.documentElement;

            var lokalnii = localStorage.getItem("barva");

            if(!lokalnii){
                localStorage.setItem("barva", "N");
                document.getElementsByClassName("BarvaPodDIV")[3].style.borderColor = "darkred";
                rozhodni();
            }console.log(lokalnii);

            rozhodni();

            function rozhodni(){

                var lokalni = localStorage.getItem("barva");

                if(lokalni=="F"){FFF(); vyklikni(0);
                    document.getElementsByClassName("BarvaPodDIV")[0].style.borderColor = "darkred"; }
                if(lokalni=="M"){MMM(); vyklikni(2);
                    document.getElementsByClassName("BarvaPodDIV")[2].style.borderColor = "darkred"; }
                if(lokalni=="Z"){ZZZ(); vyklikni(1);
                    document.getElementsByClassName("BarvaPodDIV")[1].style.borderColor = "darkred"; }
                if(lokalni=="N"){ vyklikni(3);
                var jednadva = nahodny(1,100);
                    if(jednadva > 60){ZZZ();}
                    if(jednadva > 30 && jednadva <= 60){MMM();}
                    if(jednadva <= 30){FFF();}
                    document.getElementsByClassName("BarvaPodDIV")[3].style.borderColor = "darkred";
                }
            }
            function FFF(){
                proCSS.style.setProperty("--hlavniBarva","rgb(62, 0, 49)");
                proCSS.style.setProperty("--tmavaBarva","rgb(34, 1, 27)");
                proCSS.style.setProperty("--svetlaBarva","rgb(118, 5, 94)");
                proCSS.style.setProperty("--napisBarva","rgb(219, 211, 211)");
                proCSS.style.setProperty("--czBarva","rgb(172, 57, 130)");
            }
            function MMM(){
                proCSS.style.setProperty("--hlavniBarva","#002ED7");
                proCSS.style.setProperty("--tmavaBarva","#061F79");
                proCSS.style.setProperty("--svetlaBarva","#0761FF");
                proCSS.style.setProperty("--napisBarva","#1DDBD7");
                proCSS.style.setProperty("--czBarva","#047C88");
            }
            function ZZZ(){
                proCSS.style.setProperty("--hlavniBarva","rgb(204, 245, 1)");
                proCSS.style.setProperty("--tmavaBarva","#A0A608");
                proCSS.style.setProperty("--svetlaBarva","#CFD700");
                proCSS.style.setProperty("--napisBarva","black");
                proCSS.style.setProperty("--czBarva","rgb(201, 0, 0)");
            }
            function vyklikni(cislo){
                for(var iii=0; iii < 4; iii++){
                    if(iii!=cislo){
                        document.getElementsByClassName("BarvaPodDIV")[iii].style.borderColor = "var(--seda)";
                        console.log(iii);
                    }
                    
                }
            }

            

            function odkazuj(cislo){ 

                switch(cislo){
                case 1: window.open("https://www.youtube.com/c/Lukymbo", '_self'); break;
                case 2: window.open("https://www.instagram.com/lukymbo/", '_self'); break;
                case 3: window.open("https://steamcommunity.com/id/Lukymbo/", '_self'); break;
                case 4: window.open("https://account.xbox.com/cs-cz/Profile?xr=mebarnav&rtc=1&csrf=Rxi3ru8TG7SXY3PoSjr9_Gcz9l-bN5w9CMSXTdmI-iPyDw9D5Ds_i0E2cZ4_1j4lYAvRUwVfOjLJdIW6IulNiGvRMeU1&wa=wsignin1.0", '_self'); break;
                case 5: window.open("https://www.twitch.tv/lukymbo/", '_self'); break;
                case 6: window.open("https://www.instagram.com/lukymbo/", '_self'); break;
            }}


            var pole = []
            var pomocnyPole = []
            for(var yyy=1; yyy<=5; yyy++){
                var potrebneHTML = document.getElementsByClassName("Kulaty")[yyy-1];
                pole.push(potrebneHTML);
                pomocnyPole.push(yyy);
            }

            console.log(pole);
            
            pole.forEach(function(prvek){
                prvek.addEventListener("mouseenter", function(){
                    var poradi = pole.indexOf(prvek);
                    var prvekANMC = document.getElementsByClassName("KulatyANMC")[poradi];
                    //document.getElementsByClassName("KulatyANMC")[poradi].style.animation = "toc 2s ease-in-out";
                    if(prvekANMC.classList[1] === "KulatyANMCspoustec"){
                        prvekANMC.classList.remove("KulatyANMCspoustec");
                        prvekANMC.classList.add("KulatyANMCspoustec2");
                    }
                    else{
                        prvekANMC.classList.remove("KulatyANMCspoustec2");
                        prvekANMC.classList.add("KulatyANMCspoustec");
                    }
                })
            })

            function prinajeti(){
                var prvek2 = document.getElementById("OdkazovyNadDIV");

                var delkaUPrvku2 = prvek2.classList.length - 1;
                console.log("1 + " + delkaUPrvku2);

                if(prvek2.classList[delkaUPrvku2] != "HlavniAnimace" || !delkaUPrvku2){
                    console.log("if"); 
                    prvek2.classList.add("HlavniAnimace");
                }
               /* if(prvek2.classList[delkaUPrvku2] == "HlavniAnimace"){
                    console.log("else");
                    prvek2.classList.remove("HlavniAnimace");
                }*/
   /*         }

            window.addEventListener("scroll", prinajeti);

            //prinajeti();

            var navigovaciPrvek = document.getElementById("NavigacniTlac");
            var nagicniDiv = document.getElementById("NavigacniDIV");

            nagicniDiv.style.display = "none";

            navigovaciPrvek.addEventListener("click", navigace);

            function navigace(){

                var zobrazen = nagicniDiv.style.display;

                if(zobrazen == "flex"){
                    nagicniDiv.style.display = "none";
                }
                else{
                    nagicniDiv.style.display = "flex";
                    document.querySelector("html").scrollTop = "0";
                }
            }
   

            function nahodny(minimalni, maximalni){

                var Prumer = Math.round (Math.random() * (maximalni - minimalni) + minimalni) + (minimalni * 1);
                return Prumer;

            }

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////

          /*  var prvky = document.getElementsByClassName("BarvaPodDIV");
                console.log(prvky);
            var poleProBarvy = [];

            for(var iii=0; iii<4; iii++){
              //  prvky[iii].addEventListener("click", zcervenej);
                poleProBarvy.push(prvky[iii]);
            }*/
            /*function zcervenej(){
                var poradi = prvky.indexOf
            }*/

          /*  poleProBarvy.forEach(function(prvek){
                prvek.addEventListener("click", function(){
                    var poradi = poleProBarvy.indexOf(prvek);
                    var ktery;
                    switch(poradi){
                        case 0: ktery = "F";
                        case 1: ktery = "Z";
                        case 2: ktery = "M";
                        case 3: ktery = "N";
                        default: ktery = "N";
                    }
                    localStorage.setItem("barva", ktery);
                    rozhodni();   
                })
            })*/
            function zmenbarvu(poradii){
                var kteryy;
                if(poradii=='0'){kteryy = "F";}
                if(poradii==1){kteryy = "Z";}
                if(poradii==2){kteryy = "M";}
                if(poradii==3){kteryy = "N";}
                localStorage.setItem("barva", kteryy);
                rozhodni(); 
                console.log(kteryy);
            }

            var proCSS = document.documentElement;

            var lokalnii = localStorage.getItem("barva");

            if(!lokalnii){
                localStorage.setItem("barva", "N");
                document.getElementsByClassName("BarvaPodDIV")[3].style.borderColor = "darkred";
                rozhodni();
            }console.log(lokalnii);

            rozhodni();

            function rozhodni(){

                var lokalni = localStorage.getItem("barva");

                if(lokalni=="F"){FFF(); }
                if(lokalni=="M"){MMM(); }
                if(lokalni=="Z"){ZZZ(); }
                if(lokalni=="N"){ 
                var jednadva = nahodny(1,100);
                    if(jednadva > 60){ZZZ();}
                    if(jednadva > 30 && jednadva <= 60){MMM();}
                    if(jednadva <= 30){FFF();}
                }
            }
            function FFF(){
                proCSS.style.setProperty("--hlavniBarva","rgb(62, 0, 49)");
                proCSS.style.setProperty("--tmavaBarva","rgb(34, 1, 27)");
                proCSS.style.setProperty("--svetlaBarva","rgb(118, 5, 94)");
                proCSS.style.setProperty("--napisBarva","rgb(219, 211, 211)");
                proCSS.style.setProperty("--czBarva","rgb(172, 57, 130)");
            }
            function MMM(){
                proCSS.style.setProperty("--hlavniBarva","#002ED7");
                proCSS.style.setProperty("--tmavaBarva","#061F79");
                proCSS.style.setProperty("--svetlaBarva","#0761FF");
                proCSS.style.setProperty("--napisBarva","#1DDBD7");
                proCSS.style.setProperty("--czBarva","#047C88");
            }
            function ZZZ(){
                proCSS.style.setProperty("--hlavniBarva","rgb(204, 245, 1)");
                proCSS.style.setProperty("--tmavaBarva","#A0A608");
                proCSS.style.setProperty("--svetlaBarva","#CFD700");
                proCSS.style.setProperty("--napisBarva","black");
                proCSS.style.setProperty("--czBarva","rgb(201, 0, 0)");
            }
            function vyklikni(cislo){
                for(var iii=0; iii < 4; iii++){
                    if(iii!=cislo){
                        document.getElementsByClassName("BarvaPodDIV")[iii].style.borderColor = "var(--seda)";
                        console.log(iii);
                    }
                    
                }
            }

            

            function odkazuj(cislo){ 

                switch(cislo){
                case 1: window.open("https://www.youtube.com/c/Lukymbo", '_self'); break;
                case 2: window.open("https://www.instagram.com/lukymbo/", '_self'); break;
                case 3: window.open("https://steamcommunity.com/id/Lukymbo/", '_self'); break;
                case 4: window.open("https://account.xbox.com/cs-cz/Profile?xr=mebarnav&rtc=1&csrf=Rxi3ru8TG7SXY3PoSjr9_Gcz9l-bN5w9CMSXTdmI-iPyDw9D5Ds_i0E2cZ4_1j4lYAvRUwVfOjLJdIW6IulNiGvRMeU1&wa=wsignin1.0", '_self'); break;
                case 5: window.open("https://www.twitch.tv/lukymbo/", '_self'); break;
                case 6: window.open("https://www.instagram.com/lukymbo/", '_self'); break;
            }}


            var pole = []
            var pomocnyPole = []
            for(var yyy=1; yyy<=5; yyy++){
                var potrebneHTML = document.getElementsByClassName("Kulaty")[yyy-1];
                pole.push(potrebneHTML);
                pomocnyPole.push(yyy);
            }

            console.log(pole);
            
            var navigovaciPrvek = document.getElementById("NavigacniTlac");
            var nagicniDiv = document.getElementById("NavigacniDIV");

            nagicniDiv.style.display = "none";

            navigovaciPrvek.addEventListener("click", navigace);

            function navigace(){

                var zobrazen = nagicniDiv.style.display;

                if(zobrazen == "flex"){
                    nagicniDiv.style.display = "none";
                }
                else{
                    nagicniDiv.style.display = "flex";
                    document.querySelector("html").scrollTop = "0";
                }
            }

            
   

            function nahodny(minimalni, maximalni){

                var Prumer = Math.round (Math.random() * (maximalni - minimalni) + minimalni) + (minimalni * 1);
                return Prumer;

            }