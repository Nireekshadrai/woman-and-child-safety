const form=document.getElementById("sign-up")
      form.addEventListener("submit",registerUser)
      async function registerUser(event){
        event.preventDefault()
        const username=document.getElementById("username").value;
        const name=document.getElementById("name").value;
        const address=document.getElementById("add").value;
        const password=document.getElementById("password").value;
        const result = await fetch('/api/register', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username,
						password,
            name,
            address
					})
				}).then((res) => res.json())
        console.log(result);
        
				if (result.status === 'ok') {
					// everythign went fine
					alert('Success')
					window.location.href="http://localhost:3000";
				} else {
					alert(result.error)
				}
			
      }