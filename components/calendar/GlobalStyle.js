import { createGlobalStyle } from "styled-components";

/**
 * Global styles for the FullCalendar component and general button styles.
 * Uses styled-components to apply styles globally.
 */
const GlobalStyle = createGlobalStyle`
  .fc {
    --fc-bg-color: black;
    --fc-neutral-bg-color: #1a1a1a; 
    --fc-border-color: #444;
    --fc-text-color: white;
    --fc-event-bg-color: #ff3939;
    --fc-event-border-color: #ff3939;
    --fc-event-text-color: white;
    --fc-today-bg-color: #1a1a1a;
    --fc-hover-bg-color: #333;
    --fc-highlight-bg-color: #444;
    --fc-selected-bg-color: #444;
  }

  .fc .fc-daygrid-day:hover {
    background-color: var(--fc-hover-bg-color);
  }

  .fc .fc-daygrid-day-top {
    justify-content: center;
  }

  .fc .fc-daygrid-event {
    background-color: var(--fc-event-bg-color);
    border-color: var(--fc-event-border-color);
    color: var(--fc-event-text-color);
    padding: 5px; /* Increase padding for better text fit */
  }

  .fc .fc-daygrid-day-number {
    color: var(--fc-text-color);
  }

  .fc .fc-toolbar-title {
    color: var(--fc-text-color);
  }

  .fc .fc-daygrid-day {
    border: 1px solid var(--fc-border-color);
    padding: 5px; /* Increase padding for better text fit */
  }

  .fc .fc-daygrid-day-frame {
    background-color: var(--fc-neutral-bg-color);
  }

  .btn-primary {
    background-color: #ff3939;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn-primary:hover {
    background-color: #e53939;
  }

  /* Ensure tooltip text color is visible */
  .react-tooltip {
    color: black;
    background-color: white;
    border-radius: 4px;
    padding: 5px;
  }
`;

export default GlobalStyle;
