document.body.innerHTML = '<div id="app"></div>'

let app = document.getElementById("app");
let title_node = document.createElement("h1");
app.appendChild(title_node);
title_node.innerHTML = "Yohoho";