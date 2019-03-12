//get a poster from imdb api
function getPoster(searchTitle){
                        fetch("http://www.omdbapi.com/?t="+searchTitle+"&apikey=3f7b97cf")
                            .then(response => response.json())

 
                            .then(json =>{
                                //return moviePoster;
                                let str = json.Poster;
                                
                                //document.querySelector('.product-poster').src = str;
                                console.log(str);
                                return str;
                             //console.log(posterUrl);
                              //return posterUrl;
                            })                 
                          }

fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            // .then(json =>console.log(JSON.stringify(json))) 
            .then(json =>{
                
                // var container=document.getElementById('product-grid');
                for (var item in json){
                    var movie = json[item];
                    // console.log(movie.title)
                    //create new div
                    var container = document.createElement("div");
                    container.className += " product-grid";
                    // container.id = "product-grid";
                    document.getElementById('product-container-grid').appendChild(container);
                    var moviePoster = document.createElement("img");
                    moviePoster.className += "product-poster";
                    
                    var a = movie.title;
                    console.log(a);
                    var b = getPoster(a);
                    console.log(b);
                    
                    moviePoster.src = b;
                    //moviePoster.src = "https://m.media-amazon.com/images/M/MV5BYmY0NWJiMmUtMzUyZi00YTAzLWE3OWEtYjc4MmM0ZWUyOWFmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg";
                    
                    var movieTitle = document.createElement("p");
                    movieTitle.className += "product-title";
                    var movieDesc = document.createElement("p");
                    movieDesc.className += "product-desc";
                    var movieDate = document.createElement("p");
                    movieDate.className += "product-date";
                    container.appendChild(moviePoster);
                    container.appendChild(movieTitle);
                    container.appendChild(movieDesc);
                    container.appendChild(movieDate);
                    document.getElementById('product-container-grid').appendChild(container);
                    //add text into it
                    var newTitle = document.createTextNode(movie.title); 
                    movieTitle.appendChild(newTitle);
                    //add poster
                    

                    var newDesc = document.createTextNode(movie.description);
                    movieDesc.appendChild(newDesc);
                    var newDate = document.createTextNode(movie.release_date);
                    movieDate.appendChild(newDate);
                    
                    //put new div below container
                    // container.appendChild(movieTitle);
                    // container.appendChild(movieDesc);
                    // container.appendChild(movieDate);

                }          

        })