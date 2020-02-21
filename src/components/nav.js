import React from "react"
import {Link} from "gatsby";

const NavLink = props => (
  <li className={props.className} style={{ display: `flex`, marginRight: `1rem` }}>
    <Link to={props.to} style={{ height: 100, display: "flex" }}>
      {props.children}
    </Link>
  </li>
)

export default props => {
  return (
    <header
      itemtype="https://schema.org/WPHeader"
      itemscope="itemscope"
      id="masthead"
      class="site-header ast-primary-submenu-animation-fade header-main-layout-1 ast-primary-menu-enabled ast-logo-title-inline ast-hide-custom-menu-mobile ast-menu-toggle-link ast-mobile-header-inline"
      role="banner"
    >
      <div class="main-header-bar-wrap">
        <div class="main-header-bar">
          <div class="ast-container">
            <div class="ast-flex main-header-container">
              <div class="site-branding">
                <div
                  class="ast-site-identity"
                  itemscope="itemscope"
                  itemtype="https://schema.org/Organization"
                >
                  <span class="site-logo-img">
                    <a
                      href="https://localartistm.com/"
                      class="custom-logo-link"
                      rel="home"
                    >
                      <img
                        width="70"
                        height="75"
                        src="https://localartistm.com/wp-content/uploads/2019/04/LogoMakr_1pBKyl-70x75.png"
                        class="custom-logo"
                        alt="LocalArtistM"
                        srcset="https://localartistm.com/wp-content/uploads/2019/04/LogoMakr_1pBKyl-70x75.png 70w, https://localartistm.com/wp-content/uploads/2019/04/LogoMakr_1pBKyl-281x300.png 281w, https://localartistm.com/wp-content/uploads/2019/04/LogoMakr_1pBKyl.png 561w"
                        sizes="(max-width: 70px) 100vw, 70px"
                      />
                    </a>
                  </span>
                </div>
              </div>
              {/* <!-- .site-branding --> */}
              <div class="ast-mobile-menu-buttons">
                <div class="ast-button-wrap">
                  <button
                    type="button"
                    class="menu-toggle main-header-menu-toggle ast-mobile-menu-buttons-fill"
                    aria-controls="primary-menu"
                    aria-expanded="false"
                    data-index="0"
                  >
                    <span class="screen-reader-text">Main Menu</span>
                    <span class="menu-toggle-icon"></span>
                  </button>
                </div>
              </div>
              <div class="ast-main-header-bar-alignment">
                <div class="main-header-bar-navigation">
                  <nav
                    itemtype="https://schema.org/SiteNavigationElement"
                    itemscope="itemscope"
                    id="site-navigation"
                    class="ast-flex-grow-1 navigation-accessibility"
                    role="navigation"
                    aria-label="Site Navigation"
                  >
                    <div class="main-navigation">
                      <ul
                        id="primary-menu"
                        class="main-header-menu ast-nav-menu ast-flex ast-justify-content-flex-end  submenu-with-border astra-menu-animation-fade "
                      >
                        <NavLink
                          id="menu-item-564"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-507 current_page_item menu-item-564"
                          to="/" aria-current="page"
                        >Home
                        </NavLink>
                        <NavLink
                          id="menu-item-558"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-558"
                          to="/gallery/"
                        >
                          Gallery
                        </NavLink>
                        <NavLink
                          id="menu-item-526"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-526"
                          to="/contact/"
                        >
                          Contact
                        </NavLink>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>{" "}
            {/* <!-- Main Header Container --> */}
          </div>{" "}
          {/* <!-- ast-row --> */}
        </div>{" "}
        {/* <!-- Main Header Bar --> */}
      </div>{" "}
      {/* <!-- Main Header Bar Wrap --> */}
    </header>
  )
}
