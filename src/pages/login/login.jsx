/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import Wave from "../../assets/wave-1.png";
import NexLIB from "../../assets/NexLIB-logo.png";
import "boxicons";
import { Toaster, toast } from "sonner";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [loading, setLoading] = useState(false); // State for loading spinner
  const navigate = useNavigate(); // For navigation

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);

    if (!email || !password) {
      toast.error("Both email and password are required!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        toast.success("Login successful!");
        login(response.data.token);
        navigate("/dashboard", { state: { success: "Login successful!" } });
      }
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Invalid email or password!");
      } else {
        toast.warning("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster richColors />
      <div className="login">
        <div className="container">
          <div className="floating-container">
            <div className="floating-modal">
              <div className="left">
                <div className="wave-container">
                  <img src={Wave} alt="wave" className="graphic" />
                </div>
                <div className="floating-glass">
                  <div className="glass">
                    <div className="logo">
                      <img src={NexLIB} alt="" />
                    </div>
                    <div className="line"></div>
                    <div className="text-content">
                      <h2>Hey...</h2>
                      <h1>Welcome Back !</h1>
                      <p>
                        Please login using the credentials that has been
                        provided <br />
                        to you.
                      </p>
                    </div>
                    <div className="footer">
                      <p>
                        <strong>Don't have an account?</strong>
                        <br />
                        Please contact our staff
                        <span className="italic"> somestaff@staff.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <div className="input-container">
                      <span className="input-icon">
                        <box-icon
                          name="mail-send"
                          size="sm"
                          color="#030a02"
                        ></box-icon>
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state
                        required
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label htmlFor="password">Passphrase</label>
                    <div className="input-container">
                      <span className="input-icon">
                        <box-icon
                          name="key"
                          size="sm"
                          color="#030a02"
                        ></box-icon>
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update password state
                        required
                      />
                    </div>
                  </div>

                  <div className="checkbox-container">
                    <label htmlFor="show-password">
                      <input
                        type="checkbox"
                        id="show-password"
                        name="show-password"
                        checked={showPassword}
                        onChange={handleTogglePassword}
                      />
                      <span className="checkmark"></span>
                      Show Passphrase
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="login-button"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "login →"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
