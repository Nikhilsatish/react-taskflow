# ✅ TaskFlow — React Todo Manager

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-green)
![Topics](https://img.shields.io/badge/Topics-R1--R10-teal)

A clean, fully functional task manager built from scratch with React.
Project 1 of my 3-part React learning series — covers all fundamentals
from JSX to controlled forms with validation.

**[Live Demo →](https://react-taskflow-mu.vercel.app/)**

---

## 📸 Preview
<img width="1920" height="681" alt="image" src="https://github.com/user-attachments/assets/3b25d24b-f851-4e69-bef4-55e2b8511df8" />

---

## ✨ Features

- Add, delete, and toggle tasks as complete
- Filter by **All / Active / Done** tabs
- Priority badges — High / Medium / Low
- Form validation with inline error messages
- Empty state when no tasks match the filter
- Clean component-based architecture

---

## 🧠 React Concepts Practiced

| Topic | What I implemented |
|---|---|
| **R1 — What is React** | Scaffolded with Vite, understood why React over vanilla JS |
| **R2 — JSX** | Wrote JSX, understood it compiles to `React.createElement` |
| **R3 — Components** | `Header`, `TaskList`, `TaskCard`, `TaskForm`, `FilterTabs` |
| **R4 — Props** | Passed task data `App → TaskList → TaskCard`, felt the drilling |
| **R5 — State** | `tasks[]` in `useState`, never mutated — always spread |
| **R6 — Events** | `onClick` delete/toggle, `onChange` inputs, `onSubmit` form |
| **R7 — Conditional rendering** | Empty state, badge colors, done/undone styles |
| **R8 — Lists & keys** | `.map()` over tasks, `key={task.id}` not index |
| **R9 — Controlled inputs** | `value + onChange` on every field, compared with `useRef` |
| **R10 — Forms** | Multi-field form with title, priority, validation, reset |

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Header.jsx        # logo + Add Task button
│   ├── FilterTabs.jsx    # All / Active / Done tabs
│   ├── TaskList.jsx      # maps tasks → TaskCard, empty state
│   ├── TaskCard.jsx      # single task row
│   └── TaskForm.jsx      # controlled form with validation
├── App.jsx               # all state lives here
└── main.jsx
```

---

## 🔑 Key Learnings

**1. Derived state vs stored state**
Storing `filteredTasks` in separate `useState` caused sync bugs.
Fixed by calculating inline: `tasks.filter(...)`. Never duplicate state.

**2. The `key={index}` bug**
Index as key caused React to reuse the wrong DOM node on delete.
Checkboxes visually shifted. `key={task.id}` fixes it.

**3. Controlled inputs vs uncontrolled**
Uncontrolled inputs (useRef) can't validate keystroke-by-keystroke
or reset programmatically. Controlled inputs make both trivial.

---

## 🚀 Run Locally

```bash
git clone https://github.com/Nikhilsatish/react-taskflow.git
cd react-taskflow
npm install
npm run dev
```

---

## 🛠️ Built With

- [React 18](https://react.dev)
- [Vite](https://vitejs.dev)
- Vanilla CSS — no UI libraries

---

## 📌 Part of My React Series

| Project | Topics | Status |
|---|---|---|
| **TaskFlow** (this one) | R1–R10 Fundamentals | ✅ Complete |
| [ExpenseTracker](https://github.com/Nikhilsatish/expense-tracker-react) | R11–R20 Hooks + Context + Router | ⏳ Upcoming |
| [DevBoard](https://github.com/Nikhilsatish/devboard) | R21–R30 Redux + Advanced | ⏳ Upcoming |

---

## 👨‍💻 Author

**Nikhil M S** — Senior Software Engineer
[GitHub](https://github.com/Nikhilsatish) · [LinkedIn](https://linkedin.com/in/nikhil-sathish)
