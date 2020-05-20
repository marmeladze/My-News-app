//let url = "http://gen.lib.rus.ec/json.php";

class siteNews {
    constructor() {
        this.url;
        this.sources = [];
        this.req;
        
        

       
    } 



    render_sites(arr){
        document.querySelector("#sites_shows").innerHTML = arr
            .map(News_Sites =>HTML_data_to_sites(News_Sites) )
            .join(" ");

    }
    
   

    HTML_data_to_sites = (element) => {
        return  `<div class="col-md-3" style="float:left">                        
                    <div class="card-body card mb-2">
                    <h4 class="card-title text-center">${element.name}</h4>
                    <p class="card-text">javascript: ${element.description}</p>
                    <a class="btn btn-dark" href="${element.url}" target="_blank">Visit Site</a>
                    </div>
                </div>`

    }

 request_sites(api, apiKey){  
    this.url = `${api}sources?apiKey=${apiKey}`;
    this.req  = new Request(this.url);
    fetch(this.req)
        .then(response => response.json()) 
        .then(data => {
                this.sources = data.sources.slice(0,12);
                this.render_sites(this.sources.arr)
        })
        .catch(err => console.log(err.message))
    
}
}
