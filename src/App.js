import "./style.css";
import { useState } from "react";

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

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span style={{ fontSize: "40px" }}>{count}</span>
      <button className="btn btn-large" onClick={() => setCount((c) => c + 1)}>
        +1
      </button>
    </div>
  );
}

function App() {
  const [showForm, setShowForm] = useState(false);
  const [activities, setActivities] = useState(initialActivities);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />

      {showForm ? (
        <NewActivityForm
          setActivities={setActivities}
          setShowForm={setShowForm}
        />
      ) : null}

      <main className="main">
        <CategoryFilter />
        <ActivityList activities={activities} />
      </main>
    </>
  );
}

function Header({ showForm, setShowForm }) {
  const appTitle = "Productivity App";

  return (
    <header className="header">
      <h1>{appTitle}</h1>
      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Add activity"}
      </button>
    </header>
  );
}

const CATEGORIES = [
  { name: "learning", color: "#64d6" },
  { name: "sport", color: "#f5cd79" },
  { name: "fun", color: "#f48687" },
  { name: "social", color: "#6e9cd4" },
  { name: "home", color: "#e9a8e4" },
  { name: "work", color: "#f5cd79" },
  { name: "other", color: "#f48687" },
];

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

function NewActivityForm({ setActivities, setShowForm }) {
  const [text, setText] = useState("");
  const [place, setPlace] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(text, place, category);

    if (text && isValidHttpUrl(place) && category) {
      const newActivity = {
        id: Math.round(Math.random() * 1000000),
        text,
        place,
        category,
        checkDone: 0,
        checkUndone: 0,
        checkImportant: 0,
        createdIn: new Date().getFullYear(),
      };

      setActivities((activities) => [newActivity, ...activities]);

      setText("");
      setPlace("");
      setCategory("");

      setShowForm(false);
    }
  }

  return (
    <form className="activity-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Activity"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        value={place}
        type="text"
        placeholder="Place"
        onChange={(e) => setPlace(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose category:</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Add</button>
    </form>
  );
}

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li className="category-list">
          <button className="btn btn-all-cat">All</button>
        </li>
        {CATEGORIES.map((cat) => (
          <li key={cat.name} className="category-list">
            <button
              className="btn btn-cat"
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ActivityList({ activities }) {
  return (
    <section>
      <ul className="activities-list">
        {activities.map((activity) => (
          <Activity key={activity.id} activity={activity} />
        ))}
      </ul>
      <p>There are {activities.length} activities.</p>
    </section>
  );
}

function Activity({ activity }) {
  return (
    <li className="activity">
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
  );
}

export default App;
