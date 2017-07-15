import { connect } from 'react-redux';

import App from '../components/App/App';

var mapStateToProps = function(state, ownProps) {
    return {};
  },
  mapDispatchToProps = function(dispatch, ownProps) {
    return {};
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
