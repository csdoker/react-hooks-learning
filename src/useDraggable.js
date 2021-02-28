import { useState } from 'react'

const DRAGGABLE = 'DRAGGABLE'
const BAR = 'BAR'

function draggable (item, id) {
  return {
    type: DRAGGABLE,
    id,
    data: item
  }
}

function insertBars (list) {
  let i = 0
  const newBar = () => {
    return {
      type: BAR,
      id: i++
    }
  }
  return [newBar()].concat(...list.map(item => {
    return [draggable(item, i++), newBar()]
  }))
}

function calcChanging(list, drag, drop) {
  list = list.slice()
  const dragItem = list[drag]
  const direction = drag > drop ? -2 : 2
  const end = direction > 0 ? drop - 1 : drop + 1
  for (let index = drag; index !== end; index += direction) {
    list[index] = list[index + direction]
  }
  list[end] = dragItem
  return list
}

const useDraggable = list => {
  const [dragList, setDragList] = useState(() => {
    return insertBars(list)
  })
  const [dragOver, setDragOver] = useState(null)
  const [dragging, setDragging] = useState(null)
  return {
    dragList,
    createDraggerProps: (id, key) => {
      return {
        id,
        key,
        dragging,
        eventHandlers: {
          onDragStart: () => {
            setDragging(id)
          },
          onDragEnd: () => {
            setDragging(null)
          }
        }
      }
    },
    createDropperProps: id => {
      return {
        dragging,
        dragOver,
        eventHandlers: {
          onDragOver: (e) => {
            e.preventDefault()
            setDragOver(id)
          },
          onDragLeave: (e) => {
            e.preventDefault()
            setDragOver(null)
          },
          onDrop: e => {
            e.preventDefault()
            setDragOver(null)
            setDragList(list => {
              return calcChanging(list, dragging, id)
            })
          }
        }
      }
    }
  }
}

export default useDraggable
