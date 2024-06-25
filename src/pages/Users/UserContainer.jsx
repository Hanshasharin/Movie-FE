// import React, { useState } from "react";
// import Signup from "../../Components/User/UserSignup";
// import Login from "../../Components/User/UserLogin";
// import '../../pages/Users/UserAuth.css';
// import backgroundImage from '../../assets/images/movielogin.jpg';

// const AuthContainer = () => {
//   const [formType, setFormType] = useState('login');
//   const [animating, setAnimating] = useState(false);

//   const handleToggle = (type) => {
//     setAnimating(true);
//     setTimeout(() => {
//       setFormType(type);
//       setAnimating(false);
//     }, 500); // Duration of the animation
//   };

//   return (
//     <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className={animating ? "form-enter-active" : "form-enter"}>
//         {formType === 'login' ? (
//           <Login setFormType={() => handleToggle('signup')} />
//         ) : (
//           <Signup setFormType={() => handleToggle('login')} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthContainer;
// import React, { useState } from "react";
// import Signup from "../../Components/User/UserSignup";
// import Login from "../../Components/User/UserLogin";
// import '../../pages/Users/UserAuth.css';
// import backgroundImage from '../../assets/images/movielogin.jpg';

// const AuthContainer = () => {
//   const [formType, setFormType] = useState('login');
//   const [animating, setAnimating] = useState(false);

//   const handleToggle = (type) => {
//     setAnimating(true);
//     setTimeout(() => {
//       setFormType(type);
//       setAnimating(false);
//     }, 500); // Duration of the animation
//   };

//   return (
//     <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className={`form-container ${animating ? "form-exit-active" : "form-enter-active"}`}>
//         {formType === 'login' ? (
//           <Login setFormType={() => handleToggle('signup')} />
//         ) : (
//           <Signup setFormType={() => handleToggle('login')} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthContainer;
import React, { useState } from "react";
import Signup from "../../Components/User/UserSignup";
import Login from "../../Components/User/UserLogin";
import '../../pages/Users/UserAuth.css';
import backgroundImage from '../../assets/images/movielogin.jpg';

const AuthContainer = () => {
  const [formType, setFormType] = useState('login');
  const [animating, setAnimating] = useState(false);

  const handleToggle = (type) => {
    setAnimating(true);
    setTimeout(() => {
      setFormType(type);
      setAnimating(false);
    }, 500); // Duration of the animation
  };

  return (
    <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={`form-container ${animating ? "form-exit-active" : "form-enter-active"}`}>
        {formType === 'login' ? (
          <Login setFormType={handleToggle} />
        ) : (
          <Signup setFormType={handleToggle} />
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
