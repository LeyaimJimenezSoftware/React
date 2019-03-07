import React from 'react'
import PropTypes from 'prop-types'

const Content = props => {
    const { children } = props

    return (
      <main>
        { children }
      </main>
    )
}

export default Content