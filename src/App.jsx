import React, { useState, useRef, useEffect, useInsertionEffect } from "react"
import './App.css'
import Example from './components/Example'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const targetRef = useRef(null)
  const intervalId = useRef(null)

  // log to console when observed item enters/exists the viewport
  useEffect(() => {
    if (isVisible && !intervalId.current) {
      intervalId.current = setInterval(() => {
        console.log('working')
      }, 1000)
    } else {
      clearInterval(intervalId.current)
      intervalId.current = null
    }

  }, [isVisible])

  // callback for the observer
  const intersectionCallback = entries => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  // register the observer
  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options)
    const target = targetRef.current

    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) { observer.unobserve(target) }
    }
  }, [targetRef, options])


  return (
    <div className="App">
      <Example innerRef={targetRef} />
    </div>
  )
}

export default App

// options for the observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
}


