const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
    users.map((user) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      card.innerHTML = `<p> <b>User: </b>${user.id}</p>
      <p><b>Name:</b> ${user.username}</p>  
      <p><b>eMail:</b> ${user.email} </p>
      <p><b>City:</b> ${user.address.city}</p>
      <p><b>Phone:</b> ${user.phone}</p> 
      <p><b>Job:</b> ${user.company.name}</p>`;
      document.body.append(card);
    });
  })

  .catch((error) => {
    console.log(error);
  });
