
const init = () => {
  const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(event);
    const input = document.querySelector('input#searchByID');
    // console.log(input.value);
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then(resp => resp.json())
      .then(data => {
        // console.log(data);
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innnerText = data.title;
        summary.innnerText = data.summary;

      });
  });
}

document.addEventListener('DOMContentLoaded', init);