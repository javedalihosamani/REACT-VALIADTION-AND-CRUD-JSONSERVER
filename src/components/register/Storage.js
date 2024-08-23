import { toast } from "react-toastify";

// Initial data
const users = JSON.parse(localStorage.getItem("users")) || [];
//console.log(users);

// Local Storage Function
const saveUsers = (data) => {
  localStorage.setItem("users", JSON.stringify(data));
};

// Register Handler
const registerUser = async (user) => {
  //console.log("Register", user);

  const extEmail = users.find((item) => item.email === user.email);
  const extMobile = users.find((item) => item.mobile === user.mobile);

  if (extEmail) {
    toast.error("Email already exists");
    return;
  } else if (extMobile) {
    toast.error("Mobile number already exists");
    return;
  } else {
    users.push(user);
    //console.log(users);

    saveUsers(users);

    toast.success(`Hi ${user.name} you have registered successfully`);
    setTimeout(() => {
      window.location.href = "/login";
    }, 4000);
  }
};

// Login Handler
const loginHandler = async (user) => {
  console.log("Login", user);
};
export { registerUser, loginHandler };
