function filterItems() {
  // Получаем выбранные значения фильтра
  var filterValue = document.getElementById("filter").value;
  
  // Получаем все элементы, которые требуется отфильтровать
  var items = document.getElementsByClassName("filterable");
  
  // Проходимся по каждому элементу и скрываем или отображаем его в зависимости от выбранного значения фильтра
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    
    if (item.getAttribute("data-category") === filterValue || filterValue === "all") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}