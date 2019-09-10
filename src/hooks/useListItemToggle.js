import { useState } from 'react'

export default function useListItemToggle() {
    const [activeItems, setToggleActiveItems] = useState([])
    function toggleItem(_item) {
        const itemActive = activeItems.find(activeItem => _item.id === activeItem.id)
        if (!itemActive) {
            setToggleActiveItems([...activeItems, _item])
        } else {
            const itemRemovedList = activeItems.filter(item => _item.id !== item.id)
            setToggleActiveItems(itemRemovedList)
        }
    }
    return [activeItems, toggleItem]
}

