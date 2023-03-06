
setTimeout(()=>{
  location.reload()
},5000)


var d = JSON.parse(sessionStorage.getItem("data") || "[]");
var c = JSON.parse(localStorage.getItem("cart") || "[]");

function add(id){
 var t= c.length && c.find((data) => data.id == id)


    var results = d.find((obj) => obj.id == id);
    var item = {
      id : results.id,
      image : results.image,
      title: results.title,
      price : results.price
    };
    if (!t) {
      // console.log(item);
      c.push(item)
    localStorage.setItem("cart",JSON.stringify(c))
      // window.location.href = "login.html";
    } else {
      console.log("Item Already added to cart");
    }   
  console.log("Add to cart clicked");
}
console.log(c);

let url = "https://fakestoreapi.com/products";
// To fetch data from an API using .then
fetch(url, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    sessionStorage.setItem("data", JSON.stringify(data));
  
  })
  .catch((error) => console.log(error));

for (var i = 0; i < d.length; i++) {
  d[i].Colours = ["red", "blue", "black", "green", "white"];
  d[i].sizes = ["s", "l", "m", "xl"];
}

console.log(d);

itemInfo(d);

document.getElementById("s1").addEventListener("input", s1);
document.getElementById("all").addEventListener("click", all);
document.getElementById("mp").addEventListener("click", mp);
document.getElementById("wp").addEventListener("click", wp);
document.getElementById("jp").addEventListener("click", j);
document.getElementById("elp").addEventListener("click", el);


function all() {
  m();

  itemInfo(d);
}

function mp() {
  m();
  // console.log(data);
  var res = d.filter((e) => e.category == "men's clothing");
  itemInfo(res);
}

function wp() {
  m();
  var res = d.filter((e) => e.category == "women's clothing");
  itemInfo(res);
}

function el() {
  m();
  var res = d.filter((e) => e.category == "electronics");
  itemInfo(res);
}

function j() {
  m();
  var res = d.filter((e) => e.category == "jewelery");
  itemInfo(res);
}

function m() {
  var a = document.querySelectorAll(".filter");
  for (var i = 0, length = a.length; i < length; i++) {
    a[i].onclick = function () {
      var b = document.querySelector(".active");
      if (b) b.classList.remove("active");
      this.classList.add("active");
    };
  }
}

function s1() {

  var input, filter, i;
  var result = [];
  input = document.getElementById("searchBar").value;
  filter = input.toUpperCase();
  
  // ul = document.getElementById("myUL");
  // li = ul.getElementsByTagName("li");
  for (i = 0; i < d.length; i++) {
    let name = d[i].title
    if (!name.toUpperCase().includes(filter)) {
      console.log((false));      
  }
  else {
    // data[i].title.style.display="list-item";       
    result.push(d[i])
  }
  itemInfo(result)
  }
}


function itemInfo(data) {
  let pro = document.getElementById("test");
  pro.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var p = `
                      <div class="item">
                        <img src="${data[i].image}" alt="Item" />
                        <div class="info">
                        <div class="price">${data[i].title}</div> <br>
                          <div class="row">
                          
                            <div class="price">$${data[i].price}</div>
                            <div class="sized">${data[i].sizes[0]},${data[i].sizes[1]},${data[i].sizes[2]},${data[i].sizes[3]}</div>
                          </div>
                          <div class="colors">
                            Colors:
                            <div class="row">
                              <div class="circle" style="background-color:  ${data[i].Colours[0]}"></div>
                              <div class="circle" style="background-color: ${data[i].Colours[1]}"></div>
                              <div class="circle" style="background-color: ${data[i].Colours[2]}"></div>
                            </div>
                          </div>
                          <div class="row">Rating: ${data[i].rating.rate}</div>
                        </div>
                        <button id="addBtn" onclick="addToCart(${data[i].id})">Add to Cart</button>
                      `;
    pro.innerHTML += p;
  }
}
