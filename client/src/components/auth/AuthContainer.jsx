import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AuthOverlay from "./AuthOverlay";

function AuthContainer({ initialMode = "login" }) {
  const [isRegister, setIsRegister] = useState(
    initialMode === "register"
  );

  const showRegister = () => {
    setIsRegister(true);
  };

  const showLogin = () => {
    setIsRegister(false);
  };

  return (
    <div className="relative min-h-[600px] w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-surface">
      
      {/* =========================
          FORM LAYER
      ========================== */}
      <div
        className={`absolute inset-0 flex w-[200%] transition-transform duration-700 ease-in-out ${
          isRegister ? "-translate-x-1/2" : "translate-x-0"
        }`}
      >
        {/* Login */}
        <div className="flex h-full w-1/2 items-center justify-center">
          <div className="w-1/2">
            <LoginForm />
          </div>

          {/* Empty space reserved for overlay */}
          <div className="w-1/2" />
        </div>

        {/* Register */}
        <div className="flex h-full w-1/2 items-center justify-center">
          {/* Empty space reserved for overlay */}
          <div className="w-1/2" />

          <div className="w-1/2">
            <RegisterForm />
          </div>
        </div>
      </div>

      {/* =========================
          OVERLAY LAYER
      ========================== */}
      <div
        className={`absolute inset-y-0 left-0 z-20 w-1/2 transition-transform duration-700 ease-in-out ${
          isRegister ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <AuthOverlay
          isRegister={isRegister}
          onShowLogin={showLogin}
          onShowRegister={showRegister}
        />
      </div>
    </div>
  );
}

export default AuthContainer;