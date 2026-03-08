document.getElementById("tikla").addEventListener("click", function() {
  alert("Butona tıkladın!");
});
const adminDiv = document.getElementById("adminPanel");

function renderAdmin() {
  adminDiv.innerHTML = "";
  products.forEach((p, index) => {
    adminDiv.innerHTML += `
      <div>
        <label>${p.name} Fiyat: </label>
        <input type="number" id="price-${index}" value="${p.price}">
      </div>
    `;
  });
}

function saveChanges() {
  products.forEach((p, index) => {
    p.price = document.getElementById(`price-${index}`).value;
  });
  localStorage.setItem("products", JSON.stringify(products));
  alert("Değişiklikler kaydedildi!");
}

// Sayfa yüklendiğinde localStorage'daki veriyi al
if(localStorage.getItem("products")) {
  products = JSON.parse(localStorage.getItem("products"));
}
renderAdmin();
