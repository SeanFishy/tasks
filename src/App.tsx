import React, { useState } from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
import { Quizzer } from "./quizzer/Quizzer";
import ApplicationSketch from "./assets/Sketch.jpg";

function App(): JSX.Element {
    const [oldTasks, setOldTasks] = useState<boolean>(false);
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Quizzer></Quizzer>
            <h3>Completed Items</h3>
            <ul>
                <li>Included Sketch below this List</li>
                <li>
                    Quizes are displayed with their title, description, and
                    number of questions
                </li>
                <li>Included Tests to check if quiz is displayed</li>
                <li>Quizes can be deleted</li>
                <li>Included Tests for Deleting Quizes</li>
                <li>Quizes can be added</li>
                <li>Included Tests for adding Quizes</li>
                <li>You can start taking a quiz</li>
                <li>
                    When taking a quiz, you can see a list of the current
                    Questions
                </li>
                <li>Included tests to check if questions are displayed</li>
                <li>Score is visible and can be increased</li>
                <li>Added Test for checking if score is visible</li>
                <li>
                    Included Test for checking if score is updated after
                    answering a question
                </li>
                <li>
                    Quiz questions can be either multiple choice or short answer
                </li>
                <li>
                    Included Test to check if questions can be either multiple
                    choice or short answer
                </li>
                <li>You can add Questions</li>
                <li>
                    Included Test for adding a question and checking if it
                    appears in the list of questions with the inputted
                    information
                </li>
                <li>Added ability to answer multiple choice questions</li>
                <li>Included Test for answering multiple choice questions</li>
                <li>Added ability to answer short answer questions</li>
                <li>Included Test for answering short answer questions</li>
                <li>Added button to clear answers for a quiz question</li>
                <li>
                    Included Test for checking if clearing the answers decreases
                    the score and resets the questions to being unanswered
                </li>
                <li>Added ability to delete questions from a quiz</li>
                <li>Included Test for deleting a question</li>
                <li>Added ability to publish or unpublish a question</li>
                <li>Included Test for publishing or unpublishing a question</li>
            </ul>
            {
                <img
                    src={ApplicationSketch}
                    alt="The sketch of the application"
                />
            }
            <button onClick={() => setOldTasks(!oldTasks)}>
                Show Previous Task Components
            </button>
            Currently: {oldTasks.toString()}
            {oldTasks && (
                <div>
                    <hr></hr>
                    <CheckAnswer expectedAnswer="42"></CheckAnswer>
                    <hr></hr>
                    <GiveAttempts></GiveAttempts>
                    <hr></hr>
                    <EditMode></EditMode>
                    <hr></hr>
                    <ChangeColor></ChangeColor>
                    <hr></hr>
                    <MultipleChoiceQuestion
                        options={["a", "b", "c"]}
                        expectedAnswer="b"
                    ></MultipleChoiceQuestion>
                    <hr></hr>
                    <DoubleHalf></DoubleHalf>
                    <hr></hr>
                    <ChooseTeam></ChooseTeam>
                    <hr></hr>
                    <ColoredBox></ColoredBox>
                    <hr></hr>
                    <ShoveBox></ShoveBox>
                    <hr></hr>
                    <Counter></Counter>
                    <hr />
                    <RevealAnswer></RevealAnswer>
                    <hr />
                    <StartAttempt></StartAttempt>
                    <hr />
                    <TwoDice></TwoDice>
                    <hr />
                    <ChangeType></ChangeType>
                    <hr />
                    <CycleHoliday></CycleHoliday>
                </div>
            )}
        </div>
    );
}

export default App;
