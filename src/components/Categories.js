import React, { Component } from 'react'
import Category from './Category'

export class Categories extends Component {
  render() {
    return (
      <div className='categories'>
        {this.props.categories.map(c => (
          <Category key={c.id} onFilterItems={this.props.onFilterItems} category={c}/>
        ))}
      </div>
    )
  }
}

export default Categories