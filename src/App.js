import "./style.css";

const initialActivities = [
  {
    id: 1,
    text: "German language",
    place: "https://goo.gl/maps/eRfWFwuUi9UewzLg9",
    category: "learning",
    checkDone: 3,
    checkUndone: 9,
    checkImportant: 4,
    createdIn: 2023,
  },
  {
    id: 2,
    text: "Mathematics",
    place: "https://goo.gl/maps/bKJ74vEWgHmDyidZ9",
    category: "learning",
    checkDone: 11,
    checkUndone: 2,
    checkImportant: 0,
    createdIn: 2023,
  },
  {
    id: 3,
    text: "Fitness",
    place: "https://goo.gl/maps/8JZih2SD1J1f27gDA",
    category: "sport",
    checkDone: 8,
    checkUndone: 3,
    checkImportant: 1,
    createdIn: 2023,
  },
];

const CATEGORIES = [
  { name: "learning", color: "#64d6" },
  { name: "sport", color: "#f5cd79" },
  { name: "entertainment", color: "#f48687" },
  { name: "social", color: "#6e9cd4" },
  { name: "home", color: "#e9a8e4" },
];

function App() {
  const appTitle = "Productivity App";

  return (
    <>
      {/* header */}
      <header className="header">
        <h1>{appTitle}</h1>
        <button className="btn btn-large btn-open">Add activity</button>
      </header>

      <NewActivityForm />

      <main className="main">
        <CategoryFilter />
        <ActivityList />
      </main>
    </>
  );
}

function NewActivityForm() {
  return <form className="activity-form">New activity form</form>;
}

function CategoryFilter() {
  return <aside>Category filter</aside>;
}

function ActivityList() {
  //temporary
  const activities = initialActivities;

  return (
    <section>
      <ul className="activities-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity">
            <p>
              {activity.text}
              <a className="place" href={activity.place} target="_blank">
                (place)
              </a>
            </p>
            <span
              className="category"
              style={{
                backgroundColor: CATEGORIES.find(
                  (cat) => cat.name === activity.category
                ).color,
              }}
            >
              {activity.category}
            </span>
            <div className="done-buttons">
              <button>( ͡° ͜ʖ ͡°) Done: {activity.checkDone}</button>
              <button>( ͠° ͟ʖ ͡°) Undone: {activity.checkUndone}</button>
              <button>(ʘ ʖ̯ ʘ)Important: {activity.checkImportant}</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
