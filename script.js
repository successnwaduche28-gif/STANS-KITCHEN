const menuData = {"Soups & Stews": [["Efo Riro", "Deliciously prepared at Stan's Kitchen"], ["Oha Soup", "Deliciously prepared at Stan's Kitchen"], ["Bitterleaf Soup", "Deliciously prepared at Stan's Kitchen"], ["Nsala Soup", "Deliciously prepared at Stan's Kitchen"], ["Okra Soup", "Deliciously prepared at Stan's Kitchen"], ["Seafood Okra", "Deliciously prepared at Stan's Kitchen"], ["Egusi", "Deliciously prepared at Stan's Kitchen"], ["Ogbono", "Deliciously prepared at Stan's Kitchen"], ["Buka Stew", "Deliciously prepared at Stan's Kitchen"]], "Rice Dishes": [["Smoky Jollof Rice", "Deliciously prepared at Stan's Kitchen"], ["Golden Fried Rice", "Deliciously prepared at Stan's Kitchen"], ["Village Native Rice", "Deliciously prepared at Stan's Kitchen"], ["Asun Jollof", "Deliciously prepared at Stan's Kitchen"], ["Asun Fried Rice", "Deliciously prepared at Stan's Kitchen"], ["Coconut Rice", "Deliciously prepared at Stan's Kitchen"]], "Native Food": [["Ukwa with Fish/Chicken/Turkey", "Deliciously prepared at Stan's Kitchen"], ["Akidi with Fish/Chicken/Turkey", "Deliciously prepared at Stan's Kitchen"], ["Fiofio with Fish/Chicken/Turkey", "Deliciously prepared at Stan's Kitchen"], ["Nsukka Okpa (10pcs)", "Deliciously prepared at Stan's Kitchen"], ["Akamu + Akara/Moi-moi", "Deliciously prepared at Stan's Kitchen"]], "Pepper Soup": [["Goat Meat Pepper Soup", "Deliciously prepared at Stan's Kitchen"], ["Catfish Pepper Soup", "Deliciously prepared at Stan's Kitchen"], ["Turkey Pepper Soup", "Deliciously prepared at Stan's Kitchen"], ["Local Chicken Pepper Soup", "Deliciously prepared at Stan's Kitchen"]], "Protein": [["Spicy Turkey", "Deliciously prepared at Stan's Kitchen"], ["Spicy Beef", "Deliciously prepared at Stan's Kitchen"], ["Spicy Goat Meat", "Deliciously prepared at Stan's Kitchen"], ["Spicy Fish", "Deliciously prepared at Stan's Kitchen"], ["Spicy Chicken", "Deliciously prepared at Stan's Kitchen"]], "Swallows": [["Amala", "Deliciously prepared at Stan's Kitchen"], ["Eba", "Deliciously prepared at Stan's Kitchen"], ["Semo", "Deliciously prepared at Stan's Kitchen"], ["Poundo", "Deliciously prepared at Stan's Kitchen"], ["Fufu", "Deliciously prepared at Stan's Kitchen"]], "Side Dishes": [["Asun", "Deliciously prepared at Stan's Kitchen"], ["Moi-moi", "Deliciously prepared at Stan's Kitchen"], ["Gizdodo", "Deliciously prepared at Stan's Kitchen"], ["Fried Plantain", "Deliciously prepared at Stan's Kitchen"], ["Grilled Catfish", "Deliciously prepared at Stan's Kitchen"], ["Akara", "Deliciously prepared at Stan's Kitchen"], ["Salad", "Deliciously prepared at Stan's Kitchen"]]};
const imageMap = {"Efo Riro": "images/efo-riro.jpg", "Oha Soup": "images/oha-soup.jpg", "Bitterleaf Soup": "images/bitterleaf-soup.jpg", "Nsala Soup": "images/nsala-soup.jpg", "Okra Soup": "images/okra-soup.jpg", "Seafood Okra": "images/seafood-okra.jpg", "Egusi": "images/egusi.jpg", "Ogbono": "images/ogbono.jpg", "Buka Stew": "images/buka-stew.jpg", "Smoky Jollof Rice": "images/smoky-jollof-rice.jpg", "Golden Fried Rice": "images/golden-fried-rice.jpg", "Village Native Rice": "images/village-native-rice.jpg", "Asun Jollof": "images/asun-jollof.jpg", "Asun Fried Rice": "images/asun-fried-rice.jpg", "Coconut Rice": "images/coconut-rice.jpg", "Ukwa with Fish/Chicken/Turkey": "images/ukwa.jpg", "Akidi with Fish/Chicken/Turkey": "images/akidi.jpg", "Fiofio with Fish/Chicken/Turkey": "images/fiofio.jpg", "Nsukka Okpa (10pcs)": "images/nsukka-okpa.jpg", "Akamu + Akara/Moi-moi": "images/akamu-akara.jpg", "Goat Meat Pepper Soup": "images/goat-meat-pepper-soup.jpg", "Catfish Pepper Soup": "images/catfish-pepper-soup.jpg", "Turkey Pepper Soup": "images/turkey-pepper-soup.jpg", "Local Chicken Pepper Soup": "images/local-chicken-pepper-soup.jpg", "Spicy Turkey": "images/spicy-turkey.jpg", "Spicy Beef": "images/spicy-beef.jpg", "Spicy Goat Meat": "images/spicy-goat-meat.jpg", "Spicy Fish": "images/spicy-fish.jpg", "Spicy Chicken": "images/spicy-chicken.jpg", "Amala": "images/amala.jpg", "Eba": "images/eba.jpg", "Semo": "images/semo.jpg", "Poundo": "images/poundo.jpg", "Fufu": "images/fufu.jpg", "Asun": "images/asun.jpg", "Moi-moi": "images/moi-moi.jpg", "Gizdodo": "images/gizdodo.jpg", "Fried Plantain": "images/fried-plantain.jpg", "Grilled Catfish": "images/grilled-catfish.jpg", "Akara": "images/akara.jpg", "Salad": "images/salad.jpg"};

