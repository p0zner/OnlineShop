import React, { Component } from 'react'

export class Categories extends Component {
   constructor(props) {
      super(props)
      this.state = {
         categories: [
            {
               key: 'all',
               name: 'Все товары'
            },
            {
               key: 'chairs',
               name: 'Стулья'
            },
            {
               key: 'tables',
               name: 'Столы'
            },
            {
               key: 'lampes',
               name: 'Лампы'
            },
            {
               key: 'closets',
               name: 'Шкафы'
            },
            {
               key: 'sofas',
               name: 'Диваны'
            },
            {
               key: 'beds',
               name: 'Кровати'
            }
         ]
      }
   }
  render() {
    return (
      <div className='categories'>
         {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
         ))}
      </div>
    )
  }
}

export default Categories