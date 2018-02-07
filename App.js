import { StackNavigator } from 'react-navigation';
import Todos from './screens/Todos';
import TodosCreate from './screens/TodosCreate';

const App = StackNavigator({
  Todos: {
    screen: Todos,
    navigationOptions: {
      headerTitle : 'Not To Do List '
    }
  },
  TodosCreate: {
    screen: TodosCreate,
    navigationOptions: {
      headerTitle : 'Add Not To Do List '
    }
  },

});

export default App; 