import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import { toast } from "react-toastify";

const GoogleLoginButton = () => {
  const navigate = useNavigate(); 
  const { login } = useAuth();

  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/google", {
        token: credentialResponse.credential,
      });
      login(res.data);
      navigate("/dashboard");
      toast.success("Google login successful");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => alert("Login Failed")}
    />
  );
};

export default GoogleLoginButton;
