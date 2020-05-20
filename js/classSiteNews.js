class siteNews {
    constructor() {
         this.sources = [];
         this.req;
    } 
    render_sites(arr){
        document.querySelector("#sites_shows").innerHTML = arr
            .map(element  =>  `<div class="col-md-3" style="float:left">                        
                                    <div class="card-body card mb-2">
                                    <h4 class="card-title text-center">${element.name}</h4>
                                    <p class="card-text">
                                    <b>Category:</b> <i>${element.category}</i><br>
                                    <b>Language:</b> ${element.language}
                                    </p>
                                    <a class="btn btn-dark" href="${element.url}" target="_blank">Visit Site</a>
                                    </div>
                                </div>` 
                                )
                                .join(" ");
                                
                    
                        }
                    
                     request_sites(api, apiKey){  
                        this.url = `${api}sources?apiKey=${apiKey}`;
                        this.req  = new Request(this.url);
                        fetch(this.req)
                            .then(response => response.json()) 
                            .then(data => {
                                    this.sources = data.sources.slice(0,12);
                                   
                            })
                            .catch(err => console.log(err.message))
                        
                    }
                    }
                    
