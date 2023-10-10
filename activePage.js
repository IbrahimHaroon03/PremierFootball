//Get URL, filename and nav bar links
const currentUrl = window.location.href; //http://site.com/page.html
const currentFile = currentUrl.substring(currentUrl.lastIndexOf("/") + 1); //page.html
const navLinks = document.querySelectorAll('#navBar ul li a');    

for (let i = 0; i < navLinks.length; i++) { //Loop through each nav bar link
	const linkUrl = navLinks[i].getAttribute("href").replace(".html", "");
	
	if (currentUrl.replace(".html", "").includes(linkUrl)) //If current URL matches nav bar link
		navLinks[i].parentNode.classList.add("active");
}

//Set banner to corresponding image
const currentDir = currentUrl.substring(0, currentUrl.lastIndexOf("/"));
let banner = document.querySelector(".banner");
banner.style.backgroundImage = "url(\"" + currentDir + "/images/" + currentFile.replace(".html", "") + ".jpg\")";