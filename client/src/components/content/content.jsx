import { useEffect, useState } from "react";
import React from "react";
import "./content.css";
import Projects from "../projects/projects"

function Content() {
    const targetName = "Nidhin";
    const [first, setFirstLetter] = useState("_");
    const [second, setSecondLetter] = useState("_");
    const [third, setThirdLetter] = useState("_");
    const [fourth, setFourthLetter] = useState("_");
    const [fifth, setFifthLetter] = useState("_");
    const [sixth, setSixthLetter] = useState("_");
    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);

    let arr=[0, 1]
    const [order, setOrder] = useState(arr); // Initial order of items

    const changeOrder = () => {
        const newOrder = [...order].reverse(); // Create a new reversed array
        setOrder(newOrder);
    };
    
    useEffect(() => {
        // Function to animate each letter individually
        setIsVisible(true);
        const animateLetter = (setLetterFunction, targetChar) => {
            let sequence = "A".charCodeAt(0);
            const interval = setInterval(() => {
                setLetterFunction(String.fromCharCode(sequence));
                if (String.fromCharCode(sequence) === targetChar) {
                    clearInterval(interval);
                    setIndex(index + 1);
                } else {
                    sequence++;
                }
            }, 20); 
        };

        if (index < targetName.length) {
            const currentChar = targetName[index];
            switch (index) {
                case 0:
                    animateLetter(setFirstLetter, currentChar);
                    break;
                case 1:
                    animateLetter(setSecondLetter, currentChar);
                    break;
                case 2:
                    animateLetter(setThirdLetter, currentChar);
                    break;
                case 3:
                    animateLetter(setFourthLetter, currentChar);
                    break;
                case 4:
                    animateLetter(setFifthLetter, currentChar);
                    break;
                case 5:
                    animateLetter(setSixthLetter, currentChar);
                    break;
                default:
                    break;
            }
        }
    }, [index, targetName]);

    return (
        <>
        <div className="content">
            <div className={`intro ${isVisible ? "slide-in" : ""}`} style={{ order: order[0] }}>
                <h1>
                    Hi, I’m <span className="name">{first}{second}{third}{fourth}{fifth}{sixth}</span>!
                </h1>
                <p className="description">
                    I’m a software developer who loves building things. I create efficient, user-friendly solutions that bring ideas to life. Check out my projects, and let’s connect!
                </p>
            </div>
            <div class={`outer-circle ${isVisible ? "slide-in" : ""}`} style={{ order: order[1] }}>
                <img onClick={changeOrder} src="/images/337.jpg" alt="Profile Picture" />
            </div>
            
        </div>
        <Projects/>
        </>
    );
}

export default Content;
