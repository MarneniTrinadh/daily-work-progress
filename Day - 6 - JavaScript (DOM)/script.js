// //1.Shopping Cart Implementation
// const products = [
//     {
//         name: "Laptop",
//         price: 55000
//     },
//     {
//         name: "Mouse",
//         price: 1200
//     },
//     {
//         name: "Keyboard",
//         price: 2500
//     }
// ];

// let cart = [];

// function displayProducts() {

//     let productList = document.getElementById("productList");

//     productList.innerHTML = "";

//     for (let i = 0; i < products.length; i++) {

//         let div = document.createElement("div");

//         div.innerHTML = `
//             <h3>${products[i].name}</h3>
//             <p>₹${products[i].price}</p>
//         `;

//         let button = document.createElement("button");

//         button.textContent = "Add to Cart";

//         button.addEventListener("click", function () {
//             cart.push(products[i]);
//             displayCart();
//         });

//         div.appendChild(button);

//         productList.appendChild(div);
//     }
// }

// function displayCart() {

//     let cartList = document.getElementById("cartList");

//     cartList.innerHTML = "";

//     let total = 0;

//     for (let i = 0; i < cart.length; i++) {

//         total += cart[i].price;

//         let div = document.createElement("div");

//         div.innerHTML = `
//             ${cart[i].name} - ₹${cart[i].price}
//         `;

//         let button = document.createElement("button");

//         button.textContent = "Remove";

//         button.addEventListener("click", function () {

//             cart.splice(i, 1);

//             displayCart();
//         });

//         div.appendChild(button);

//         cartList.appendChild(div);
//     }

//     if (total > 5000) {
//         total = total - (total * 10 / 100);
//     }

//     document.getElementById("itemCount").textContent = cart.length;
//     document.getElementById("total").textContent = total;
// }

// displayProducts();

//2. Expense Tracker Implementation

let expenses = [];

function displayExpenses() {

    let list =
        document.getElementById("expenseList");

    list.innerHTML = "";

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        total += expenses[i].amount;

        let div = document.createElement("div");

        div.innerHTML = `
            <p>
                ${expenses[i].name}
                - ₹${expenses[i].amount}
                - ${expenses[i].category}
            </p>
        `;

        let button = document.createElement("button");

        button.textContent = "Delete";

        button.addEventListener("click", function () {

            expenses.splice(i, 1);

            displayExpenses();
        });

        div.appendChild(button);

        list.appendChild(div);
    }

    document.getElementById("total").textContent = total;
}

document.getElementById("addExpense")?.addEventListener("click", function () {

        let name =
            document.getElementById("expenseName").value;

        let amount =
            Number(document.getElementById("expenseAmount").value);

        let category =
            document.getElementById("category").value;

        if (name === "" || amount <= 0) {
            return;
        }

        expenses.push({
            name: name,
            amount: amount,
            category: category
        });

        document.getElementById("expenseName").value = "";
        document.getElementById("expenseAmount").value = "";

        displayExpenses();
    });

