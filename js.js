function handleSearchImageClick() {
    var searchBox = document.querySelector('.search-box');
    var navbar = document.querySelector('.ul');
    var xmark = document.querySelector('.xmark');

  
    searchBox.style.display = 'block';
    xmark.style.display = 'block';
    searchImage.style.display = 'none';


    searchImage.style.cursor = 'pointer';
    navbar.style.display = 'none';
  }
  
  var searchImage = document.querySelector('.search');
  
  searchImage.addEventListener('click', handleSearchImageClick);







function otherType(){
    var searchBox = document.querySelector('.search-box');
    var navbar = document.querySelector('.ul');
    
    xmark.style.display = 'none';
    searchBox.style.display = 'none';
    navbar.style.display = 'flex';
    navbar.style.transition = 'flex';

    searchImage.style.display = 'block';
    xmark.style.cursor = 'pointer';
}
 
var xmark = document.querySelector('.xmark');
xmark.addEventListener('click', otherType);




// function handleMenuClick() {
//     var ul = document.querySelector('.ul');
//     var searchBox = document.querySelector('.search-box');
//     var xmark = document.querySelector('.xmark');
  
//     ul.style.left = '1000px';
//     searchBox.style.display = 'block';
//     xmark.style.display = 'none';
//   }
  
//   var menuIcon = document.querySelector('.menu');
//   menuIcon.addEventListener('click', handleMenuClick);

















var cities = [
    "Tashkent",
    "Almaty",
    "Bishkek",
    "Dushanbe",
    "Nur-Sultan",
    "Samarkand",
    "Astana",
    // Add more cities here...
  ];


function filterSearchResults() {
    var searchBox = document.querySelector('.search-box');
    var searchQuery = searchBox.value.toLowerCase();
    var cityList = document.querySelector('.city-list');
  
    // Clear previous search results
    cityList.innerHTML = '';
  
    // Filter and display matching cities
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i].toLowerCase();
      if (city.includes(searchQuery)) {
        var li = document.createElement('li');
        li.textContent = cities[i];
        cityList.appendChild(li);
      }
    }
  }
  
  var searchBox = document.querySelector('.search-box');
  searchBox.addEventListener('input', filterSearchResults);
