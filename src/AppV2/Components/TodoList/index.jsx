 const TodoList = (props) =>{
  return (<div className="container">
    {props.loading && props.onLoading()}
    {props.error && props.onError()}
    {(!props.loading && !props.error && props.todo.length>0 && props.searchTodo.length === 0) && props.onEmptySearch()}
    {(!props.loading && !props.error && props.todo.length === 0) && props.onEmpty()}
    {!props.loading && !props.error && props.render()}
  </div>)
 }

export {TodoList};
