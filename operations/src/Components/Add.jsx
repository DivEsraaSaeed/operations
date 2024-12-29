import { useState } from 'react';
import './Add.css'; 

const Add = () => {
        const [component1, setComponent1] = useState(0);
        const [component2, setComponent2] = useState(0);
        const [total, setTotal] = useState(0);

        // const formSubmit = (e) => {
        //         e.preventDefault()

        const CalculateSum = () => {
                setTotal(+(component1) + +(component2));
        };

        return (
                <div>
                        <h3>Add Operation</h3>
                        <input
                                className="add"
                                type="number"
                                value={component1}
                                placeholder="Enter first number"
                                onChange={(e) => setComponent1(e.target.value)}
                        />
                        <input
                                className="add"
                                type="number"
                                value={component2}
                                placeholder="Enter second number"
                                onChange={(e) => setComponent2(e.target.value)}
                        />
                        <button
                                className="btn btn-primary"
                                onClick={CalculateSum}>
                                Calculate
                        </button>
                        <p>Total: <span id="total">{total}</span></p>
                </div>
        );
};

export default Add;
