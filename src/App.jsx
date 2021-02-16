import React, {useState} from 'react'
import Display from './components/Display.jsx'
import Buttons from './components/Buttons.jsx'
import './App.scss'

const App = () => {
    const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0})
    const [interv, setInterv] = useState()
    const [status, setStatus] = useState('not started')

    const start = () => {
        setStatus('start')
        run()
        setInterv(setInterval(run, 10))
    }

    const stop = () => {
        clearInterval(interv)
        setStatus('stop')
    }

    const reset = () => {
        clearInterval(interv)
        setStatus('not started')
        setTime({ms: 0, s: 0, m: 0, h: 0})
    }

    let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h

    const run = () => {
        if (updatedM === 60) {
            updatedH++
            updatedM = 0
        }
        if (updatedS === 60) {
            updatedM++
            updatedS = 0
        }
        if (updatedMs === 100) {
            updatedS++
            updatedMs = 0
        }
        updatedMs++
        setTime({ms: updatedMs, s: updatedS, m: updatedM, h: updatedH})
    }

    return (
        <div className={"stopwatch"}>
            <Display time={time}/>
            <Buttons status={status} stop={stop} start={start} reset={reset}/>
        </div>
    )
}

export default App
