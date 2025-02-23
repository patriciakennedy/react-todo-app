import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

import { useState } from 'react';

function App() {
    // const todos = [
    //     { input: 'Hello! Add your first todo!', complete: true },
    //     { input: 'Get the groceries!', complete: false },
    //     { input: 'Learn how to web design', complete: false },
    //     { input: 'Say hi to gran gran', complete: true },
    // ];
    const [todos, setTodos] = useState([
        { input: 'Hey! Add your first todo!', complete: true },
    ]);

    const [selectedTab, setSelectedTab] = useState('Open');

    function handleAddTodo(newTodo) {
        //...todos, spreads out original values in the array and append it to newTodo array
        const newTodoList = [...todos, { input: newTodo, complete: false }];
        setTodos(newTodoList);
    }

    // update/edit/modify
    function handleCompleteTodo(index) {}

    function handleDeleteTodo(index) {
        let newTodoList = todos.filter((val, valIndex) => {
            return valIndex !== index;
        });
        setTodos(newTodoList);
    }

    return (
        <>
            <Header todos={todos} />
            <Tabs
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                todos={todos}
            />
            <TodoList
                handleDeleteTodo={handleDeleteTodo}
                selectedTab={selectedTab}
                todos={todos}
            />
            <TodoInput handleAddTodo={handleAddTodo} />
        </>
    );
}

export default App;
