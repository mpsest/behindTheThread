import "./RootLayout.css";

export default function RootLayout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div>Menu</div>
          <h4>BEHIND THE THREAD</h4>
          <div>Contactos</div>
        </div>
      </nav>
      <main></main>
      <footer className="site-footer">
        <div className="container site-footer-content">
          <small>Behind the Thread</small>
          <div>menu</div>
          <div>social media</div>
          <div>newsletter</div>
        </div>
      </footer>
    </div>
  );
}
