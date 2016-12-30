import {
    connect
} from 'react-redux';

import HelloWorld from '../../components/Hello/World';

var mapStateToProps = function(state, ownProps) {
        return {};
    },
    mapDispatchToProps = function(dispatch, ownProps) {
        return {};
    };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HelloWorld);
