
export default{
    loadcart(state){
        let cart = localStorage.getItem('freecart')
        if(cart){
            state.cart = JSON.parse( cart)
        }
    },

    // Add Item To Cart

    AddToCart(state,product){
        // first check if product is already in the cart
        let itemFound = state.cart.find((p)=> p.product.id === product.id)
        if(!itemFound){
            state.cart.push({product , quantity:1})
        }
        else{
            itemFound.quantity ++
        }

        // After we add item to cart , we want to update local storage
        localStorage.setItem("freecart",JSON.stringify(state.cart));

        this.$swal({
            toast:true,
            text:"Added To Cart",
            icon:"success",
            timer:4000,
            timerProgressBar:true,
            showConfirmButton:false,
            position:"bottom-end",
        })
    },

    //  Decrease Item To Cart
    DecreaseItemCount(state,index){
        let item = state.cart[index];

        if(!item) return;

        if(item.quantity === 1){
            state.cart.splice(index,1)
        }
        else{
            item.quantity --
        }

        this.$swal({
            toast:true,
            text:"cart Updated",
            icon:"success",
            timer:4000,
            timerProgressBar:true,
            showConfirmButton:false,
            position:"bottom-end",
        })

         // After we update item to cart , we want to update local storage
        localStorage.setItem("freecart",JSON.stringify(state.cart));
    },

     //  Remove Item To Cart
     RemoveCartItem(state,index){
        state.cart.splice(index,1)

        this.$swal({
            toast:true,
            text:"item removed",
            icon:"success",
            timer:4000,
            timerProgressBar:true,
            showConfirmButton:false,
            position:"bottom-end",
        })

         // After we update item to cart , we want to update local storage
        localStorage.setItem("freecart",JSON.stringify(state.cart));
     },

     // Increase Item to cart
     IncreaseItemCount(state,index){
        let item = state.cart[index]
        item.quantity++

        this.$swal({
            toast:true,
            text:"Cart Updated",
            icon:"success",
            timer:4000,
            timerProgressBar:true,
            showConfirmButton:false,
            position:"bottom-end",
        })

         // After we update item to cart , we want to update local storage
        localStorage.setItem("freecart",JSON.stringify(state.cart));

     },

    //  Clear our cart

    ClearCart(state){
        state.cart = []

            // After we update item to cart , we want to update local storage
            localStorage.removeItem("freecart");
    }
}