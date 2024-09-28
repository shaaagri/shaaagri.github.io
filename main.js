async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

// this is your `load_home() function`
async function loadHome() {
    const contentDiv = document.getElementById("root");
    contentDiv.innerHTML = await fetchHtmlAsText("homepage.html");
}

loadHome();