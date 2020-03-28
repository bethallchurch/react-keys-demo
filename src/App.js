import React from 'react'

const initialItems = [{ uuid: '1' }, { uuid: '2' }, { uuid: '3' }]
const updatedItems = [{ uuid: '4' }, { uuid: '1' }, { uuid: '2' }, { uuid: '3' }]

const ListItem = React.memo(({ children }) =>  {
  return <li>{children}</li>
})

const ListWithKeys = ({ items }) => (
  <ul>
    {items.map(x => {
      return <ListItem key={x.uuid}>{`With key ${x.uuid}`}</ListItem>
    })}
  </ul>
)

const ListWithoutKeys = ({ items }) => (
  <ul>
    {items.map(x => {
      return <ListItem>{`Without key ${x.uuid}`}</ListItem>
    })}
  </ul>
)

const App = () => {
  const [items, setItems] = React.useState(initialItems)
  return (
    <div className='App'>
      <ListWithKeys items={items} />
      <ListWithoutKeys items={items} />
      <button onClick={() => {
        const newItems = items.length === 3 ? updatedItems : initialItems
        setItems(newItems)
      }}
      >
        Toggle extra item
      </button>
    </div>
  )
}

export default App
