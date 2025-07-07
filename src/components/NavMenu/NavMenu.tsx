import { Link } from "react-router";

export function NavMenu() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/zlib-decoder">Zlib Decoder</Link>
        </li>
      </ul>
    </div>
  );
}
