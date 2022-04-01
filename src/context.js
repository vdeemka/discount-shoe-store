import React, { Component,useContext } from 'react'
// import items from './data'
import Client from './Contentful'



const ShoeContext = React.createContext();

class ShoeProvider extends Component {
    state = {
        shoes:[],
        sortedShoes:[],
        topShoes:[],
        loading:false,
        type:'all',
        size:"all",
        materials:"",
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
    }
    //get Data:
     getData = async () => {
       try{
          let response = await Client.getEntries({content_type:"discountShoes",order:'sys.type'})

          let shoes= this.formatData(response.items)
          let topShoes = shoes.filter((x)=>{return x.topSale === true})
          let maxPrice = (Math.max(...shoes.map(x=>{return x.price})) + 1)
          let maxSize = Math.max(...shoes.map(x=>{return x.size}))
    
          this.setState({
            shoes, 
            sortedShoes: shoes,
            topShoes, 
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
          })

       }catch (error){
         console.log(error)
       }
     }


    componentDidMount(){
      this.getData();
      // let shoes= this.formatData(items)
      // let topShoes = shoes.filter((x)=>{return x.topSale === true})
      // let maxPrice = Math.max(...shoes.map(x=>{return x.price}))
      // let maxSize = Math.max(...shoes.map(x=>{return x.size}))

      // this.setState({
      //   shoes, 
      //   sortedShoes: shoes,
      //   topShoes, 
      //   loading: false,
      //   price: maxPrice,
      //   maxPrice,
      //   maxSize
      // })
    }


    formatData(arr){
      let tempItems = arr.map((x)=>{
        let id = x.id
        let images = x.fields.images.map((y)=>{return y.fields.file.url;})
        let shoe = {...x.fields,images:images, id:id}
        return shoe;
      })
      return tempItems
    }

    getShoe=(slug)=>{
      let tempShoes = [...this.state.shoes];
      const shoe = tempShoes.find((x)=>x.slug===slug)
      return shoe;
     }  
    

    handleChange = event =>{
      const target = event.target
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = event.target.name
      
      console.log('this is coming from handleChange')
      console.log(name, value)

      this.setState({
        [name]:value //4:18:00 and also 4:19:00
      },this.filterShoes)
      console.log(this.state)
    }


    filterShoes = () =>{
      let {
        shoes, type, price,size
        , minSize, maxSize
      } = this.state
      //all the shoes:
      let tempShoes = [...shoes];
  
      //transform values:
      price = parseInt(price)
  
      //filter by type:
      if(type!=='all'){
        tempShoes = tempShoes.filter( x => x.type === type)
      }

      // //filter by price:
      tempShoes = tempShoes.filter(x => x.price <= price)

      // //filter by size:
        if(size!=='all'){
        tempShoes = tempShoes.filter( x => x.size === size)
      }

      //change state:
      this.setState({
        sortedShoes: tempShoes
      })
  
    }



  render() {
    return (<>
    <ShoeContext.Provider 
        value={{
            state:{...this.state}, //this is my version of how to pass state (seems to work for me)
          getShoe: this.getShoe,
          handleChange: this.handleChange
        }}>
        {this.props.children}
    </ShoeContext.Provider>
    
    </>)
  }
}

//removed from original:
const ShoeConsumer = ShoeContext.Consumer;

//added replacement for oroginal:
export const useGlobalContext = () => {
  return useContext(ShoeContext)
}

export{ShoeProvider, ShoeConsumer,ShoeContext}