# Crypto Dashboard

A simple and responsive cryptocurrency dashboard for tracking performance metrics like Bitcoin price, market cap, and more. This project is built using **React** for the frontend and demonstrates responsive design principles.

---

## Features

- Performance metrics visualization (e.g., Bitcoin price, Market Cap, All-Time High/Low)
- Responsive design for mobile, tablet, and desktop views
- Clean UI for easy navigation between different sections (Performance, About, Portfolio, Market)
- Styled with CSS for a consistent and user-friendly experience

---

## Project Structure

- **Components**: Reusable components like `Header`, `SlidingHeader`.
- **Pages**: Different sections such as `About`, `Performance`, `Portfolio`, and `Market`.
- **Styles**: CSS files for styling individual sections (e.g., `Performance.css`, `About.css`).
- **App.js**: Main file to handle the layout and navigation structure of the project.

---

## Flow of the Project

1. The application starts with the **Header** component for navigation.
2. The main content includes a **Dashboard** for summary and navigation to different sections.
3. Sections such as **Performance**, **About**, **Portfolio**, and **Market** are organized in a vertical layout within the `sections-wrapper`.
4. Each section has its respective CSS file for styling and responsiveness.
5. The Performance card is styled independently but aligns with the responsiveness of the other sections like the About card.

---

## Steps to Clone and Run the Project

```bash
# Clone the repository
git clone <repository-url>
cd <repository-folder>

# Install dependencies
npm install

# Run the application
npm start

# Open in browser
Navigate to http://localhost:3000 in your browser to view the app.
```

## File Overview 

# App.js
The main file that organizes the structure of the project.

# App.css
Handles global styling for the project and layout adjustments.

# Performance.css
CSS for the Performance section, with responsive design principles applied.

# About.css
CSS for the About section, used as a reference for making the Performance section responsive.

---

## Notes

- This project is focused on UI and does not include backend integration for real-time cryptocurrency data.
- You can extend this project by adding APIs or state management libraries like Redux for better scalability.

## Contributions

Feel free to contribute by forking the repository, making your changes, and submitting a pull request.

## License

This project is open-source and available under the MIT License.
