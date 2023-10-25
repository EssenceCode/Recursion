import MergeSort from "./merge-sort";

function PopulateDom(arr) {
    const div = document.querySelector(".merge-result");
    // const ol = document.createElement("ol");
    div.textContent = "";

    arr.forEach((val, index) => {
        const p = document.createElement("p");
        p.classList.add("results");

        p.textContent = `Index: ${index} Value: ${val} `;

        // ol.appendChild(li)
        div.appendChild(p);
    });
};


export default function DomControl() {
    const inputNum = document.getElementById("merge-sort");
    const button = document.getElementById("merge-btn");
    
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const val = inputNum.value.split(',').map(Number);
        const merge = MergeSort(val);

        PopulateDom(merge);
        inputNum.value = ""
    })
}

