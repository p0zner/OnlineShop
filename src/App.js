import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import React from "react";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currectItems: [],
      items: [
        {
          id: 1,
          title: 'Стул',
          img: '../img/стул.jpg',
          desc: 'Описание очень крутого интересного товара, который вам точно нужен',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: '../img/стол.jpg',
          desc: 'Описание очень крутого интересного товара, который вам точно нужен',
          category: 'tables',
          price: '59.99'
        },
        {
          id: 3,
          title: 'Лампа',
          img: '../img/лампа.jpg',
          desc: 'Описание очень крутого интересного товара, который вам точно нужен',
          category: 'lampes',
          price: '19.99'
        },
        {
          id: 4,
          title: 'Шкаф',
          img: '../img/шкаф.jpg',
          desc: 'Описание очень крутого интересного товара, который вам точно нужен',
          category: 'closets',
          price: '69.99'
        },
        {
          id: 5,
          title: 'Диван',
          img: '../img/диван.jpg',
          desc: 'Описание очень крутого интересного товара, который вам точно нужен',
          category: 'sofas',
          price: '89.99'
        },
        {
          id: 6,
          title: 'Кровать',
          img: '../img/кровать.jpg',
          desc: 'Описание очень крутого интересного товара, который вам точно нужен',
          category: 'beds',
          price: '84.99'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }

    this.state.currectItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currectItems} onAdd={this.addToOrder} onShowItem={this.onShowItem} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currectItems: this.state.items })
      return
    }
    this.setState({
      currectItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }
  }
}

export default App;
