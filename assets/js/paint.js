function configureListeners() {
    let images = document.getElementsByTagName('img'); // select img elements  


    for (let i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)// iterate over images and add mouseover event listeners     
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)
    } 
}

function addOpacity(event) {
    if (!this.classList.contains('dim')){ // add appropriate CSS class
        this.classList.add('dim')
    }

    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    if (this.classList.contains('dim')){ //remove appropriate CSS class
        this.classList.remove('dim');
    }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) { //this is a switch statement like the one in the carnival ride assignment!
        case 'pn1':           
            price = '$19.99' // set variables for price and color name and invoke a function to update the price     
            colorName = 'Lime Green'
            updatePrice(colorName, price)
            break;           
        case 'pn2':
            price = '$12.99' // set variables for price and color name and invoke a function to update the price   
            colorName = 'Medium Brown'
            updatePrice(colorName, price)
            break;            
        case 'pn3':
            price = '$11.99' // set variables for price and color name and invoke a function to update the price  
            colorName = 'Royal Blue'
            updatePrice(colorName, price)
            break;   
        case 'pn4':
            price = '$14.99' // set variables for price and color name and invoke a function to update the price  
            colorName = 'Bright Red'
            updatePrice(colorName, price)
            break;   
        case 'pn5':
            price = '$9.99' // set variables for price and color name and invoke a function to update the price      
            colorName = 'solid White'
            updatePrice(colorName, price)
            break;   
        case 'pn6':
            price = '$15.99' // set variables for price and color name and invoke a function to update the price
            colorName = 'Solid Black'
            updatePrice(colorName, price)        
            break;   
        case 'pn7':
            price = '$8.99' // set variables for price and color name and invoke a function to update the price
            colorName = 'Medium Blue'
            updatePrice(colorName, price)
            break;   
        case 'pn8':
            price = '$16.99' // set variables for price and color name and invoke a function to update the price
            colorName = 'Light Purple'
            updatePrice(colorName, price)
            break;   
        case 'pn9':
            price = '$17.99' // set variables for price and color name and invoke a function to update the price
            colorName = 'Bright Yellow'
            updatePrice(colorName, price)
            break;   
        default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price'); // select element with corresponding id
        colorPrice.textContent = price; // display price
        
        let color = document.getElementById('color-name'); // select element with corresponding id
        color.textContent = colorName; //display color name
    }
    
}
