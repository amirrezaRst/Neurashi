import { useState } from "react";

const steps = [
    { step: 1 },
    { step: 2 },
    { step: 3 },
    { step: 4 },
]

const ProgressBar = () => {
    const [step, setStep] = useState(2);

    return (
        <div className="progress-container">
            <div className="flex items-center">
                {steps.map(item =>
                    <>
                        <div className={`progress-item ${item.step < step && "active"} ${item.step == step && "current"}`}>
                            <span style={item.step == step ? { color: "#E601FF" } : {}}>
                                {item.step}
                            </span>
                        </div>
                        <div className={`progress-line  ${item.step < step && "active"} ${item.step == 4 && "hidden"}`}></div>
                    </>
                )}
            </div>
        </div>
    );
}

export default ProgressBar;