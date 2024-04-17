function showSidebar(){
    
    const sidebar=document.querySelector('.slide')
    sidebar.style.display='flex'
}
function hideSidebar(){
    
    const sidebar=document.querySelector('.slide')
    sidebar.style.display='none'
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwTkxpNfKRZX5cgN85hGYKrk1TgxZVmGDax8NbycHqjdbyDxkl7h7GZsY-i_9VR-WYa2A/exec'
  const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => 
    {
        msg.innerHTML="Your response has been saved"
setTimeout(function(){
    msg.innerHTML=""
},5000)
form.reset()
    }
)
      .catch(error => console.error('Error!', error.message))
  })

  const body=document.querySelector('body');
  body.addEventListener("click",hideSidebar());