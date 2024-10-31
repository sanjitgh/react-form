import useInputStart from "../../hooks/useInputState";


const HookForm = () => {
    const [name, handelNameChange] = useInputStart('sanjit ghosh');
    const handelSubmit = e => {
        e.preventDefault();
        console.log(name);
    }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input value={name} onChange={handelNameChange}  type="text" name="name" placeholder="name" /> <br />
        <input type="email" name="email" placeholder="email" /> <br />
        <input type="text" name="phone" placeholder="phone" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
