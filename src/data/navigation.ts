export interface NavLink {
  label: string
  to: string
}


export const HEADER_NAV_LEFT: NavLink[] = [
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
]


export const HEADER_NAV_RIGHT: NavLink[] = [
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const FOOTER_MENU: NavLink[] = [
  { label: 'Delivery', to: '/contact' },
  { label: 'FAQ', to: '/contact' },
  { label: 'Help', to: '/contact' },
  { label: 'More About Us', to: '/about' },
]

export const COMPANY_ADDRESS = '674 Gonzales Drive. Washington, PA 15301'
export const COMPANY_EMAIL = 'ouremailaddress@email.com'
