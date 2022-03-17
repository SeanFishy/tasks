import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Question, QuestionType } from "../interfaces/question";
import { QuizQuestion } from "./QuizQuestion";
import { Quiz } from "./Quizzer";

interface takeQuizProp {
    // The type is "a function that consumes a boolean and returns nothing"
    setCurrQuiz: (newQuiz: number) => void;
    quizes: Quiz[];
    setQuizes: (newQuizes: Quiz[]) => void;
    currQuiz: number;
    score: number;
    setScore: (newScore: number) => void;
}
interface addQuestionProp {
    // The type is "a function that consumes a boolean and returns nothing"
    quizes: Quiz[];
    setQuizes: (newQuizes: Quiz[]) => void;
    name: string;
    body: string;
    setName: (newName: string) => void;
    setBody: (newBody: string) => void;
    currQuiz: number;
    type: QuestionType;
    setType: (newType: QuestionType) => void;
    options: string[];
    setOptions: (newOptions: string[]) => void;
    expected: string;
    setExpected: (newExpected: string) => void;
    points: number;
    setPoints: (newPoints: number) => void;
    option: string;
    setOption: (newOption: string) => void;
}
function printQuestions(
    ques: Question,
    score: number,
    setScore: (newScore: number) => void
): JSX.Element {
    return (
        <div>
            <div>{ques.name}</div>
            <div>{ques.body}</div>
            <div>Worth {ques.points} points</div>
            <QuizQuestion
                ques={ques}
                score={score}
                setScore={setScore}
            ></QuizQuestion>
        </div>
    );
}
function addQuestionHelp(curr: Quiz, name: string, body: string): Quiz {
    return {
        ...curr,
        questions: [
            ...curr.questions,
            {
                id: 5,
                name: name,
                body: body,
                type: "multiple_choice_question",
                options: [],
                expected: "",
                points: 1,
                published: true
            }
        ]
    };
}
function addQuestion({
    quizes,
    setQuizes,
    name,
    body,
    setName,
    setBody,
    currQuiz,
    type,
    setType,
    options,
    setOptions,
    expected,
    setExpected,
    points,
    setPoints,
    option,
    setOption
}: addQuestionProp): JSX.Element {
    return (
        <div>
            <Form.Group controlId="questionType">
                <Form.Label>Multiple Choice or Short Answer?</Form.Label>
                <Form.Select
                    value={type}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                        event.target.value === "multiple_choice_question"
                            ? setType("multiple_choice_question")
                            : setType("short_answer_question")
                    }
                >
                    <option value="multiple_choice_question">
                        Multiple Choice
                    </option>
                    <option value="short_answer_question">Short Answer</option>
                </Form.Select>
            </Form.Group>
            <Form.Group controlId="formQuestionName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setName(event.target.value)
                    }
                />
            </Form.Group>
            <Form.Group controlId="formQuestionBody">
                <Form.Label>Discription/Body:</Form.Label>
                <Form.Control
                    value={body}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setBody(event.target.value)
                    }
                />
            </Form.Group>
            <Form.Group controlId="formQuestionAnswer">
                <Form.Label>Expected Answer:</Form.Label>
                <Form.Control
                    value={expected}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setExpected(event.target.value)
                    }
                />
            </Form.Group>
            <Form.Group controlId="questionPoints">
                <Form.Label>How many Points is this question worth?</Form.Label>
                <Form.Control
                    type="number"
                    value={points}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setPoints(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            {type === "multiple_choice_question" && (
                <div>
                    <Form.Group controlId="formNewOption">
                        <Form.Label>Multiple Choice Option:</Form.Label>
                        <Form.Control
                            value={option}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setOption(event.target.value)}
                        />
                    </Form.Group>
                    <button onClick={() => setOptions([...options, option])}>
                        Add Option
                    </button>
                    <button onClick={() => setOptions([])}>
                        Clear Options
                    </button>
                    <div>Current Options:</div>
                    {options.map(
                        (curr: string): JSX.Element => (
                            <div key={curr}>{curr}</div>
                        )
                    )}
                </div>
            )}
            <button
                onClick={() =>
                    setQuizes(
                        quizes.map(
                            (curr: Quiz): Quiz =>
                                curr === quizes[currQuiz]
                                    ? addQuestionHelp(curr, name, body)
                                    : curr
                        )
                    )
                }
            >
                Add Question
            </button>
        </div>
    );
}
function endQuiz(
    quizes: Quiz[],
    currQuiz: number,
    setCurrQuiz: (newCurrQuiz: number) => void
): void {
    quizes[currQuiz].length = quizes[currQuiz].questions.length;
    setCurrQuiz(-1);
}
export function TakeQuiz({
    setCurrQuiz,
    quizes,
    setQuizes,
    currQuiz,
    score,
    setScore
}: takeQuizProp): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [type, setType] = useState<QuestionType>("multiple_choice_question");
    const [options, setOptions] = useState<string[]>([]);
    const [expected, setExpected] = useState<string>("");
    const [points, setPoints] = useState<number>(1);
    const [option, setOption] = useState<string>("");
    return (
        <div>
            {quizes[currQuiz].questions.map(
                (ques: Question): JSX.Element =>
                    printQuestions(ques, score, setScore)
            )}
            {edit &&
                addQuestion({
                    quizes,
                    setQuizes,
                    name,
                    body,
                    setName,
                    setBody,
                    currQuiz,
                    type,
                    setType,
                    options,
                    setOptions,
                    expected,
                    setExpected,
                    points,
                    setPoints,
                    option,
                    setOption
                })}
            <button onClick={() => endQuiz(quizes, currQuiz, setCurrQuiz)}>
                End Quiz
            </button>
            <button
                onClick={() => setEdit(!edit)}
                style={{ backgroundColor: "purple" }}
            >
                Edit Questions
            </button>
        </div>
    );
}
