
const apiKey = "e3ffe89e9d08dd7eed2f6ce6665bc6054396fe35b4753294795e7bc35e61057f";
const projectHashId = '4bk5vbelkt';
const apiUrl = `https://api.wistia.com/v1/medias.json?project_id=4bk5vbelkt&page=1`;
const SearchApi = "";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


const getMedias = async apiUrl => {
    const response = await fetch(apiUrl,{
      headers: {
          'Authorization': "Bearer e3ffe89e9d08dd7eed2f6ce6665bc6054396fe35b4753294795e7bc35e61057f"
      }
    })
    const responseData= await response.json();
    console.log(responseData)
    

    //displayMedias(responseData)
};

getMedias(apiUrl);


/* const displayMedias = (videos) =>{
        // clear main
        main.innerHTML = "";

        videos.forEach((video) => {
            const videoPlay = embedCode


            const { poster_path, title, vote_average, overview } = movie;



}
/*
async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);
}

/function showMovies(movies) {
    // clear main
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

        main.appendChild(movieEl);
    });
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
    }
}); */