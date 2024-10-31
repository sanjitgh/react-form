const ReusableForm = ({ handelSubmit, submitBtnText = "Submit", children }) => {
  const handelLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handelSubmit(data);
  };
  return (
    <div>
      {children}
      <form onSubmit={handelLocalSubmit}>
        <input type="text" name="name" placeholder="name" /> <br />
        <input type="email" name="email" placeholder="email" /> <br />
        <input type="password" name="password" placeholder="password" /> <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReusableForm;
