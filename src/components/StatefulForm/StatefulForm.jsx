import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    if(password.length < 6 ){
      setError('Password must be 6 character or longer');
    }
    else{
      setError('')
      console.log(name, email, password);
    }
  };

  const handelNameChange = (e) => {
    setName(e.target.value);
  };

  const handelEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handelPasswordChange = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          onChange={handelNameChange}
          type="text"
          name="name"
          placeholder="name"
        />
        <br />
        <input
          onChange={handelEmailChange}
          type="email"
          name="email"
          placeholder="email"
        />
        <br />
        <input
          onChange={handelPasswordChange}
          type="password"
          name="password"
        />
        <br />
        <input type="submit" value="Submit" />
        {
          error && <p>{error}</p>
        }
      </form>
    </div>
  );
};

export default StatefulForm;
