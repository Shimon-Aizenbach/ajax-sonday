const body = document.getElementById(`user-cards`)

function createTag(tag, id) {
  const element = document.createElement(tag)
  element.id = id
  return element
}

function selectUserCard(obj) {
  const userCard = createTag(`div` ,`user-card`);
  const userImage = createTag(`img` ,`user-image`);
  userImage.src = obj.picture.large
  const userName = createTag(`h2`, `user-name`);
  userName.textContent = `${obj.name.title} ${obj.name.first} ${obj.name.last}`
  const userMail = createTag(`p`, `user-mail`);
  userMail.textContent = obj.email
  const userAge = createTag(`p`, `user-age`);
  userAge.textContent = obj.dob.age
  userCard.append(userImage, userName, userMail, userAge)
  body.appendChild(userCard)
}


const ajax1Button1 = document.getElementById(`button1`).onclick = async () => {
  const api = await fetch(`https://randomuser.me/api`);
  const apiUser = await api.json()
  selectUserCard(apiUser.results[0])
};

const ajax1Button2 = document.getElementById(`button2`).onclick = async () => {
  for (let i = 0; i < 5; i++) {
    const api = await fetch(`https://randomuser.me/api/?gender=male`);
    const apiUser = await api.json()
    selectUserCard(apiUser.results[0])
  }
}

