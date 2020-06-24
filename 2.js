
// localStorage['info'] = JSON.stringify({'name' : 'Abhishek'})
let fetch_cached = function() { 
var localData = localStorage['info'];
var userData = ''
if (localData) {
userData = JSON.parse(stored);}
else { 
    axios.get('api_url_to_get_data')
    .then(function (response) {
      console.log(response)
       userData = JSON.stringify(response)
       localStorage['info'] = userData  //Storing user data to localstorage
    }) 
    .catch(function (error) {
      console.log(error)
    }); 
  }
   console.log(userData)
} 

fetch_cached()

