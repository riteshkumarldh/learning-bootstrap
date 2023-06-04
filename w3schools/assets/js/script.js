const data = [
  {
    id: 1,
    display: "HTML",
    name: "Learn HTML",
    about:
      "Start learning HTML with w3schools fundamentals course. HTML is the standard markup language for creating web pages.",
    price: "$95",
    saved: false,
    bgColor: "#232532",
    fColor: "#fdc0c7",
  },
  {
    id: 2,
    display: "CSS",
    name: "Learn CSS",
    about:
      "Start learning CSS with w3schools fundamentals course. CSS is the language we use to style an HTML document.",
    price: "$105",
    saved: false,
    bgColor: "#232532",
    fColor: "#fdc0c7",
  },
  {
    id: 3,
    display: "Javascript",
    name: "Learn JavaScript",
    about:
      "Start learning HTML with w3schools fundamentals course. HTML is the standard markup language for creating web pages.",
    price: "$195",
    saved: false,
    bgColor: "#232532",
    fColor: "#fdc0c7",
  },
  {
    id: 4,
    display: "Front End",
    name: "Learn FrontEnd",
    about:
      "Start learning HTML with w3schools fundamentals course. HTML is the standard markup language for creating web pages.",
    price: "$195",
    saved: false,
    bgColor: "#daefe2",
    fColor: "#222431",
  },
  {
    id: 5,
    display: "SQL",
    name: "Learn SQL",
    about:
      "Start learning HTML with w3schools fundamentals course. HTML is the standard markup language for creating web pages.",
    price: "$195",
    saved: false,
    bgColor: "#fff4a4",
    fColor: "#222431",
  },
  {
    id: 6,
    display: "Javascript",
    name: "Learn JavaScript",
    about:
      "Start learning HTML with w3schools fundamentals course. HTML is the standard markup language for creating web pages.",
    price: "$195",
    saved: false,
    bgColor: "#232532",
    fColor: "#fdc0c7",
  },
  {
    id: 7,
    display: "Javascript",
    name: "Learn JavaScript",
    about:
      "Start learning HTML with w3schools fundamentals course. HTML is the standard markup language for creating web pages.",
    price: "$195",
    saved: false,
    bgColor: "#232532",
    fColor: "#fdc0c7",
  },
  {
    id: 8,
    display: "Javascript",
    name: "Learn JavaScript",
    about:
      "Start learning HTML with w3schools fundamentals course. HTML is the standard markup language for creating web pages.",
    price: "$195",
    saved: false,
    bgColor: "#232532",
    fColor: "#fdc0c7",
  },
];

const coursesEl = document.querySelector(".courses");

const inputEl = document.querySelector("[data-input]");

let filter = [...data];
inputEl.addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();
  filter = data.filter((item) => {
    return item.name.toLowerCase().indexOf(val) >= 0;
  });
  console.log(filter);
  mapData();
});

const mapData = () => {
  const allCourses = filter
    .map((item) => {
      return `
    <div class="col-3 gy-5 gx-4">
              <div class="card">
                <div
                  class="card-img-top d-flex align-items-center justify-content-center h2"
                  style="
                    color: ${item.fColor};
                    height: 200px;
                    background-color: ${item.bgColor};
                  "
                >
                  ${item.display}
                </div>
                <div class="card-body">
                  <p class="lead">${item.name}</p>
                  <hr />
                  <small>
                    ${item.about}
                  </small>
                  <figure>
                    <img width="20" src="./assets/img/logo.png" alt="logo" />
                  </figure>
                  <hr />
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div>
                      <h5>self-paced</h5>
                      <h4 style="color: #04aa6d">${item.price}</h4>
                    </div>
                    <div style="width: 15%" onclick="favorite(${item.id}, this)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="MuiSvgIcon-root MuiSvgIcon-colorAction"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        style="color: rgb(87, 86, 86)"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `;
    })
    .join("");
  coursesEl.innerHTML = allCourses;
};

mapData();

const countEl = document.querySelector("[data-count]");
const savedCourses = [];

const favorite = (id, th) => {
  th.classList.toggle("saved");
  const index = data.findIndex((item) => item.id === id);
  if (data[index].saved === true) {
    data[index].saved = false;
  } else {
    data[index].saved = true;
  }

  const savedIndex = savedCourses.findIndex((it) => it === id);
  console.log(savedIndex);
  if (savedIndex >= 0) {
    savedCourses.splice(savedIndex, 1);
  } else {
    savedCourses.push(id);
  }
  countEl.innerText = savedCourses.length;
};
