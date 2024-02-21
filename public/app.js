const config = {
  env: 'dev', // dev | sandbox | production
  onEvent: (event) => {
    // Invoked for every event triggerd by the element.
    // Event is a native MessageEvent instance.
    console.log('onEvent:', event)
  },
  onSuccess: (payload) => {
    // Invoked when an account has successfully been linked.
    // After accounts are linked, `payload.accounts` will contain a list
    // of public account tokens which you will be exchanged for an
    // account through the Method API.

    console.log('onSuccess:', payload);
  },
  onError: (error) => {
    // Invoked when an error is raised during.
    console.log('onError', error);
  },
  onExit: (payload) => {
    // Invoked when a user exits any element flow, or
    // immediately after an error is raised.
    console.log('onExit:', payload);
  },
  onOpen : (payload) => {
    // Invoked when an element has successfully launched.
    console.log('onOpen', payload);
  }
};



window.addEventListener('load', async() => {
  const response = await fetch('/api/element', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      entity_id: 'ent_EhPyGnnH3VEdw',
      team_name: 'Demo Auth App',
      type: 'auth',
      auth: {},
    })
  })

  // {element_token: 'XXXXXXXXX'}
  const token = await response.json();

  if (token.element_token){
    const method = new Method(config);
    method.open(token.element_token);
  }
});