const createUsuario = async (userData) => {
    try {
      const createdUsuario = await fetch('http://localhost:1999/usuario', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      }).then(res => res.json())
  
      return createdUsuario;
    } catch (error) {
      console.error(error)
    }
  }

  const signupForm = document.getElementById('signup-form');
  const nomeInput = document.getElementById('signupNome');
  const emailInput = document.getElementById('signupEmail');
  const senhaInput = document.getElementById('signupSenha');
  const signupButton = document.getElementById('signupButton');
  const signupSuccessAlert = document.getElementById('signupSuccess');
  
  signupButton.addEventListener('click', async () => {
    const nome = nomeInput.value;
    const email = emailInput.value;
    const senha = senhaInput.value;
  
    if (!nome || !email || !senha) {
      return alert('Preencha todos os campos')
    }
  
    const usuarioData = { nome, email, senha };
    const usuario = await createUsuario(usuarioData);
  
    if (usuario) {
      signupSuccessAlert.className += 'flex';
      setTimeout(() => {
        window.location.href = 'http://127.0.0.1:5500/frontend/login/index.html'
      }, 2000);
    }
  })