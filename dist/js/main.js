console.log("Website loaded!")

async function load(selector, file) {
    const html = await fetch(file).then(r => r.text());
    document.querySelector(selector).innerHTML = html;
}

load("#site-header", "partials/header.html")
load("#site-footer", "partials/footer.html")

