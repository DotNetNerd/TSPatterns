//var foldl = f => function g(i, l) { return l.length ? g(f(i, l.shift()), l) : i; };

var write = (text) => {
    if (typeof text == "object") {
        text = JSON.stringify(text);
    }
    document.getElementById("content").innerHTML += text + "<br/>";
};