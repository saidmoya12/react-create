import React, {Component} from 'react';

class COMPONENT_NAME extends Component {
	//initial state
	state = {}
	
	render() {
		return (
			<div className="component_name">
				{ this.props.children }
			</div>
		)
	}
}

export default COMPONENT_NAME;