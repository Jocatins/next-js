import { useState } from "react";
import { useRouter } from "next/router";

function EventsList({ eventList }) {
  const [sportsEvents, setSportEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(sportsEventsUrl);
    const data = await response.json();
    console.log("sports-data", data);
    setSportEvents(data);
    //   router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <h3>List of Events</h3>
      <button onClick={fetchSportsEvents}>fetchSportsEvents</button>
      {sportsEvents.map((event, index) => {
        return (
          <div key={index}>
            <h4>
              {event.id}. {event.title} {event.category}
            </h4>
            <p>{event.date}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}
export default EventsList;

const sportsEventsUrl = `http://localhost:4000/events?category=sports`;
const eventsUrl = "http://localhost:4000/events";

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
