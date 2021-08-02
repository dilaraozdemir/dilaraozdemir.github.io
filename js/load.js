

var socialtags = [{
    img: "img/github.svg",
    link: "https://github.com/dilaraozdemir"
}, {
    img: "img/linkedin.svg",
    link: "https://www.linkedin.com/in/dilaraozdemir/"
}, {
    img: "img/medium.svg",
    link: "https://dilaraozdemir.medium.com/"
}, {
    img: "img/twitter.svg",
    link: "https://twitter.com/rhaenessa"
}]

function loadSocialIcons() {
    var socialtext = ""
    for (x in socialtags) {
        var data = `<a class="center" href="` + socialtags[x].link + `"> <img class="center" style="padding: 5px!important;width: 40px;" src="` + socialtags[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}

var resume = [{
    img: "img/download.svg",
    link: "resume/DilaraOzdemirCV.pdf"
}]

function loadResume() {
    var socialtext = ""
    for (x in resume) {
        var data = `<a class="center" href="` + resume[x].link + `"> <img class="center" style="padding-top: 5px; padding: 5px!important;width: 40px;" src="` + resume[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("resume").innerHTML = socialtext;
}
function dayNightToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var check = window.localStorage.getItem('light-mode');
    if (check == "light") {
        window.localStorage.clear();
    } else {
        window.localStorage.setItem('light-mode', 'light');
    }

}

function checkDayNight() {
    var check = window.localStorage.getItem('light-mode');
    var element = document.body;
    if (check == "light") {
        element.classList.add("light-mode");
    } else {
        element.classList.remove("light-mode");
    }
}

checkDayNight()

loadSocialIcons()
loadResume()

