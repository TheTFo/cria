import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as actions from '../../../actions/todoActions';
import TodoPage from '../components/TodoPage';

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = { ...actions };

const connectHOC = connect(mapStateToProps, mapDispatchToProps);
const translateHOC = translate(['todo']);

export default translateHOC(connectHOC(TodoPage)); 
