let radioFiction = document.getElementById('fiction')
let radioNonFiction = document.getElementById('non-fiction')
let NonFictionMenu = ''
let FictionMenu = ''

radioNonFiction.addEventListener('click', function onNonFictionClick(e){
  console.log('radioNonFiction was clicked')
  console.log(NonFictionMenu)
  console.log(FictionMenu)
  if (NonFictionMenu === '') {
    renderNonFictionMenu(NonFictionMenu)
    if (FictionMenu !== '') {
      deleteFictionMenu(FictionMenu)
      FictionMenu = ''
    }
  }
})

radioFiction.addEventListener('click', function onFictionClick (f) {
  console.log('radioFiction was clicked')
  console.log(FictionMenu)
  console.log(NonFictionMenu)
  if (FictionMenu === '') {
    renderFictionMenu(FictionMenu)
    if (NonFictionMenu !== '') {
      deleteNonFictionMenu(NonFictionMenu)
      NonFictionMenu = ''
    }
  }
})

function deleteFictionMenu() {
  FictionMenu = document.getElementById('fiction-menu')
  FictionMenu.remove()
}

function deleteNonFictionMenu(){
  nonFictionMenu = document.getElementById('non-fiction-menu')
  nonFictionMenu.remove()
}

function renderFictionMenu(){
  FictionMenu = document.createElement("select")
  FictionMenu.setAttribute("id", "fiction-menu")
  FictionMenu.setAttribute('name', 'genre')

  let FictionOption0 = document.createElement("option")
  let FictionOption1 = document.createElement("option")
  let FictionOption2 = document.createElement("option")
  let FictionOption3 = document.createElement("option")
  let FictionOption4 = document.createElement("option")
  let FictionOption5 = document.createElement("option")
  let FictionOption6 = document.createElement("option")
  let FictionOption7 = document.createElement("option")
  let FictionOption8 = document.createElement("option")
  let FictionOption9 = document.createElement("option")
  let FictionOption10 = document.createElement("option")
  let FictionOption11 = document.createElement("option")

  FictionOption0.textContent = "Novel"
  FictionOption1.textContent = "Romance"
  FictionOption2.textContent = "Comedy"
  FictionOption3.textContent = "Suspense/Thriller"
  FictionOption4.textContent = "Horror"
  FictionOption5.textContent = "Mystery"
  FictionOption6.textContent = "Sci-Fi"
  FictionOption7.textContent = "Western"
  FictionOption8.textContent = "Classic"
  FictionOption9.textContent = "Mythology"
  FictionOption10.textContent = "Children's Book"
  FictionOption11.textContent = "Illustrations or Comic Book"

  FictionOption0.setAttribute("value", "Novel")
  FictionOption1.setAttribute("value", "Romance")
  FictionOption2.setAttribute("value", "Comedy")
  FictionOption3.setAttribute("value", "Suspense/Thriller")
  FictionOption4.setAttribute("value", "Horror")
  FictionOption5.setAttribute("value", "Mystery")
  FictionOption6.setAttribute("value", "Sci-Fi")
  FictionOption7.setAttribute("value", "Western")
  FictionOption8.setAttribute("value", "Classic")
  FictionOption9.setAttribute("value", "Mythology")
  FictionOption10.setAttribute("value", "Children's Book")
  FictionOption11.setAttribute("value", "Illustrations or Comic Book")

  FictionMenu.appendChild(FictionOption0)
  FictionMenu.appendChild(FictionOption1)
  FictionMenu.appendChild(FictionOption2)
  FictionMenu.appendChild(FictionOption3)
  FictionMenu.appendChild(FictionOption4)
  FictionMenu.appendChild(FictionOption5)
  FictionMenu.appendChild(FictionOption6)
  FictionMenu.appendChild(FictionOption7)
  FictionMenu.appendChild(FictionOption8)
  FictionMenu.appendChild(FictionOption9)
  FictionMenu.appendChild(FictionOption10)
  FictionMenu.appendChild(FictionOption11)

  radioFiction.insertAdjacentElement('afterend', FictionMenu)
}

function renderNonFictionMenu() {
    console.log("radioNonFiction was called");

    NonFictionMenu = document.createElement("select")
    NonFictionMenu.setAttribute("id", "non-fiction-menu")
    NonFictionMenu.setAttribute("name", "deweyDecimalClassification")

    let NonFictionOption0 = document.createElement("option")
    let NonFictionOption1 = document.createElement("option")
    let NonFictionOption2 = document.createElement("option")
    let NonFictionOption3 = document.createElement("option")
    let NonFictionOption4 = document.createElement("option")
    let NonFictionOption5 = document.createElement("option")
    let NonFictionOption6 = document.createElement("option")
    let NonFictionOption7 = document.createElement("option")
    let NonFictionOption8 = document.createElement("option")
    let NonFictionOption9 = document.createElement("option")

    NonFictionOption0.textContent = "Essays"
    NonFictionOption1.textContent = "Philosophy"
    NonFictionOption2.textContent = "Religion"
    NonFictionOption3.textContent = "Social sciences"
    NonFictionOption4.textContent = "Language"
    NonFictionOption5.textContent = "Science"
    NonFictionOption6.textContent = "Technology"
    NonFictionOption7.textContent = "Arts/Recreation"
    NonFictionOption8.textContent = "Biography"
    NonFictionOption9.textContent = "History/Geography"

    NonFictionOption0.setAttribute("value", "Essays")
    NonFictionOption1.setAttribute("value", "Philosophy")
    NonFictionOption2.setAttribute("value", "Religion")
    NonFictionOption3.setAttribute("value", "Social sciences")
    NonFictionOption4.setAttribute("value", "Language")
    NonFictionOption5.setAttribute("value", "Science")
    NonFictionOption6.setAttribute("value", "Technology")
    NonFictionOption7.setAttribute("value", "Arts/Recreation")
    NonFictionOption8.setAttribute("value", "Biography")
    NonFictionOption9.setAttribute("value", "History/Geography")

    NonFictionMenu.appendChild(NonFictionOption0)
    NonFictionMenu.appendChild(NonFictionOption1)
    NonFictionMenu.appendChild(NonFictionOption2)
    NonFictionMenu.appendChild(NonFictionOption3)
    NonFictionMenu.appendChild(NonFictionOption4)
    NonFictionMenu.appendChild(NonFictionOption5)
    NonFictionMenu.appendChild(NonFictionOption6)
    NonFictionMenu.appendChild(NonFictionOption7)
    NonFictionMenu.appendChild(NonFictionOption8)
    NonFictionMenu.appendChild(NonFictionOption9)

    radioNonFiction.insertAdjacentElement('afterend', NonFictionMenu)
}
