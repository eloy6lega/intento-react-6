import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <div>
        <h2>Contact</h2>
        <form action='' method=''>
          <input type='email' name='correo' id='correo' />
          <input type='submit' value='Enviar' />
        </form>
        </div>
    );
  }
}

export default Contact;