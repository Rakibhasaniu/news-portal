const loadCategory = () => {
  fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then((res) => res.json())
    .then((data) => displayCategory(data.data.news_category))
    .catch((error) => displayCategory(error));
};

const displayCategory = (catid) => {


  const catContainer = document.getElementById("load-cat");

  let catDiv = document.createElement("button");
  let cnt = 0;
 
  catid.forEach((category) => {
    

    if (cnt == 0) {
      const catDiv = document.createElement("button");
      catDiv.classList.add("flex-items");
      catDiv.innerHTML = `<a onclick="loadCategoryDetails('08')" class="nav-link"> Home </a>
      `;
      catContainer.appendChild(catDiv);
    }
    const catDiv = document.createElement("button");
    catDiv.classList.add("flex-items");
    catDiv.innerHTML = `<a onclick="loadCategoryDetails('${category.category_id}')" class="nav-link">${category.category_name}</a>
   
      
      `;
    catContainer.appendChild(catDiv);
    cnt++;
  });
};



// const loadCategoryDetails = async (id = "01") => {
//   toggleLoader(true);

//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/news/category/${id}`
//   );
//   const result = await res.json();
//   displayCategorydetail(result.data);
//   // displayModalDetailes(result.data);
//   toggleLoader(false);
// };

// const displayCategorydetail = (details) => {
//   // console.log(details);

//   const item_number = document.getElementById("item_number");
//   item_number.innerHTML = details.length;
//   const newsBody = document.getElementById("home-news");
  
//   newsBody.innerHTML = "";
//   if (details.length == 0) {
//     const nodata = document.createElement("div");
//     nodata.innerHTML = "No data found";
//     newsBody.appendChild(bal);
//     return;
//   }
//   details.sort((a, b) => b.total_view - a.total_view);
//   details.forEach((detail) => {
//     const cateDiv = document.createElement("div");
//     cateDiv.innerHTML = `
//     <div class="card mb-3 p-4" >
//                 <div class="row g-0">
//                     <div class="col-md-4 ">
//                     <img src="${
//                       detail.thumbnail_url
//                     }" class="img-fluid rounded-start" alt="...">
//                     </div>
//                 <div class="col-md-8">
//                     <div class="card-body">
//                     <h4 class="card-title">${detail.title}</h4>
//                     <p class="card-text my-3">${detail.details.slice(
//                       0,
//                       400
//                     )+"..."}</p>
//                     <div class="row">
//                     <div class="col-md-4 d-flex justify-content-between"">
//                         <img class="w-25 rounded-circle me-3" src="${
//                           detail.author.img
//                         }" alt="">
//                         <div>
//                         <h6>${
//                           detail.author.name
//                             ? detail.author.name
//                             : "NO Name Found"
//                         }</h6>
//                         <p> ${
//                           detail.author.published_date
//                             ? detail.author.published_date
//                             : "NO Date Found"
//                         }</p>
//                          </div>
                       
//                     </div>
//                     <div class="col-md-4">
//                         <p></p>
//                         <h4> ${
//                           detail.total_view ? detail.total_view : "00"
//                         } M</h4>
//                     </div>
//                     <div class="col-md-4">
                      
//                         <button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//                         Details
//                         </button>
//                     </div>
                     
               
//                 </div>
//             </div>
//     `;
//     newsBody.appendChild(cateDiv);
    
//   });
// };



// const toggleLoader = (isLoading) => {
//   const loader = document.getElementById("loader");
  
//   if (isLoading) {
//     loader.classList.remove("d-none");
//   } else {
//     loader.classList.add("d-none");
//   }
// };


// // displayModalDetailes();

// loadCategoryDetails();
// loadCategory();
