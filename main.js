const homePage = "homepage.html";
const visualizationsPage = "visualizations.html";
const a3Page = "a3.html";

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function loadPage(page, navMenuItemId) {
    const rootDiv = document.getElementById("root");
    rootDiv.innerHTML = await fetchHtmlAsText(page);
    //setInnerHTML(rootDiv, await fetchHtmlAsText(page));

    navMenuSetCurrent(navMenuItemId);
}

// This function is responsible for the dynamic loading of the pages when user navigates with the side menu
function navMenuSetCurrent(itemId) {
    const newCurrentItem = document.getElementById(itemId);

    const itemHome = document.getElementById('nav-main-item-home');
    const itemVisualizations = document.getElementById('nav-main-item-visualizations');
    const itemA3 = document.getElementById('nav-main-item-a3');

    itemHome.classList.remove('current');
    itemVisualizations.classList.remove('current');
    itemA3.classList.remove('current');

    newCurrentItem.classList.add('current');   

    if (itemHome !== newCurrentItem) itemHome.setAttribute('href', "javascript:loadPage(homePage, 'nav-main-item-home')");
    else itemHome.setAttribute('href', "#");

    if (itemVisualizations !== newCurrentItem) itemVisualizations.setAttribute('href', "javascript:loadPage(visualizationsPage, 'nav-main-item-visualizations')");
    else {
        itemVisualizations.setAttribute('href', "#");
        renderVisualizations();
    }

    if (itemA3 !== newCurrentItem) itemA3.setAttribute('href', "/a3.html");
    else itemA3.setAttribute('href', "#");
}

const pathname = window.location.pathname;

if (pathname == '/a3.html')
{

}
else
loadPage(homePage, "nav-main-item-home");