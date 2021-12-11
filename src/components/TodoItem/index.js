import './index.css'

const TodoItem = props => {
  const {eachTodo, OnClick} = props
  const {id, title} = eachTodo
  const DeleteTodo = () => {
    OnClick(id)
  }
  return (
    <li className="bg-item">
      <p className="item-name">{title}</p>
      <button className="item-btn" type="button" onClick={DeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
