function handleScroll() {
var documentHeight = document.documentElement.scrollHeight;
var viewportHeight = window.innerHeight;
var scrollDistance = window.scrollY || document.documentElement.scrollTop;
var totalScrollableHeight = documentHeight - viewportHeight;
var scrollPercentage = (scrollDistance / totalScrollableHeight) * 100;
scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 100);
var percentageElement = document.getElementById('scrollPercentage');
percentageElement.textContent = Math.round(scrollPercentage) + "%";
}
