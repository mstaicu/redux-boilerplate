import React, { Component } from 'react';

export default function(retrieveComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = { Component: null };
    }

    async componentWillMount() {
      if (!this.state.Component) {
        var retrievedComponent = await retrieveComponent;

        retrievedComponent().then(({ default: Component }) =>
          this.setState({ Component }),
        );
      }
    }
    render() {
      const { Component } = this.state;

      return Component ? <Component {...this.props} /> : null;
    }
  };
}
