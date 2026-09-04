import AuthContainer from "../components/auth/AuthContainer";

function Register() {
  return (
    <main className="min-h-screen bg-canvas">
      <div className="flex min-h-screen items-center justify-center px-6 py-12">
        <AuthContainer initialMode="register" />
      </div>
    </main>
  );
}

export default Register;