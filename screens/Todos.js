import React,{Component} from 'react';
import {FlatList, View} from 'react-native';
import {
  Container, Content, 
  Text, Header, Button,
  Body, List, Icon,
  ListItem, Right, 
  Left, CheckBox, Fab
} from 'native-base';
import TodoItem from '../components/TodoItem';


export default class Todos extends Component{

  constructor(){
    super();
  }

  state = {
    count : 0,
    todos : []
  };

  renderRow(todo){
    return(
      <ListItem key={todo.id}>
        <Left>
          <CheckBox checked={false} />
        </Left>
        <Body>
          <Text>{todo.todo}</Text>
        </Body>
        <Right/>
      </ListItem>
    );
  } 

  _keyExtractor = (item, index) => item.id;

  handleIncTodo(){
    let count = this.state.count + 1;
    let todos = this.state.todos;
    todos.push({
      id: count,
      todo: "Not Todo " +  count
    });
    this.setState({
      count : count,
      todos : todos  
    })
  }

  render(){
    return(
      <Container>
       <Content>

        <List>
          {/* {this.state.todos.map( (todo)=> <TodoItem todo={todo} key={todo.id}/> )} */}
          <FlatList
            data={this.state.todos}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) => <TodoItem todo={item} />}
          />
        </List>
       </Content>
       <View style={{ flex: 1 }}>
        <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            // onPress={() => this.handleIncTodo()}
            onPress={() => this.props.navigation.navigate('TodosCreate')}
        >
            <Icon name="add" />
          </Fab>
        </View>
     </Container>
    );
  }
}
