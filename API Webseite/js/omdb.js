

function searchOMDb(query) {
    const apiKey = sessionStorage.getItem('omdbApiKey');

    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            var resultContainer = document.getElementById("resultContainer");
            resultContainer.innerHTML = "";

            if (data.Search && data.Search.length > 0) {
                for (let i = 0; i < Math.min(data.Search.length, 8); i++) {
                    const imdbID = data.Search[i].imdbID;
                    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
                        .then(response => response.json())
                        .then(movieData => {
                            var resultImage = document.createElement("img");
                            resultImage.src = movieData.Poster;
                            resultImage.style.width = "12%";
                            resultImage.style.marginRight = "10px"; 
                            resultImage.onclick = function() {
                                toggleMovieDetails(movieData, resultImage);
                            };
                            resultContainer.appendChild(resultImage);
                        })
                        .catch(error => console.error('Fehler beim Abrufen der Daten für Film:', error));
                }
            }

            if (data.Search && data.Search.length > 0) {
                var resultTitle = document.createElement("div");
                resultTitle.innerHTML = data.Search[0].Title;
                resultContainer.appendChild(resultTitle);
            }
        })
        .catch(error => console.error('Fehler beim Abrufen der Daten:', error));
}

function toggleMovieDetails(movieData, clickedImage) {
    if (clickedImage.classList.contains('enlarged')) {
        var detailsContainer = document.getElementById('detailsContainer');
        if (detailsContainer) {
            detailsContainer.parentNode.removeChild(detailsContainer);
        }

        clickedImage.classList.remove('enlarged');
    } else {
        var detailsContainer = document.createElement('div');
        detailsContainer.id = 'detailsContainer';
        detailsContainer.style.position = 'fixed';
        detailsContainer.style.top = '50%';
        detailsContainer.style.left = '50%';
        detailsContainer.style.transform = 'translate(-50%, -50%)';
        detailsContainer.style.backgroundColor = '#353535';
        detailsContainer.style.border = "solid";
        detailsContainer.style.padding = '20px';
        detailsContainer.style.zIndex = '1000';

        var enlargedImage = document.createElement('img');
        enlargedImage.src = movieData.Poster;
        enlargedImage.style.width = '40%';
        enlargedImage.style.display = 'block';
        enlargedImage.style.margin = '0 auto';
        detailsContainer.appendChild(enlargedImage);

        var movieDetails = document.createElement('div');
        movieDetails.innerHTML = `
            <h2>${movieData.Title}</h2>
            <p>Year: ${movieData.Year}</p>
            <p>Rated: ${movieData.Rated}</p>
            <p>Released: ${movieData.Released}</p>
            <p>Plot: ${movieData.Plot}</p>
        `;
        detailsContainer.appendChild(movieDetails);

        var closeButton = document.createElement('button');
        closeButton.innerHTML = 'Close';
        closeButton.onclick = function() {
            detailsContainer.parentNode.removeChild(detailsContainer);

            clickedImage.classList.remove('enlarged');
        };
        detailsContainer.appendChild(closeButton);

        document.body.appendChild(detailsContainer);

        clickedImage.classList.add('enlarged');
    }
}
