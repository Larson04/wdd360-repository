const cart = [
  {id: 1, name: "Item 1", price:"10"},
  {id: 2, name: "Item 2", price:"15"},
  {id: 3, name: "Item 3", price:"12"}
]

const cartHTML = `
<h2>Cart</h2>
<ul>
  ${cart.map(item => `<li>${item.name} - ${item.price}</li>`).join('')}
</ul>
`