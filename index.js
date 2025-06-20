
var typed = new Typed(".typing", {
    strings: ["", "Frontend Developer","Web Designer", "web Developer", "UI/UX Designer", "Freelancer"],
    typeSpeed: 180,
    BackSpeed: 60,
    loop: true
})
var typed = new Typed(".typingg", {
    strings: ["", "Frontend Developer","Web Designer", "web Developer", "UI/UX Designer", "Freelancer"],
    typeSpeed: 60,
    BackSpeed: 60,
    loop: true
})

const nav = document.querySelector('.nav'),
        navlist = nav.querySelectorAll("li"),
        totalNavlist = navlist.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        for(let i=0;i<totalNavlist;i++){
            const a = navlist[i].querySelector('a');
            a.addEventListener("click",function(){
                for(let j=0;j<totalNavlist;j++){
                    if(navlist[j].querySelector('a').classList.contains("active")){
                        allSection[j].classList.add('back-section');
                    }
                    navlist[j].querySelector('a').classList.remove('active');
                }
                this.classList.add('active')
            })
        }
        function showSection(elmt){
            for(let i = 0;i<totalSection;i++){
                allSection[i].classList.remove("active");
            }
            const target = elmt.getAttribute('href').split("#")[1];
            document.querySelector("#" + target).classList.add('active');
        }

        const navTogglerbtn = document.querySelector(".nav-toggler"),
                aside = document.querySelector(".aside");
                navTogglerbtn.addEventListener("click",function(){
                    asideSectionTogglerBtn();
                })
                function asideSectionTogglerBtn(){
                    aside.classList.toggle("open");
                }

