import React, { Fragment, useState } from 'react';
import Button from '../../presentation/button.component';
import Message from '../../presentation/message.component';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <Fragment>
            <Button text={'Increase Value'} onClickHandler={() => { setCounter(counter + 1) }}></Button>
            <Message text={counter}></Message>
        </Fragment>
    )
}

export default Counter;