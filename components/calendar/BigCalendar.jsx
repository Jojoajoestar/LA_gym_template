import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ReactTooltip from "react-tooltip";
import GlobalStyle from "./GlobalStyle";
import Filter from "./Filter";

/* BigCalendar Component:
 * This component displays a FullCalendar with events fetched from a JSON file.
 * It includes a filter to search events by title and a modal to show event details. 
 */
const BigCalendar = () => {
  // State variables and hooks
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  const [selectedEvent, setSelectedEvent] = useState(null); 
  const [filter, setFilter] = useState("");
  const [events, setEvents] = useState([]);

  // Fetch event data on component mount and update the events state when the JSON file changes
  useEffect(() => {
    // Fetch event data from the JSON file
    fetch("/classData.json") 
      .then((response) => response.json())  
      // Map the fetched data to create formatted events and update the events state
      .then((data) => {     
        // Format the event data to match the FullCalendar event format
        const formattedEvents = data.classes.map((event) => ({
          title: event.title,
          date: event.date,
          extendedProps: {
            description: event.description,
            time: event.time,
            instructor: event.instructor,
            location: event.location
          }
        }));
        // Update the events state with the formatted events
        setEvents(formattedEvents); 
      })
      // Log any errors fetching the data
      .catch((error) => console.error("Error fetching class data:", error));
  }, []);

  // Show event details in a modal when an event is clicked
  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setModalIsOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  // Filter events based on the search filter
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(filter.toLowerCase())
  );

  return ( 
    // Main container for the BigCalendar component
    <div className="container mx-auto px-4">
      <GlobalStyle /> 
      <Filter filter={filter} setFilter={setFilter} />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]} 
        initialView="dayGridMonth" 
        events={filteredEvents}   
        eventClick={handleEventClick} 
        editable={true}
        selectable={true}
        dayMaxEvents={true}
        validRange={{
          start: new Date().toISOString().split("T")[0],
          end: new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString().split("T")[0],
        }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        eventContent={(eventInfo) => ( 
          <div data-tip={eventInfo.event.extendedProps.description} className="flex flex-col items-center text-center px-2">
            <ReactTooltip />
            <b className="block overflow-hidden text-ellipsis">{eventInfo.timeText}</b>
            <i className="block overflow-hidden text-ellipsis">{eventInfo.event.title}</i>
          </div>
        )}
      />
      <Modal open={modalIsOpen} onClose={handleCloseModal} center>  
        {selectedEvent && (
          <div className="p-4 bg-gray-800 text-white rounded-md">
            <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
            <p className="mb-4">{selectedEvent.extendedProps.description}</p>
            <p className="mb-4"><strong>Time:</strong> {selectedEvent.extendedProps.time}</p>
            <p className="mb-4"><strong>Instructor:</strong> {selectedEvent.extendedProps.instructor}</p>
            <p className="mb-4"><strong>Location:</strong> {selectedEvent.extendedProps.location}</p>
            <p className="mb-4"><strong>Note:</strong> Please arrive 10 minutes early to set up.</p>
            <p className="mb-4"><strong>Contact:</strong> For more information, call us at (123) 456-7890 or email info@gym.com.</p>
            <p className="mb-4"><strong>Equipment:</strong> Please bring your own yoga mat and water bottle.</p>
            <button className="btn-primary">Book Now</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BigCalendar;
