import { useState } from 'react'

export default function useListItemToggle() {
    const [activeItems, setToggleActiveItems] = useState([])
    function toggleItem(itemId) {
        const itemActive = activeItems.includes(itemId)
        if (!itemActive) {
            setToggleActiveItems([...activeItems, itemId])
        } else {
            const itemRemovedList = activeItems.filter(item => item !== itemId)
            setToggleActiveItems(itemRemovedList)
        }
    }
    return [activeItems, toggleItem]
}

