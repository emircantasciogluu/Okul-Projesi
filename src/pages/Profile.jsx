import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { fetchCurrentUser } from "../services/authService";

const Profile = () => {
  const { token } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProfile() {
      setError("");
      try {
        const data = await fetchCurrentUser(token);
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    }
    if (token) {
      loadProfile();
    }
  }, [token]);

  if (!token) {
    return <div className="p-6 text-red-600">Lütfen önce giriş yapın.</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">Hata: {error}</div>;
  }

  if (!user) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profil Bilgileri</h1>
      <p>Ad: {user.firstName}</p>
      <p>Soyad: {user.lastName}</p>
      <p>E-posta: {user.email}</p>
      <p>Seviye: {user.level}</p>
    </div>
  );
};

export default Profile;
