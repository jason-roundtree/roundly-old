import { useState } from 'react'

export default function useListItemToggle() {
    const [activeItems, setToggleActiveItems] = useState([])
    function toggleItem(_item) {
        // if string then _item will be an ID
        if (typeof _item === 'string') {
            let itemActive = activeItems.includes(_item)
            if (!itemActive) {
                setToggleActiveItems([...activeItems, _item])
            } else {
                const itemRemovedList = activeItems.filter(item => _item !== item)
                setToggleActiveItems(itemRemovedList)
            }
        } 
        else if (typeof _item === 'object') {
            let itemActive = activeItems.find(activeItem => _item.id === activeItem.id)
            if (!itemActive) {
                setToggleActiveItems([...activeItems, _item])
            } else {
                const itemRemovedList = activeItems.filter(item => _item.id !== item.id)
                setToggleActiveItems(itemRemovedList)
            }
        }
    }
    return [activeItems, toggleItem]
}

