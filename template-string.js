const firstName = 'John';
const lastName = 'Doe';
const fullName = `My Name is ${firstName} ${lastName}`;
const giveMe = `give me money ${10 + 20 + 30}`;
console.log(giveMe);


function getCardHTML(name, description, price) {
  const div = `
  <div class="card">
    <h2>${name}</h2>
    <p>price:$ ${price}</p>
    <p>${description}</p>
  </div>
  `;
  console.log(div);
}

getCardHTML('Iphone 14', 'This is a new phone', 1000);