import MergeSort from "./merge-sort";
import fibsRec from "./fibonacci";

function MergePopulateDom(arr) {
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

function FibsPopulateDom(arr) {
    const div = document.querySelector(".fibs-result");

    div.textContent = "";
  

    arr.forEach((val, index) => {
        const p = document.createElement("p");
        p.classList.add("results");

        p.textContent = `Index: ${index} Value: ${val} `;

        // ol.appendChild(li)
        div.appendChild(p);
    });
}

function mergeDom() {
    const inputNum = document.getElementById("merge-sort");
    const button = document.getElementById("merge-btn");
    
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const val = inputNum.value.split(',').map(Number);
        const merge = MergeSort(val);

        MergePopulateDom(merge);
        inputNum.value = "";
    })
};

function fibsDom() {
    const inputNum = document.getElementById("fibs");
    const button = document.getElementById("fibs-btn");
    
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const val = inputNum.value;
        const fibs = fibsRec(val);

        FibsPopulateDom(fibs);
        inputNum.value = "";
    })
};


function showMerge() {
    const container = document.querySelector(".wrapper-merge");
    const button = document.querySelector(".merge-btn");

    const fibs = document.querySelector(".wrapper-fibs");

    button.addEventListener("click", () => {
        if(!container.classList.contains("wrapper-merge-on")) {
            container.classList.add("wrapper-merge-on");
            container.classList.remove("wrapper-merge");

            fibs.classList.remove("wrapper-fibs-on");
            fibs.classList.add("wrapper-fibs");

        }; 
    });
};

function showFibs() {
    const container = document.querySelector(".wrapper-fibs");
    const button = document.querySelector(".fibs-btn");

    const merge = document.querySelector(".wrapper-merge");


    button.addEventListener("click", () => {
        if(!container.classList.contains("wrapper-fibs-on")) {
            container.classList.add("wrapper-fibs-on");

            merge.classList.remove("wrapper-merge-on");
            merge.classList.add("wrapper-merge");
            
            
            container.classList.remove("wrapper-fibs");
        }; 
        
    });
};


export default function DomControl() {
   return {
        mergeDom,
        fibsDom,
        showMerge,
        showFibs,
   }
}

