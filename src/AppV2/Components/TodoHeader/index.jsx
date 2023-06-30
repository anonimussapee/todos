import { Children, cloneElement } from 'react';

const TodoHeader = ({children, loading}) => {

return (
<div>
 {Children.toArray(children).map(child=>cloneElement(child,{loading}))}
</div>
);

}

export {TodoHeader};