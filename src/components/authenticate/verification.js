import React, { useRef, useState, useEffect } from 'react'


const Verification = ({ length, label, loading, onComplete }) => {
    const [code, setCode] = useState([...Array(length)].map(() => ""));
    const inputs = useRef([]);
    useEffect(() => {

        console.log(code);
    }, [code])

    const processInput = (e, slot) => {
        const num = e.target.value
        if (/[^0-9]/.test(num)) return;
        const newCode = [...code];
        newCode[slot] = num;
        setCode(newCode)
        if (slot !== length - 1) {
            inputs.current[slot + 1].focus();
        }
        if (newCode.every(num => num !== "")) {
            onComplete(newCode.join(""));
        }
    }
    const onKeyUp = (e, slot) => {
        if (e.keyCode === 8 && !code[slot] && slot !== 0) {
            const newCode = [...code];
            newCode[slot - 1] = "";
            setCode(newCode);
            inputs.current[slot - 1].focus();
        }
    };
    return (
        <div className="flex flex-col items-center">
            <label className="mb-[16px]">{label}</label>
            <div className="flex justify-start items-center m-2 relative">
                {code.map((num, idx) => {
                    return (
                        <input
                            key={idx}
                            type="text"
                            className="border-2  focus:animate-bounce text-center text-xl text-blue-800 border-indigo-800  shadow-none m-2 rounded-md h-[60px] w-[40px]  focus:outline-none "
                            inputMode="numeric"
                            maxLength={1}
                            value={num}
                            autoFocus={!code[0].length && idx === 0}
                            readOnly={loading}
                            onChange={e => processInput(e, idx)}
                            onKeyUp={e => onKeyUp(e, idx)}
                            ref={ref => inputs.current.push(ref)}
                        />


                    );
                })}



            </div>

        </div>
    )
}

export default Verification
