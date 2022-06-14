

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
    link: "https://twitter.com/ozdemirdilara7"
}]

function loadSocialIcons() {
    var socialtext = ""
    for (x in socialtags) {
        var data = `<a class="center" href="` + socialtags[x].link + `"> <img class="center" style="padding: 5px!important;width: 40px;" src="` + socialtags[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}
loadSocialIcons()
var resume = [{
    img: "img/download.svg",
    link: "DilaraOzdemirCV.pdf"
}]

function loadResume() {
    var socialtext = ""
    for (x in resume) {
        var data = `<a class="center" href="` + resume[x].link + `"> <img class="center" style="padding-top: 5px; padding: 5px!important;width: 40px;" src="` + resume[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("resume").innerHTML = socialtext;
}


loadResume()
