 
//let url_sources = "https://newsapi.org/v2/sources?apiKey=eae47fa67ee0482da57dfc2ea4f8afeb"
                    "https://newsapi.org/v2/sources?apiKey=eae47fa67ee0482da57dfc2ea4f8afeb"

let api = "https://newsapi.org/v2/"
const apiKey = "eae47fa67ee0482da57dfc2ea4f8afeb";
let siteNews = new siteNews();

document.addEventListener('click', function(e){
    if(e.target.id == "newSite" && document.querySelector("#sites_shows").style.display === "none") {
        document.querySelector("#sites_shows").style.display = "block";
        siteNews.request_sites(api,apiKey);

        
} else {
    document.querySelector("#sites_shows").style.display = "none"}
})





 /*   
const apiKey = "eae47fa67ee0482da57dfc2ea4f8afeb"
let api = 'http://newsapi.org/v2/top-headlines?'
let url = `${api}country=us&apiKey=${apiKey}`;
let req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
  */  
