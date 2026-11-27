try{document.documentElement.dataset.theme=localStorage.getItem("nel-theme")||"dark";
if(localStorage.getItem("nel-lang")==="en"){document.documentElement.lang="en";document.documentElement.dir="ltr";document.documentElement.dataset.lang="en"}}catch(e){document.documentElement.dataset.theme="dark"}
