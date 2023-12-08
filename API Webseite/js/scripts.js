
function startScreen(apiKey) {
    sessionStorage.setItem('omdbApiKey', apiKey);

    var start = document.getElementById("container");
    start.style.display = "none";

    var topContainer = document.createElement("div");
    topContainer.id = "topContainer";
    topContainer.style.marginLeft = "-0.5%";
    topContainer.style.marginTop = "-0.5%";
    topContainer.style.width = "100%";
    topContainer.style.height = "14%";
    topContainer.style.position = "fixed";
    topContainer.style.backgroundColor = "black";
    document.body.appendChild(topContainer);

    var resultContainer = document.createElement("div");
    resultContainer.id = "resultContainer";
    resultContainer.style.width = "110%";
    resultContainer.style.height = "100vh";
    resultContainer.style.marginTop = "5%";
    resultContainer.style.marginLeft = "-0.5%";
    resultContainer.style.position = "fixed";
    resultContainer.style.backgroundColor = "#353535";
    document.body.appendChild(resultContainer);

    var img = document.createElement("img");
    img.src = "image/Logo.png";
    img.style.width = "20%";
    img.style.height = "50%";
    img.style.marginTop = "1%";
    img.style.marginLeft = "20%";
    topContainer.appendChild(img);

    var searchArea = document.createElement("div");
    searchArea.id = "searchArea";
    searchArea.style.width = "40%";
    searchArea.style.marginTop = "-3.1%";
    searchArea.style.marginLeft = "41.5%";
    topContainer.appendChild(searchArea);

    var searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search...";
    searchInput.style.width = "70%";
    searchInput.style.padding = "8px";
    searchInput.style.marginRight = "5px";
    searchArea.appendChild(searchInput);

    var searchButton = document.createElement("button");
    searchButton.innerHTML = "Search";
    searchButton.style.width = "10%";
    searchButton.style.padding = "8px";
    searchButton.onclick = function () {
        searchOMDb(searchInput.value);
    };
    searchArea.appendChild(searchButton);
}
