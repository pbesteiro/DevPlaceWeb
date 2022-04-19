<?php
function subMenuHeader($submenu, $label)
{
  return '<div class="submenu" id="' . slugify($label) . '">
            <div class="sidebar-navbar-header">
              <button class="submenu-back-button" onclick="toggleSubmenu(' . "'" . slugify($label) . "'" . ')">
                <svg role="img" aria-hidden="true" width="30px" height="30px"><path stroke="#171a20" stroke-width="1.5" d="M10.5 17.5l4.5-4 4.5 4" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="rotate(270 15 15)"></path></svg>
                Volver
              </button>

              <button class="sidebar-navbar-close-button" onclick="toggleSidebar()">
                <i class="cross-icon">
                  <svg width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z" fill="currentColor"></path>
                  </svg>
                </i>
              </button>
            </div>

            <div class="sidebar-navbar-body">
              <span class="submenu-title">' . $label . '</span>
              <ul class="sidebar-items submenu-items">' . $submenu . '</ul>
            </div>
          </div>';
}

function buildTree($menu, $parentMenu = '')
{

  foreach ($menu as $item) {

    if ($item->visible) {
      $withSubmenu = isset($item->children) ? 'class="open-submenu"' : '';
      $right_arrow = isset($item->children) ? '<svg role="img" aria-hidden="true" width="30px" height="30px"><path stroke="#171a20" stroke-width="1.5" d="M10.5 17.5l4.5-4 4.5 4" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="rotate(270 15 15)"></path></svg>' : '';

      $openTag = "<li class='sidebar-item'>";
      $label = "<a " . $withSubmenu . " href='" . $item->href . "'>" . $item->label . $right_arrow . "</a>";
      $subMenu = isset($item->children) ?  subMenuHeader(buildTree($item->children, ''), $item->label)  : '';
      $closeTag = "</li>";
      $parentMenu = $parentMenu . $openTag . $label . $subMenu . $closeTag;
    }
  }

  return $parentMenu;
}
