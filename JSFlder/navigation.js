const pages = [
    { url: "home.html", name: "Home", id: "home" },
    { url: "Design.html", name: "Blog", id: "Design" },
    { url: "Theory.html", name: "Design", id: "Theory" },
    { url: "IA.html", name: "Data ", id: "internet art" },
   
];


let navigationContainer = document.getElementById("nav-list");

pages.forEach(element => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.innerText = element.name;

    link.onclick= function() {
        link.href = element.url;
    }

    link.id = element.id;
   
    if (element.id == "data-vis") {
        const button = document.createElement("div");
        button.id = "data-vis-button";
        button.append(link);
        listItem.append(button);
    }else{
        listItem.append(link);
    }
    
    if (document.title == element.name) {
        link.classList.add("active");

        const line = document.createElement("div");
        line.classList.add("underline");

        listItem.append(line);
    }

    navigationContainer.append(listItem); 
    
    
});