const client = require('twilio')();


function whatsAppUser(user,videoID) {

  if (!user.name) {

    user.name = 'student'
  
   }

  

  const URL = `https://pianolessenamsterdam.herokuapp.com/students/${user.username}`

  client.messages.create({
    from: 'whatsapp:+14155238886',
    body: `Hi, ${user.name}. The video ${videoID.snippet.title} was uploaded 
    on Pianolessen Amsterdam. Check it out on your profile page on ${URL}`,
    to: `whatsapp:+31${user.number}`
  }).then(message => console.log(message.sid))
  .catch(err => console.log(err))
  ;


}

module.exports = whatsAppUser;