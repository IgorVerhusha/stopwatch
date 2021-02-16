import React from 'react'
import {Button} from '@material-ui/core'

const Buttons = ({start, status, stop, reset}) => {
    return (
        <div className={'stopwatch__buttons'}>
            {(status === 'not started' || status === 'stop') &&
            <Button onClick={start} variant="outlined" color="primary" size={'large'}>
                Start
            </Button>}
            {(status === 'start') &&
            <Button onClick={stop} variant="outlined" color="secondary" size={'large'}>Stop</Button>
            }
            {(status === 'stop' || status === 'start') &&
            <Button onClick={reset} variant="outlined" size={'large'}>
                Reset
            </Button>
            }
        </div>
    )
}

export default Buttons