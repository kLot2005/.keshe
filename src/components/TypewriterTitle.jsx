import { useState, useEffect } from 'react';

export default function TypewriterTitle() {
    const originalText = '.keshe';
    const [text, setText] = useState('');

    useEffect(() => {
        let charIndex = 0;
        let isDeleting = false;
        let timer;

        const typeSpeed = 150; // ms per char typing
        const deleteSpeed = 100; // ms per char deleting
        const delayAfterType = 2000; // wait before deleting
        const delayAfterDelete = 500; // wait before re-typing

        function type() {
            const currentText = originalText.substring(0, charIndex);
            setText(currentText);

            if (!isDeleting && charIndex < originalText.length) {
                charIndex++;
                timer = setTimeout(type, typeSpeed);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                timer = setTimeout(type, deleteSpeed);
            } else if (!isDeleting && charIndex === originalText.length) {
                isDeleting = true;
                timer = setTimeout(type, delayAfterType);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                timer = setTimeout(type, delayAfterDelete);
            }
        }

        timer = setTimeout(type, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <h1 className="title">
            {text}
            <span className="cursor">|</span>
        </h1>
    );
}
