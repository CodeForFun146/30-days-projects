const check = document.getElementById('check');
const btn = document.getElementById('btn');
const Dbtn = document.getElementById('Dbtn');


btn.addEventListener("click", () => {
    const wrapper = document.createElement("div");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter text";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    wrapper.appendChild(input);
    wrapper.appendChild(checkbox);

    check.appendChild(wrapper);

    check.appendChild(document.createElement("br"));

    if(checkbox.checked)
    {
        checkbox.style.color="green";
    }
});

Dbtn.addEventListener("click", () => {
    const lastItem = check.lastElementChild;

    if (lastItem) {
        lastItem.remove();
    }
});