let cart=JSON.parse(localStorage.getItem("stanCart")||"[]");
function toggleMenu(){document.getElementById("nav")?.classList.toggle("show");}
function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,"");}
function renderMenu(){
 const el=document.getElementById("menu"); if(!el)return;
 for(const [cat,arr] of Object.entries(menuData)){
  el.innerHTML+=`<section class="food-section" id="${slug(cat)}"><div class="heading"><small>${cat.toUpperCase()}</small><h2>${cat}</h2></div><div class="food-grid">${
   arr.map(x=>`<article class="food-card"><img src="${imageMap[x[0]]}" alt="${x[0]}"><div><h3>${x[0]}</h3><p>${x[1]}</p><a class="btn small" href="order.html?meal=${encodeURIComponent(x[0])}">Order This</a></div></article>`).join("")
  }</div></section>`;
 }
}
function renderOrderMenu(){
 const el=document.getElementById("orderMenu"); if(!el)return;
 let html="";
 for(const [cat,arr] of Object.entries(menuData)){
  html+=`<h3 class="order-cat">${cat}</h3>`;
  html+=arr.map(x=>`<div class="order-row"><div class="order-food"><img src="${imageMap[x[0]]}" alt=""><span>${x[0]}</span></div><div><button onclick='changeQty(${JSON.stringify(x[0])},-1)'>−</button><b id="q-${slug(x[0])}">0</b><button onclick='changeQty(${JSON.stringify(x[0])},1)'>+</button></div></div>`).join("");
 }
 el.innerHTML=html;
 const meal=new URLSearchParams(location.search).get("meal"); if(meal)changeQty(meal,1);
 renderCart();
}
function changeQty(meal,delta){
 const item=cart.find(x=>x.meal===meal);
 if(item)item.qty+=delta; else if(delta>0)cart.push({meal,qty:delta});
 cart=cart.filter(x=>x.qty>0); localStorage.setItem("stanCart",JSON.stringify(cart));
 const q=document.getElementById("q-"+slug(meal));if(q)q.textContent=cart.find(x=>x.meal===meal)?.qty||0;renderCart();
}
function renderCart(){
 const el=document.getElementById("cart");if(!el)return;
 el.innerHTML=cart.length?cart.map(x=>`<div class="cart-row"><span>${x.meal} × ${x.qty}</span><button onclick='changeQty(${JSON.stringify(x.meal)},-1)'>Remove</button></div>`).join(""):"<p>Your cart is empty.</p>";
}
function sendOrder(){
 if(!cart.length){alert("Please add at least one meal.");return}
 const name=document.getElementById("customerName").value.trim(),phone=document.getElementById("customerPhone").value.trim();
 if(!name||!phone){alert("Please enter your name and phone number.");return}
 let text=`Hello Stan's Kitchen, I would like to place an order.\n\nName: ${name}\nPhone: ${phone}\n\nOrder:\n`;
 cart.forEach(x=>text+=`• ${x.meal} × ${x.qty}\n`);
 text+="\nPlease confirm the total price and order details.";
 location.href="https://wa.me/2349029246887?text="+encodeURIComponent(text);
}
renderMenu();renderOrderMenu();
