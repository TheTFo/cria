import { connect } from 'react-redux';
import { setReduxCounter } from '../../../actions/stuffActions';
import ReduxCounter from '../components/ReduxCounter';

function mapStateToProps(state) {
    return {
        reduxCounter: state.stuff.reduxCounter
    };
}

const mapDispatchToProps = { setReduxCounter };

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export default connectFunction(ReduxCounter); 

//  This Higher Order Component is basically <ReduxCounter reduxCounter={state.stuff.reduxCounter} setReduxCounter={setReduxCounter} />
//  Note that mapDispatchToProps handles unwrappig dispatch from the action.
//  In htis case, state.stuff is from the redux store, and connect is creating a higher order component that
//  maps that redux state to ReduxCounter's component props.
//  And rememver, when props change, the component renders again, unless shouldComponentUpdate returns false
