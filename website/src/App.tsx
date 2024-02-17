import "./styles.css";
import ActionSheet, { Action } from "reactjs-action-sheet";

export default function App() {
    return (
        <div className="container">
            <h1>React.js Action Sheet</h1>
            <h2>A React version of the iOS action sheet</h2>
            <div className="buttons">
                <ActionSheet
                    actions={[
                        <Action>Action 1</Action>,
                        <Action>Action 2</Action>,
                        <Action destructive>Action 3</Action>,
                    ]}
                >
                    <button id="trigger">Open Sheet</button>
                </ActionSheet>
                <a href="https://github.com/nascjoao/reactjs-action-sheet">
                    GitHub
                </a>
            </div>
        </div>
    );
}
