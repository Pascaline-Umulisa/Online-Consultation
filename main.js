let allDoctors = document.querySelectorAll(".cons")
allDoctors.forEach(category=>
  category.addEventListener("click",function(){
  let cat=findInfo(category)

  fetch (`http://localhost:5000/doctorsList/${cat}`)
  .then(function (response) {
      return response.json();
      })
      .then(function (data) {
      console.log( data);
        data.forEach (item => {
          let listItem = document.createElement("li")
          listItem.innerText = `${item.name}`
          category.appendChild(listItem)
          listItem.style.visibility="hidden"
          alert(`The available doctor for ${cat} consultation is ${listItem.textContent}`)
      })
  })
      .catch(function (error) {
      console.log("error", error);
      });
  })
  )
function findInfo(item){
  let category=item.id
   return category
}


// fetch ('http://localhost:5000/doctorsList')
// .then(function (response) {
//     return response.json();
//     })
//     .then(function (data) {
//     console.log( data);
//       data.forEach (item => {
//         let listItem = document.createElement("li")
//         listItem.innerText = `${item.name}`
//         allDoctors.appendChild(listItem)
//     })

// })
//     .catch(function (error) {
//     console.log("error", error);
//     });

// fetch ('http://localhost:5000/doctorsList/family')
// .then(function (response) {
//     return response.json();
//      })
//     .then(function (data) {
//     console.log( data);
//     let allFruits = document.getElementById('fruList');
//     data.forEach (item => {
//         let fruitItem = document.createElement('li')
//         fruitItem.innerText = `${item.name}`
//         allFruits.appendChild(fruitItem)
//         })
//         })
//     .catch(function (error) {
//     console.log('error', error);
//     });

// fetch ('http://localhost:5000/doctorsList/physical')
// .then(function (response) {
//     return response.json();
//         })
//     .then(function (data) {
//     console.log( data);
//     let allVegs = document.getElementById('vegList');
//     data.forEach (item => {
//         let vegItem = document.createElement('li')
//         vegItem.innerText = `${item.name}`
//         allVegs.appendChild(vegItem)
//         })
//         })
//     .catch(function (error) {
//     console.log('error', error);
//     });