import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/* METHOD - 3 */}
            {messages.map((_, i) => (
              <div className={step >= i + 1 ? "active" : ""} key={i + 1}>
                {i + 1}
              </div>
            ))}

            {/* METHOD - 2 */}
            {/* {Array.from({ length: 3 }, (_, i) => i + 1).map((cur) => (
              <div className={step >= cur ? "active" : ""} key={cur}>
                {cur}
              </div>
            ))} */}

            {/* METHOD - 1 */}

            {/* <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div> */}
          </div>
          <p className="message">
            Steps {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>⬅️</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>➡️</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
