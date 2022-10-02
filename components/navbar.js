function navbar(){
    return ` <div class="wrapper">
        <div>
          <div class="logo">
            <a href="index.html"
              ><img
                src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"
              />
            </a>
          </div>
          <div class="more">
            <ul class="more-links">
              <li>
                <a href="#">More travel  </a>
                <ul class="drop-menu">
                  <li>
                    <a href="#"
                      ><i class="fa-sharp fa-solid fa-hotel"></i>
                      <span class="s">stays</span></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa-sharp fa-solid fa-plane-departure"></i>
                      <span class="s">Flights</span></a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa-sharp fa-solid fa-car"></i>
                      <span class="s">Cars</span></a
                    >
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-sharp fa-solid fa-boxes-packing"></i>
                      <span class="s">Packages</span></a
                    >
                  </li>
                  <li>
                    <a href="#">
                     <i class="fa-solid fa-gifts"></i>
                      <span class="s">Holiday&Activity</span></a
                    >
                  </li>
                  <li><a href="#">Deals</a></li>
                  <li><a href="#">Groups & mettings</a></li>
                  <li><a href="#">Mobile</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#"><i class="fa-solid fa-globe"></i> Engilsh </a>
          </li>
          <li><a href="#">Support </a></li>
          <li><a href="#">Trips </a></li>
          <li>
            <a href="#"><i class="fa-solid fa-bell"></i> </a>
          </li>
          <li><a href="#" id="mybtn">Sign in </a></li>
        </ul>
      </div>`
}

export default navbar;