$(document).ready(function(){

$('.submit-button').click(function(){

        //create variable = to whatever was typed into the box

        const whichPoke = $('.which-poke').val();

        axios({
          method: 'GET',
          url: `https://www.pokeapi.co/api/v2/pokemon/${whichPoke}`
          // params: 'URL parameters to be sent with the request' ,
        })
  
        .then(theThingWeGetBackFromApi => {
          console.log(theThingWeGetBackFromApi.data)
          $('.pokeinfo').append(`
          <h3> ${theThingWeGetBackFromApi.data.name} </h3>
          <h4>Height: ${theThingWeGetBackFromApi.data.height}</h4>
          <h4>Weight: ${theThingWeGetBackFromApi.data.weight}</h4>
          `)  
        })
  
        .catch(err => {
        console.log(err);
         })

        })
        
        // console.log('button clicked')
        // end pokebutton info

        // begin characters button info

        $('.characters-button').click(function(){
        console.log('characters button clicked');

        axios.get(`https://ih-crud-api.herokuapp.com/characters/`)
        .then(response => {
          // console.log(response.data)
          $('.iron-characters').empty();
          response.data.forEach(function(oneCharacter){
            // console.log(oneCharacter.name)
          $('.iron-characters').append(`
            <h3>Name: ${oneCharacter.name}</h3>
            <p>Occupation: ${oneCharacter.occupation}</p>
            <p>Weapon: ${oneCharacter.weapon}</p>     
            <p>Debt: ${oneCharacter.debt}</p>  
          `)
          })
        })

      .catch(err => {
        console.log(err);
        })
  }) // end click function


        $('.add-new-character').click(function(){
          // const name = $('.char-name').val(),
          // const occupation = $('.char-occ').val(),
          // const weapon = $('.char-weapon').val()
          // console.log(name,occupation,weapon)
          const charInfo = {
            name: $('.char-name').val(),
            occupation: $('.char-occ').val(),
            weapon: $('.char-weapon').val()
          }
console.log(charInfo)
          axios.post(`https://ih-crud-api.herokuapp.com/characters/`,charInfo)
          .then(response => {
            console.log('character successfully created',response)
          })

      .catch(err => {
        console.log(err);
        })

        }) // end click function
        
$('.char-edit-button').click(function(){
  // console.log('button clicked')
  const whichCharacter = $('.which-character').val()
  const charInfo = {
    name: $('.char-name').val(),
    occupation: $('.char-occ').val(),
    weapon: $('.char-weapon').val()
  }
    // console.log(charInfo,whichCharacter)

axios.put(`https://ih-crud-api.herokuapp.com/characters/${whichCharacter}`,charInfo)
 .then(response => {
   console.log("success",response)
 })
 .catch(err => {
  console.log(err);
  })

}); // end edit click function

$('.which-character').change(function(){
  // console.log('changed')
  const whichCharacter = ($('.which-character').val());
  axios.get(`https://ih-crud-api.herokuapp.com/characters/${whichCharacter}`)
  .then (response => {
    // console.log(response.data)
    $('.char-name').val(response.data.name);
    $('.char-occ').val(response.data.occupation);
    $('.char-weapon').val(response.data.weapon);
  })
  .catch(err => {
    console.log(err);
    })
})

})



