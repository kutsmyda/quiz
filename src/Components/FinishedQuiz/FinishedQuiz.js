import styles from './FinishedQuiz.module.css'
import React from 'react';

function FinishedQuiz(props) {
    return (
        <div className={styles.FinishedQuiz}>
<ul>
    <li>
        <strong>1 </strong>
        питаннячко тут
        ICON!!!!
    </li>
    <li>
        <strong>2 </strong>
        питаннячко тут 2 wrong
        ICON!!!!
    </li>
</ul>

            <p>Правильно 4 з 10</p>

            <div>
                <button>Повторити</button>
            </div>
        </div>
    );
}

export default FinishedQuiz;