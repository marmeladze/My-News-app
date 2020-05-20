let url = "https://newsapi.org/v2/";
const apiKey = "eae47fa67ee0482da57dfc2ea4f8afeb";
let sites = new siteNews();
sites.request_sites(url, apiKey);

document.addEventListener('click', function (e) {
    if (e.target.id == "newSite" && document.querySelector("#sites_shows").style.display === "none") {
        document.querySelector("#sites_shows").style.display = "block";
        sites.render_sites(sites.sources);
    }
    else {
        document.querySelector("#sites_shows").style.display = "none";
    }
});

