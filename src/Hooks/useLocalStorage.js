import React from "react"
import { useState, useEffect } from "react"

// const defaultTodos = [
//   {text: 'aprender ingles', completed: true},
//   {text: 'aprender python', completed: false},
//   {text: 'aprender js', completed: true},
//   {text: 'aprender reactjs', completed: false}
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')



function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    

    useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName)
        
          let parsedItem
  
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue
          } else {
            parsedItem =  JSON.parse(localStorageItem)
            setItem(parsedItem)
          }
  
          setLoading(false)
        } catch(error) {
          setLoading(false)
          setError(true)
        }
      }, 2000)

    }, [])
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
  
      setItem(newItem)
    }
  
    return {
      item, 
      saveItem,
      loading,
      error
    }
  
}

export { useLocalStorage }