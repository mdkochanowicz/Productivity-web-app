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
    source: "https://goo.gl/maps/bKJ74vEWgHmDyidZ9",
    category: "learning",
    checkDone: 11,
    checkUndone: 2,
    checkImportant: 0,
    createdIn: 2023,
  },
  {
    id: 3,
    text: "Fitness",
    source: "https://goo.gl/maps/8JZih2SD1J1f27gDA",
    category: "sport",
    checkDone: 8,
    checkUndone: 3,
    checkImportant: 1,
    createdIn: 2023,
  },
];

const CATEGORIES = [
  { id: 1, name: "learning", color: "#64d6" },
  { id: 2, name: "sport", color: "#f5cd79" },
  { id: 3, name: "entertainment", color: "#f48687" },
  { id: 4, name: "social", color: "#6e9cd4" },
  { id: 5, name: "home", color: "#e9a8e4" },
];

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".category-form");
const activitiesList = document.querySelector(".activities-list");

//Create DOM elements: Render activities list
activitiesList.innerHTML = "";

//Load data from Supabase
loadActivities();

async function loadActivities() {
  const res = await fetch(
    "https://ngasdvqwznbwwyvbsmuo.supabase.co/rest/v1/activities",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nYXNkdnF3em5id3d5dmJzbXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwNjIyNTcsImV4cCI6MjAwNDYzODI1N30.-elXki2o7nePNejNrSiHxnKDMGG7hzBt7Kr-tsDd-sM",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nYXNkdnF3em5id3d5dmJzbXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwNjIyNTcsImV4cCI6MjAwNDYzODI1N30.-elXki2o7nePNejNrSiHxnKDMGG7hzBt7Kr-tsDd-sM",
      },
    }
  );
  const data = await res.json();
  //console.log(data);
  //const filteredData = data.filter(
  //   (activity) => activity.category === "Learning"
  //);

  createActivitiesList(data);
}

function createActivitiesList(dataArray) {
  //activitiesList.insertAdjacentHTML("afterbegin", "<li>Proba</li>");

  const htmlArr = dataArray.map(
    (activity) => `<li class="activity">
  <p>
  ${activity.text}
    <a
      class="place"
      href="${activity.place}"
      target="_blank"
    >(place)</a>
  </p>
  <span class="category" style="background-color: ${
    CATEGORIES.find((cat) => cat.name === activity.category).color
  }">${activity.category}</span>
  
  </li>`
  );

  console.log(htmlArr);
  const html = htmlArr.join("");
  activitiesList.insertAdjacentHTML("afterbegin", html);
}

//Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Add activity";
  }
});

console.log([1, 3, 4, -44, 54].filter((el) => el > 3));
console.log([1, 3, 4, -44, 54].find((el) => el > 3));
