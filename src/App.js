import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Items from "./components/Items.js";
import "./index.css"
import Categories from "./components/Categories.js";
import ShowItem from "./components/ShowItem.js";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      orders:[],
      items:[
        {
          id: 1,
          title: 'Стол обеденный',
          img:  'table.jpg',
          desc: 'Прочный и стильный обеденный стол из натурального дерева.',
          category: 'Столы',
          price: 200
        }, 
        {
          id: 2,
          title: 'Кресло мягкое',
          img:  'armchair.jpg',
          desc: 'Удобное мягкое кресло для отдыха в гостиной или кабинете.',
          category: 'Кресла',
          price: 150
        }, 
        {
          id: 3,
          title: 'Шкаф для одежды',
          img:  'wardrobe.jpg',
          desc: 'Просторный шкаф для хранения одежды с различными отделениями и ящиками.',
          category: 'Шкафы',
          price: 300
        }, 
        {
          id: 4,
          title: 'Диван угловой',
          img:  'sofa.jpg',
          desc: 'Уютный угловой диван с мягкими подушками и возможностью превращения в спальное место.',
          category: 'Диваны',
          price: 500
        }, 
      ],
      categories: [
        {
          id: 0,
          category: 'Всё'
        },
        {
          id: 1,
          category: 'Столы'
        },
        {
          id: 2,
          category: 'Кресла'
        },
        {
          id: 3,
          category: 'Шкафы'
        },
        {
          id: 4,
          category: 'Диваны'
        },
      ],
      filteredItems: [],
      isShowingItem: false,
      showingItem: {}
    }
    this.state.filteredItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.filterItems = this.filterItems.bind(this)
    this.changeIsShowingItem = this.changeIsShowingItem.bind(this)
  }

  render(){
  return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories categories={this.state.categories} onFilterItems={this.filterItems}/>
        <Items items={this.state.filteredItems} onAdd={this.addToOrder} onShowItem={this.changeIsShowingItem}/>
        {this.state.isShowingItem && <ShowItem item={this.state.showingItem} onShowItem={this.changeIsShowingItem} onAdd={this.addToOrder}/>}
        <Footer />
      </div>
  );
  }

  deleteOrder(item){
    this.setState({orders: this.state.orders.filter(order => order.id !== item.id)})
  }

  addToOrder(item){
    let isInOrder = false;
    this.state.orders.forEach(i => {if(i.id === item.id) isInOrder = true})
    if(!isInOrder)
      this.setState({orders: [...this.state.orders, item]})
  }

  filterItems(category){
    if(category === 'Всё')
    {
      this.setState({filteredItems: this.state.items})
      return;
    }
    this.setState({filteredItems: this.state.items.filter(i => i.category === category)})
  }

  changeIsShowingItem(item){
    this.setState({showingItem: item})
    this.setState({isShowingItem: !this.state.isShowingItem})
  }
}

export default App;
