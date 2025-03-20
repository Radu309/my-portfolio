import {useEffect, useState} from "react";

function SkillItem({ skill, percentage, color, visible }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (visible) {
            let start = 0;
            const end = percentage;
            const duration = 1000;
            const increment = Math.ceil((end / duration) * 20);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, 20);

            return () => clearInterval(timer);
        }
    }, [visible, percentage]);

    return (
        <div className="skill-item">
            <div className="skill-header">
                <span>{skill}</span>
                <span className="percentage">{count}%</span>
            </div>
            <div className="progress-bar">
                <div className="progress" style={{ width: visible ? `${percentage}%` : "0%", backgroundColor: color }}></div>
            </div>
        </div>
    );
}

export default SkillItem;