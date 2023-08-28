formEl.addEventListener('input', formHandler)
document.getElementById("filterButton").addEventListener("click", function() {
  var category = document.getElementById("category").value;
  var price = document.getElementById("price").value;
  var items = document.getElementsByClassName("item");
  var sex = document.getElementById("sex").value;
  
  for (var i = 0; i < items.length; i++) {
    if ((category === "" || items[i].getAttribute("data-category") === category) && (price === "" || parseInt(items[i].getAttribute("data-price")) <= parseInt(price)) && (sex === "" || items[i].getAttribute("data-sex") === sex)) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }})
