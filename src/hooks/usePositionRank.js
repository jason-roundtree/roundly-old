import { useState, useEffect } from 'react'

export default function usePositionRank(playerScores) {
    const [sortedPlayersByPos, setPlayerPos] = useState([])
    useEffect(() => {
        const sortedScores = playerScores.sort((a, b) => {
            return b.points - a.points
        })
        let lastPointTotal = null, j = 0
        for (let i = 0; i < sortedScores.length; i++) {
            if (sortedScores[i].points !== lastPointTotal) {
                j++
                sortedScores[i].place = j
                lastPointTotal = sortedScores[i].points
            } else {
                sortedScores[i].place = j
                j++
            }
        }
        setPlayerPos(sortedScores)
    }, [playerScores])

    return sortedPlayersByPos
}
