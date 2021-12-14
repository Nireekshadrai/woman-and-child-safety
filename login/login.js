const form=document.getElementById("login")
form.addEventListener("submit",registerUser)
async function registerUser(event){
  event.preventDefault()
  const username=document.getElementById("username").value;
  
  const password=document.getElementById("password").value;
  const result = await fetch('/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  username,
                  password,
      
              })
              
          }).then((res) => res.json())
  console.log(result);
  
          if (result.status === 'ok') {
              // verythign went fine
    localStorage.setItem("token",result.data)
  
              alert('Success')
              window.location.href="http://localhost:3000";
              
          } else {
              alert(result.error)
          }
      
}