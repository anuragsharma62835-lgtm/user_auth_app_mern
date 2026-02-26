import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import { toast } from "react-toastify";
import API from "../services/api";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await API.post("/auth/google", {
        token: credentialResponse.credential,
      });

      login(res.data);
      navigate("/dashboard");
      toast.success("Google login successful");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Google login failed");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => alert("Login Failed")}
      useOneTap={false}
      auto_select={false}
      prompt="select_account"
    />
  );
};

export default GoogleLoginButton;
