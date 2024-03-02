import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <div className="navbar-theme-toggle-container">
        <input
          type="checkbox"
          name="color-theme-toggle"
          id="color-theme-toggle"
          className="color-theme-toggle"
        />
        <label htmlFor="color-theme-toggle"></label>
      </div>
    </div>
  );
}
