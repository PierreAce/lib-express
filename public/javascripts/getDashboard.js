window.onload = () => {
  catImage = document.getElementById('id')
  getArticle()
}
function getArticle () {
  fetch('/article')
    .then(response => {
      return response.json()
    })
    .then(json => {
       // Work with JSON data here
       if () {
        console.log("Il y a un article");
      }
    })
}