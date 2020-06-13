const client = require('twilio')();
console.log(client)

function whatsAppUser(user,videoID) {

console.log(user)
console.log(videoID)
  

  client.messages.create({
    from: 'whatsapp:+14155238886',
    body: `Hi, ${user.name}. The video ${videoID.snippet.title} was uploaded on Pianolessen Amsterdam. Check it out on your profile page`,
    to: 'whatsapp:+31641462562'
  }).then(message => console.log(message.sid))
  .catch(err => console.log(err))
  ;


}

module.exports = whatsAppUser;