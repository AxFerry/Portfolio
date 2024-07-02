let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-content");
let sidebar = document.getElementById("sidemenu");

function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link")

    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
        
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}
function openmenu(){
    sidebar.style.display = "flex";
    
}
function closemenu(){
    sidebar.style.display = "none";
}

