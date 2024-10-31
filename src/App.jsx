import "./App.css";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HookForm from "./components/hookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  const handelSignUpSubmit = (data) => {
    console.log("signup data", data);
  };
  const handleUpdateProfile = (data) => {
    console.log("update data", data);
  };
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm handelSubmit={handelSignUpSubmit}>
        <div>
          <h3>Please sign up</h3>
        </div>
      </ReusableForm>
      <ReusableForm submitBtnText="Update" handelSubmit={handleUpdateProfile}>
        <div>
          <h3>Update profile</h3>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
