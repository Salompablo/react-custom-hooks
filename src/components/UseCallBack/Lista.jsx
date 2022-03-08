import React, { useEffect, useState } from 'react'

export default function Lista( { getItems }) {

    const [items, setItems] = useState([]);

    useEffect(() => {
      setItems(getItems);
      console.log("updating items");
    }, [getItems]);

  return (
    items.map(item => {return <div key={item}>{item}</div>})
  )
}
