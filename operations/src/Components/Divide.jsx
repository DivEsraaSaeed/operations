import { useState } from 'react';

const Divide = () => {
        const [component1, setComponent1] = useState(0);
        const [component2, setComponent2] = useState(0);
        const [total, setResult] = useState(0);

        // const formSubmit = (e) => {
        //         e.preventDefault()

        const CalculateDivide = () => {
                setResult(+(component1) / +(component2));
        };
        return (
                <div>
                        <h3>Divide Operation</h3>
                        <input
                                className="divide"
                                type="number"
                                value={component1}
                                placeholder="Enter first number"
                                onChange={(e) => setComponent1(e.target.value)}
                        />
                        <input
                                className="divide"
                                type="number"
                                value={component2}
                                placeholder="Enter second number"
                                onChange={(e) => setComponent2(e.target.value)}
                        />
                        <button
                                className="btn"
                                onClick={CalculateDivide}
                        >
                                Calculate
                        </button>
                        <p>Total: <span id="total">{total}</span></p>
                </div>
        )
}

export default Divide
