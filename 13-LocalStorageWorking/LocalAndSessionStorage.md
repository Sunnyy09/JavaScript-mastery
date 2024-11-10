# Web Storage API: `localStorage` and `sessionStorage`

The Web Storage API provides mechanisms for storing key-value pairs in the browser. It includes two main types of storage: `localStorage` and `sessionStorage`. This guide covers the differences between the two and provides usage examples.

## 1. `localStorage`

### Overview

- **Data Persistence**: Data stored in `localStorage` does not expire. It remains even after the browser is closed and reopened.
- **Usage**: Ideal for data that should persist across sessions, such as user preferences, theme settings, or cart items.
- **Capacity**: Usually around 5MB, depending on the browser.

### Example of `localStorage`

```javascript
// Setting an item in localStorage
localStorage.setItem("username", "JohnDoe");

// Retrieving an item from localStorage
const username = localStorage.getItem("username");
console.log(username); // Output: JohnDoe

// Removing an item from localStorage
localStorage.removeItem("username");

// Clearing all data in localStorage
localStorage.clear();
```

### Example Scenario

Let's say we want to store a theme preference. If a user selects "dark mode," we can save this preference in localStorage.

If a user selects a theme preference (e.g., "dark mode"), we can store this preference in `localStorage` to apply it each time they visit.

```javascript
// Set theme preference
localStorage.setItem("theme", "dark");

// Check theme preference and apply it
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
}
```

## 2. `sessionStorage`

### Overview

- **Data Persistence**: Data in `sessionStorage` persists only for the duration of the session (as long as the browser tab is open). It is cleared once the tab is closed.
- **Usage**: Best suited for data needed only during a single session, like login status or temporary form data.
- **Capacity**: Around 5MB, similar to `localStorage`.

### Example of `sessionStorage`

```javascript
// Setting an item in sessionStorage
sessionStorage.setItem("sessionID", "123456");

// Retrieving an item from sessionStorage
const sessionID = sessionStorage.getItem("sessionID");
console.log(sessionID); // Output: 123456

// Removing an item from sessionStorage
sessionStorage.removeItem("sessionID");

// Clearing all data in sessionStorage
sessionStorage.clear();
```

### Example Scenario

Let’s say a user is filling out a multi-step form, and we want to keep track of the current step in the form within the same session.
For a multi-step form, we can store the user's current step in `sessionStorage` to maintain it across page reloads in the same session.

```javascript
// Save the current step in sessionStorage
sessionStorage.setItem("currentStep", "2");

// Retrieve the current step when the page loads
const currentStep = sessionStorage.getItem("currentStep");
if (currentStep) {
  console.log(`User is on step ${currentStep}`);
}
```

## Summary: `localStorage` vs. `sessionStorage`

| Feature           | `localStorage`                     | `sessionStorage`                   |
| ----------------- | ---------------------------------- | ---------------------------------- |
| Persistence       | Permanent, unless manually deleted | Session-only, clears on tab close  |
| Typical Use Cases | Preferences, theme, cart items     | Temporary session data, form steps |
| Data Capacity     | Around 5MB                         | Around 5MB                         |

Both `localStorage` and `sessionStorage` are valuable tools for enhancing user experience and managing client-side data within web applications.
