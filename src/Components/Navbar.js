import React from "react";

const Navbar = () => {
  return (
    <nav>
    <div class="nav-wrapper black">
      {/* <a href="#!" class="brand-logo">Logo</a> */}
      <ul class="right hide-on-med-and-down">
      <li><a href="badges.html"><i class="material-icons right">edit</i></a></li>
      <li><a href="badges.html"><i class="material-icons right">reply</i></a></li>
      <li><a href="badges.html"><i class="material-icons left">folder</i></a></li>
      <li><a href="badges.html"><i class="material-icons left">delete</i></a></li>

        <li><a href="sass.html"><i class="material-icons left gray">search</i></a></li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;