const tabs = document.querySelectorAll(".tab");
let active = tabs[0];

for (let i = 0; i < tabs.length; ++i) {
    let t = tabs[i];

    t.addEventListener("click", toggleActiveTab);
}

function toggleActiveTab(event) {
    let current = event.target;
    current.classList.add("active");
    active.classList.remove("active");
    active = current;
}