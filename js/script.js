let divcreat = document.getElementById("btnsblock");
let buttonclick = document.getElementById("clickblok");
let productsdiv = document.getElementById("products");
let namebtns = document.getElementById("namebtms");
let imgbtns = document.getElementById("imgbtms");
let pricebtns = document.getElementById("pricebtms");
let btnsproducts = document.getElementById("btnsproducts");
let mecdiv = document.getElementById("prods");
let flexbox = document.getElementById("flexbox");
let main = document.getElementById("main");
let inpsSHEARCH = document.getElementById("inpsSHEARCH");
let searchidProds = document.getElementById("searchidProds");

main.style.display = "none";

let products = JSON.parse(localStorage.getItem("products")) || [];
buttonclick.addEventListener("click", function () {
	divcreat.style.display = "flex";
	main.style.display = "none";
});

btnsproducts.addEventListener("click", shovproducts);
function shovproducts() {
	let obj = {
		ID: Math.ceil(Math.random() * 99999999),
		name: namebtns.value,
		img: `img/gbm${imgbtns.value}.jpg`,
		price: pricebtns.value,
	};
	products.push(obj);

	localStorage.setItem("products", JSON.stringify(products));
}

productsdiv.addEventListener("click", creatdivs);
function creatdivs() {
	mecdiv.innerHTML = "";
	products.forEach((product) => {
		let divproduct = document.createElement("div");
		let borderdivIMG = document.createElement("div");
		let divINFO = document.createElement("div");
		let imgdiv = document.createElement("img");
		let charactdiv = document.createElement("div");
		let pricediv = document.createElement("div");
		let btnscreat = document.createElement("button");

		btnscreat.setAttribute("class", "btnsBUY");
		btnscreat.innerHTML = "BUY NOW";
		pricediv.setAttribute("class", "priceDIV");
		pricediv.innerHTML = product.price;
		charactdiv.innerHTML = product.name;
		charactdiv.setAttribute("class", "characteristick");
		imgdiv.setAttribute("src", product.img);
		divINFO.setAttribute("class", "divINFO");
		borderdivIMG.setAttribute("class", "borderdivIMG");
		divproduct.setAttribute("class", "products1");
		divproduct.setAttribute("data-ID", product.ID);

		divINFO.append(charactdiv, pricediv, btnscreat);
		borderdivIMG.append(imgdiv);
		divproduct.append(borderdivIMG, divINFO);

		mecdiv.append(divproduct);

		divcreat.style.display = "none";
		main.style.display = "flex";
	});
}

inpsSHEARCH.addEventListener("keyup", function () {
	searchidProds.innerHTML = "";
	products.forEach((prod) => {
		if (prod.name.includes(this.value)) {
			let searchPRODUCT = document.createElement("div");
			let imgsherc = document.createElement("img");
			let boxbi = document.createElement("div");
			let textGbm = document.createElement("div");
			let flextext = document.createElement("div");
			let boxtext = document.createElement("div");

			searchPRODUCT.setAttribute("class", "searchPRODUCT");
			imgsherc.setAttribute("src", prod.img);
			boxbi.setAttribute("class", "boxbi");
			textGbm.setAttribute("class", prod.name);
			flextext.setAttribute("class", "flextext");
			boxtext.setAttribute("class", "boxtext");

			boxtext.setAttribute("data-ID", prod.ID);

			boxbi.append(textGbm, flextext);
			searchPRODUCT.append(imgsherc, boxbi);
			flextext.append(boxtext);
			textGbm.innerHTML = prod.name;
			boxtext.innerHTML = "go to purchase";
			searchidProds.appendChild(searchPRODUCT);

			boxtext.addEventListener("click", function () {
				console.log(this.getAttribute("data-id"));

				let div = document.querySelector(`.products1[data-id="${this.getAttribute("data-id")}"]`);

				console.log(div.offsetTop);

				window.scroll({
					top: div.offsetTop,
					behavior: "smooth",
				});
			});
		}
	});
});
