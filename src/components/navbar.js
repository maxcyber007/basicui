
import Link from 'next/link';

export default function Navbar() {

return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">MaxCyber</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">หน้าแรก</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">เกี่ยวกับเรา</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการของเรา
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">พัฒนาซอฟต์แวร์</Link></li>
            <li><Link className="dropdown-item" href="#">ติดตั้ง Smart Farm</Link></li>
            <li><Link className="dropdown-item" href="#">บริการ Cloud Computing</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-disabled="true" href="#">ติดต่อเรา</Link>
        </li>
      </ul>
        <Link className="btn btn-outline-success" href="#">SignUp</Link>&nbsp;
        <Link className="btn btn-outline-info" href="#">SignIn</Link>
    </div>
  </div>
</nav>

</>
);
}