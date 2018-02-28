import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
  render() {
    return (
      <div className="Order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered By: {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    )
  }
}

Order.defaultProps = {
  cone = true,
  size = "regular"
};

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired
};
