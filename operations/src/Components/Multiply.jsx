import { useState } from 'react';

const Multiply = () => {
        const [component1, setComponent1] = useState(0);
        const [component2, setComponent2] = useState(0);
        const [total, setResult] = useState(0);

        // const formSubmit = (e) => {
        //         e.preventDefault()

        const CalculateMultiply = () => {
                setResult(+(component1) / +(component2));
        };
        return (
                <div>
                        <h3>Multiply Operation</h3>
                        <input
                                className="multiply"
                                type="number"
                                value={component1}
                                placeholder="Enter first number"
                                onChange={(e) => setComponent1(e.target.value)}
                        />
                        <input
                                className="ultiply"
                                type="number"
                                value={component2}
                                placeholder="Enter second number"
                                onChange={(e) => setComponent2(e.target.value)}
                        />
                        <button
                                className="btn"
                                onClick={CalculateMultiply}
                        >
                                Calculate
                        </button>
                        <p>Total: <span id="total">{total}</span></p>
                </div>
        )
}

export default Multiply
