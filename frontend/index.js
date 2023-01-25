window.onload = function(){
    const queryString = window.location.search;
    let prod_query = null;
    let catLevel1 = null;
    let catLevel2 = null;
    const urlParams = new URLSearchParams(queryString);
    prod_query = urlParams.get('q');
    catLevel1 = urlParams.get('cat1');
    catLevel2 = urlParams.get('cat2');


    if (prod_query!=null){
        fetch(`http://127.0.0.1:6969/product-query?q=${prod_query}`,{
      method : 'GET',
      mode :'cors',
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        
      }
      
    }).then(response => response.json()).then(data =>{
        var prod_container=document.getElementById("outer-div");
        for( let i = 0; i < data.length; i++){
            prod_container.innerHTML+=`<div class="column">
            <img class="image" src="${data[i]['imageUrl'][0]}">
            <p class="image_text">${data[i]['title']}</p>
            <p class="price">$ ${data[i]['price']}</p>
            </a>
        </div>`
        }
    });
    }
      else if (catLevel1!=null ){
          fetch(`http://127.0.0.1:6969/category?cat1=${catLevel1}&cat2=${catLevel2}`,{
        method : 'GET',
        mode :'cors',
        headers:{
          'Access-Control-Allow-Origin':'*',
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          
        }
        
      }).then(response => response.json()).then(data =>{
          console.log(data)
          var prod_container=document.getElementById("outer-div");
          for( let i = 0; i < data.length; i++){
            if (data[i]['Img_URL']!==undefined){
              prod_container.innerHTML+=`<div class="column">
              <img class="image" src='${data[i]["Img_URL"]}'>
              <p class="image_text">${data[i]['Title']}</p>
              <p class="price">$ ${data[i]['price']}</p>
              </a>
          </div>`
            }
          }
      });
    }
      else {
        fetch(`http://127.0.0.1:6969/product-query?q=*`,{
      method : 'GET',
      mode :'cors',
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        
      }
      
    }).then(response => response.json()).then(data =>{
        var prod_container=document.getElementById("outer-div");
        for( let i = 0; i < data.length; i++){
            prod_container.innerHTML+=`<div class="column">
            <img class="image" src="${data[i]['imageUrl'][0]}">
            <p class="image_text">${data[i]['title']}</p>
            <p class="price">$ ${data[i]['price']}</p>
            </a>
        </div>`
        }
    });
    }
}