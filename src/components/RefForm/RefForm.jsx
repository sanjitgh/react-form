import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          ref={nameRef}
          defaultValue={"Sanjit"}
          type="text"
          name="name"
          placeholder="name"
        />{" "}
        <br />
        <input
          ref={emailRef}
          defaultValue={""}
          type="email"
          name="email"
          placeholder="email"
        />{" "}
        <br />
        <input ref={passwordRef} type="password" name="password" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
