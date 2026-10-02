Roster Card Renderer

## The Problem

The IT313 registrar gave a list of four enrolled students. This Expo (React Native) app renders each student as a reusable card showing name, course, and units, with a "Full Load" label only on students whose isFullLoad is true. A header shows the total number of students, computed from the array.

## Component Structure

- **StudentCard**: a functional component that receives name, course, units, and isFullLoad as destructured props. It shows them in JSX and uses `{isFullLoad && ...}` to display the Full Load label conditionally. It also holds a small "present" state, toggled by tapping the card.
- **StudentRoster**: the parent component. It holds the students array, shows the count with a template literal, has a Reverse Order button, and uses `.map()` with `key={student.id}` to render one StudentCard per student inside a single root View.
- **app/index.tsx**: the entry file that renders StudentRoster.

## Key Experiment

Using the array index as the key made the checkmark stay in the same slot after reversing, so it ended up on the wrong student. With `key={student.id}`, the checkmark follows the student.

## How to Run

1. `npm install`
2. `npx expo start`
3. Scan the QR code with Expo Go, or press `a` for an Android emulator.
