const Profile = ({ user }) => {
  if (!user) return <p>Loading profile...</p>;

  // Dùng avatar mặc định dựa trên username nếu không có profilePic
  const avatarUrl =
    user.profilePic || `https://i.pravatar.cc/100?u=${user.username}`;

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fefefe",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src={avatarUrl}
        alt="Avatar"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "1rem",
        }}
      />
      <h2 style={{ marginBottom: "0.25rem", fontSize: "1.5rem" }}>
        {user.name}
      </h2>
      <p style={{ color: "#888", marginBottom: "1rem" }}>@{user.username}</p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Bio:</strong> {user.bio || "No bio provided."}
      </p>
      <p>
        <strong>Followers:</strong> {user.followers.length}
      </p>
      <p>
        <strong>Following:</strong> {user.following.length}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span style={{ color: user.isFrozen ? "red" : "green" }}>
          {user.isFrozen ? "❄️ Frozen" : "✅ Active"}
        </span>
      </p>
    </div>
  );
};

export default Profile;
