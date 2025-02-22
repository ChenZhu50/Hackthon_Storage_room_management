import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const ItemPage = () => {
  const itemId = useParams();
  const [itemObject, setItemObject] = useState(null);
  return (
    <main>

    </main>
  )
}

export default ItemPage