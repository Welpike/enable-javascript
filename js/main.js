function checkEnabled(){
    let new_p = document.createElement("p"),
        new_a = document.createElement("a"),
        new_i = document.createElement("i");
    new_p.classList.add("js_enabled");
    new_p.classList.add("border");
    new_p.classList.add("border-success");
    new_p.classList.add("rounded");
    new_p.classList.add("bg-success");
    new_p.classList.add("text-white");
    new_p.classList.add("py-4");
    new_p.classList.add("text-center");
    new_p.textContent = "JavaScript is enabled on your browser. :) ";
    new_a.setAttribute("href", "javascript:goBack();");
    new_a.setAttribute("title", "Back");
    new_a.textContent = "You can return to the website...";
    new_a.classList.add("text-white");
    
    new_a.appendChild(new_i);
    new_p.appendChild(new_a);
    document.querySelector("#result").appendChild(new_p);
}

function goBack(){
    const url = new URL(window.location);
    let backParam = url.searchParams.get("back");
    if(backParam=="closetab"){
        window.close();
    }else if(backParam=="historyback"||backParam==null){
        history.back();
    }
}


checkEnabled();
