import React, { Component } from "React";
import {
    Container, Input,
    Content, Label, Button,
    Text,Form, Item,
} from "native-base";

export default class TodosCreate extends Component {

    constructor(){
        super();
        this.state = {
            text : ""
        }
    }

    handleSubmit(){
        alert(this.state.text)
    }

    render(){
        return(
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Not To Do</Label>
                            <Input onChangeText={ (text)=> this.setState({text})} />
                        </Item>
                        <Item>
                            <Button onPress={ ()=> this.handleSubmit() }>
                                <Text>Submit</Text>
                            </Button>
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }
}