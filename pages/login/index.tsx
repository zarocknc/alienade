import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <h1>si estas logeado</h1>
        <p>{session.user?.name}</p>
        <button className="btn" onClick={() => signOut()}>Cerrar session</button>
      </>
    );
  }
  return (
    <div>
      <h1>No estas logeado</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          signIn();
        }}
      >
        logearse
      </button>
    </div>
  );
};
