import React from 'react';

import NodeDetailsHealthOverflowItem from './node-details-health-overflow-item';

export default class NodeDetailsHealthOverflow extends React.Component {
  render() {
    const items = this.props.items.slice(0, 4);

    return (
      <div className="node-details-health-overflow" onClick={this.props.handleClickMore}>
        {items.map(item => <NodeDetailsHealthOverflowItem key={item.id} item={item} />)}
        <div className="node-details-health-overflow-expand">
          Show more
        </div>
      </div>
    );
  }
}