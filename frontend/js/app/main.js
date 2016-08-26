import {createStore, combineReducers} from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {completed: !state.completed})
        default:
            return state

    }
}

const visibilityFilter = (
    state= 'SHOW_ALL',
    action
) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

const Todo = ({
    onClick,
    completed,
    text
}) => (
    <li className={completed ? 'line': ''}
        onClick={onClick}
        >
        {text}
    </li>
)



const Link = ({
    active,
    children,
    onClick
}) => {
    if (active) {
        return (
            <span>{children}</span>
        )
    } else {
        return (
            <a href="#"
                onClick={e => {
                    e.preventDefault()
                    onClick()
                }}
            >
                {children}
            </a>
        )
    }
}

class FilterLink extends React.Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props
        const state = store.getState()

        return (
            <Link active={
                props.filter === state.visibilityFilter
            }

            onClick={() =>
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                })
            }
            >{props.children}</Link>
        )
    }
}


const Footer = () => (
    <div>
        Show:
        <p><FilterLink filter='SHOW_ALL'>All</FilterLink></p>
        <p><FilterLink filter='SHOW_COMPLETED'>completed</FilterLink></p>
        <p><FilterLink filter='SHOW_ACTIVE'>active</FilterLink></p>
    </div>
)

const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
)


const AddTodo = () => {
    let input
    return (
        <div>
            <input ref={node => {input = node}} />
            <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        id: nextTodoId++,
                        text: input.value
                    })
                    input.value = ''
                }}>Add Todo</button>
        </div>
    )
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed)
        default:
            return todos
    }
    todos.map(todo => todo.filter)
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action))
        default:
            return state
        return state
    }
}

class VisibleTodoList extends React.Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const props = this.props
        const state = store.getState()

        return (
            <TodoList
                todos={getVisibleTodos(
                    state.todos,
                    state.visibilityFilter
                )}
                onTodoClick={
                    id => store.dispatch({type: 'TOGGLE_TODO', id})
                }
            />
        )
    }
}

const todoApp = combineReducers({todos, visibilityFilter})
const store = createStore(todoApp)

let nextTodoId = 0;
const TodoApp = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
)


ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
)
