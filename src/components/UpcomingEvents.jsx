import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import getEvents from "../../actions/getEvents";
import { EventItem } from "./EventItem";

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        const eventsData = await getEvents();
        setEvents(eventsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events. Please try again later.");
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="mb-20">
        <div className="flex justify-center items-center py-20">
          <p className="text-lg text-gray-600 dark:text-gray-300">Loading events...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mb-20">
        <div className="flex justify-center items-center py-20">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row-reverse items-center justify-between mb-8"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 md:mb-0">
          Upcoming Events
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventItem key={event.id || index} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}