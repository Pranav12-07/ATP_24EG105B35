import {userState} from 'react';
function Counter2() {
    const [count, setCount] = userState(0);
    const increment = () => {
        setCount(count + 1);
    }

     const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter2;
