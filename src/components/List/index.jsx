import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


const handleDel = (id,onDelate,event) => {
    event.preventDefault();
    onDelate(id);
}
const  List = ({todos,onDelate}) => {
    return (
        <ul>
            {
                todos.map(function(item, index) {
                    return <li key={item.id} onClick={(event)=> { handleDel(item.id,onDelate,event) }}>{item.text}</li>
                })
            }
        </ul>
    )
}

export default List