import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";

function ForgotPassword() {
  return (
    <main className="min-h-screen bg-canvas">
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <ForgotPasswordForm />
      </div>
    </main>
  );
}

export default ForgotPassword;