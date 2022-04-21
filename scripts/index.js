
let imagesList = ["https://images6.alphacoders.com/114/thumb-1920-1148857.jpg",
                    "https://preview.redd.it/fe5o4ltz7sm81.jpg?width=640&crop=smart&auto=webp&s=12ee263d474a27e1e1976504702f62e354e8601e",
                    "https://wallpapercave.com/wp/wp6891915.jpg",
                    "https://wallpaperaccess.com/full/1450647.jpg"
                ]
        
let i=0;
function slideShow(){

    let image = document.createElement("img")
    image.setAttribute("class","set-size-image")

    let imagesDiv  = document.querySelector("#slideshow")

    setInterval(function(){

        if(i== imagesList.length){
            i=0
        }
        image.src = imagesList[i]

        imagesDiv.append(image)
        i++
        
    },5000);  
}

slideShow()

function createObj(t,r,i,n){
    this.title = t,
    this.release = r,
    this.image = i,
    this.rating = n
}

movie1 = new createObj("The Shawshank Redemption","1994","https://i5.walmartimages.com/asr/8373098e-dbb5-4f75-9f76-07a7192048a2_1.1e3034a8eb48fff1e331f2f14bcada6a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF","9.2")
movie2 = new createObj("Pulp Fiction","1994","https://images.now-tv.com/shares/vod_images/vi_vodproduct_desc_t/202108/en_us/original_vertical/202108261455655","8.9")
movie3 = new createObj("Parasite","2019","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFr2EDNbNfkeICbxpbKjn9I4Ukgz3o5TjNvg&usqp=CAU","8.5")
movie4 = new createObj("Avengers: Infinity War","2018","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzDzSDgBgdYNvq83-qYpgKdl910riQodwCQ&usqp=CAU","8.5")
movie5 = new createObj("The Wolf of Wall Street","2013","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC131TpuWLvmj8L_mnkZxwiG2zZQgZ7htKuA&usqp=CAU","8.2")
movie6 = new createObj("Kill Bill: Vol. 1","2003","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9E7gvt4DczSXRHHYg3BwumdsI8csVWc91Sw&usqp=CAU","8.2")
movie7 = new createObj("Ford Vs Ferrari","2019","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtfuC_m0WGEfONE7H_Nl-ZCVUU8J6LzJQow&usqp=CAU","8.0")
movie8 = new createObj("The Sixth Sense","1999","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOkGL9mqB3x-NUvw-F3vkmsJH5DClQ_GSsA&usqp=CAU","8.2")
movie9 = new createObj("3 Idiots","2009","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HNTG5fRaF-69XhjmmjWjF6KHa-UfVkGFsw&usqp=CAU","8.3")


let movieList = []

movieList.push(movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9)
 
localStorage.setItem("movies",JSON.stringify(movieList))

movieList = JSON.parse(localStorage.getItem("movies"))

function displayData(movieList){

    document.querySelector("#movies").innerHTML = null

    movieList.map(function(element){

        let div = document.createElement("div")
        div.setAttribute("id","movies-div")
    
        let poster = document.createElement("img")
        poster.src = element.image
        poster.setAttribute("class","set-image")

        let title = document.createElement("h4")
        title.setAttribute("class","set-title")
        title.innerText = element.title

        let release = document.createElement("p")
        release.setAttribute("class","set-release")
        release.innerText = element.release

        let rating = document.createElement("p")
        rating.setAttribute("class","set-rating")
        rating.innerText = "Rating:"+" "+ element.rating

        div.append(poster,title,release,rating)
        document.querySelector("#movies").append(div)

    })
}
displayData(movieList)

function lowToHigh(){

    movieList.sort(function(a,b){
        if (a.rating>b.rating) return 1
        if (a.rating<b.rating) return -1
        return 0;
    })
    displayData(movieList)
}

function highToLow(){
    movieList.sort(function(a,b){
        if (a.rating>b.rating) return -1
        if (a.rating<b.rating) return 1
        return 0;
    })
    displayData(movieList)

}


