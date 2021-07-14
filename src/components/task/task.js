import React, { Component } from 'react'

import '../../index.js'
import './task.css'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

export default class Task extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    doDone: PropTypes.func.isRequired
  }

  render () {
    const { label, date, doDone } = this.props
    let resultDate = formatDistanceToNow(
      date,
      { includeSeconds: true }
    )

    return (
      <label>
        <span className="description"
              onClick={doDone}
        >
          {label}
        </span>
        <span className="created">created {resultDate} ago</span>
      </label>
    )
  }
}


