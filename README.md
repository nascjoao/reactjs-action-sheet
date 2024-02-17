# React.js Action Sheet

https://github.com/nascjoao/reactjs-action-sheet/assets/56273267/a10120e0-091f-4233-b2bb-86396c6296e8

**reactjs-action-sheet** is built on top of [Vaul](https://github.com/emilkowalski/vaul).

Apple's [action sheet](https://developer.apple.com/design/human-interface-guidelines/action-sheets) is common native a modal view that presents choices related to an action people initiate.
This component brings the same experience, but for the web.

## Usage

To start using the library, install it in your project:,

```bash
npm install reactjs-action-sheet
```

Use the action sheet in your app.

```jsx
import ActionSheet, { Action } from "reactjs-action-sheet";

function MyComponent() {
    return (
        <ActionSheet
            actions={[
                <Action>Action 1</Action>,
                <Action>Action 2</Action>,
                <Action destructive>Action 3</Action>,
            ]}
        >
            <button>open</button>
        </ActionSheet>
    );
}
```
