import React, { Component } from 'react'

export class Category extends Component {
  render() {
    return (
      <button onClick={() => this.props.onFilterItems(this.props.category.category)}>{this.props.category.category}</button>
    )
  }
}

export default Category