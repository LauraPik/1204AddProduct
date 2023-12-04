class Product{

    constructor(product, price, year ){
        this.product = product;
        this.price = price;
        this.year = year
   
    }
   

    getFullProductData(){
        return[
            this.product,
            this.price,
            this.year,
            
        ]
    }

    addAProduct(){
        let  ul = document.createElement('ul');
        let bodEl = document.querySelector('.products');
        ul.style.display = 'flex';
        ul.style.gap = '2rem';
        
        bodEl.appendChild(ul);

        for(let user of this.getFullProductData()){
            let li = document.createElement('li');
            li.textContent = user
            ul.appendChild(li);
            li.style.listStyle ='none';    
        }
const addPro = [];

 let button = document.querySelector('.main-button');
 let inputProduct = document.querySelector('.productName');
 let inputYear = document.querySelector('.productYear');
 let inputPrice = document.querySelector('.productPrice')

 function updateValue(){
    addPro.push(inputProduct.value);



 }



    }

}

module.exports = {
    Product
}



