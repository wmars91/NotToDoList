import React, {Component} from 'react';
import {Body, ListItem, Right, Left, CheckBox, Text} from 'native-base';
import PropTypes from 'prop-types';

export default class TodoItem extends Component{
    
    render(){
        const {todo: {id,todo}} = this.props;
        return(
            <ListItem>
                <Left>
                    <CheckBox checked={false} />
                </Left>
                <Body>
                    <Text>{todo}</Text>
                </Body>
                <Right/>
            </ListItem>
        )
    }
}

TodoItem.PropTypes = {
    todo: PropTypes.object.isRequired
}
