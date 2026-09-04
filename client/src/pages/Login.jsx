import AuthContainer from "../components/auth/AuthContainer";

function Login() {
  return (
    <main className="min-h-screen bg-canvas">
      <div className="flex min-h-screen items-center justify-center px-6 py-12">
        <AuthContainer initialMode="login" />
      </div>
    </main>
  );
}

export default Login;