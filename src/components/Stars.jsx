import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Star from './Star'

const Stars = ({ count }) => {
    const isValidRating = (typeof count === 'number') && (count > 0 && count < 6)
    const stars = isValidRating && Array(count).fill(0)

    return (
        <ul className="card-body-stars u-clearfix">
            {stars && stars.map(() => <Star key={shortid.generate()} />)}
        </ul>
    )
}

Star.defaultProps = {
    count: 0
}

Star.propTypes = {
    count: PropTypes.number
}

export default Stars
