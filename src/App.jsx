import React from 'react'

// import logo from './logo.svg'
import './App.css'
// import UseStateExample from './demo-01-useState'
// import UseEffectExample from './demo-02-useEffect'
// import UseContextExample from './demo-03-useContext'
import Swiper from './demo-11-swiper'

import './styles.css'
import useDraggable from './useDraggable'

const list = [
  {
    src:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586970234373&di=a665d347ed7acfed0f39aad0bb78509a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F05%2F20150405H5939_PJwYi.jpeg',
    title: '万事屋找我'
  },
  {
    title: '吃吃吃……',
    src:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586970602470&di=e3071fc352ca96f73bf2e75725d3f7bf&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F31%2F20120831140113_ayLse.thumb.700_0.jpeg'
  },
  {
    title: 'Egg',
    src:
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=968093909,4033932240&fm=26&gp=0.jpg'
  }
]

function getClassName(defaultValue, ...conditions) {
  const list = [defaultValue]
  conditions.forEach(condition => {
    if (condition[0]) {
      list.push(condition[1])
    }
  });
  return list.join(' ')
}

const Card = ({ src, title }) => {
  return (
    <div className='card'>
      <img src={src} alt='' />
      <span>{title}</span>
    </div>
  )
}

const Bar = ({ id, dragging, dragOver, eventHandlers }) => {
  if (id === dragging + 1) {
    return null
  }
  return (
    <div {...eventHandlers} className={getClassName("draggable-bar", [dragOver === id, 'dragover'])}>
      <div className='inner' style={{height: id === dragOver ? '80px' : '0px'}}></div>
    </div>
  )
}

const DraggableList = ({ list }) => {
  const { dragList, createDraggerProps, createDropperProps } = useDraggable(list)
  return (
    dragList.map((item, i) => {
      if (item.type === 'BAR') {
        return <Bar id={i} {...createDropperProps(i)} key={item.id} />
      } else {
        return (
          <Draggable {...createDraggerProps(i, item.id)}>
            <Card {...item.data} />
          </Draggable>
        )
      }
    })
  )
}

const Draggable = ({ children, eventHandlers, dragging, id }) => {
  return <div {...eventHandlers} draggable={true} className={getClassName('draggable', [dragging === id, 'dragging'])}>{children}</div>
}

function App () {
  return (
    <div className='App'>
      {/* <DraggableList list={list} /> */}
      {/* <UseStateExample /> */}
      {/* <UseEffectExample /> */}
      {/* <UseContextExample /> */}
      <Swiper />
    </div>
  )
}

export default App
