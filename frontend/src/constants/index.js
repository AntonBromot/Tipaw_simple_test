export const URL = "http://localhost:3000";

export const GET = {
  method: 'GET',
  //mode: 'cors',
};

export const POST = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
};

export const PUT = {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' }
};

export const DELETE = {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' }
};

export const DROP_NAV_LIST = [
  { name: 'Dogs to adopt', dropElems: [
    { value: 'Dogs available', link: '/11' },
    { value: 'List of shelters', link: '/12' },
    { value: 'Races', link: '/13' },
  ]},
  { name: 'Dogs for sale', dropElems: [
    { value: 'Dogs available', link: '/11' },
    { value: 'List of shelters', link: '/12' },
    { value: 'Races', link: '/13' },
  ]},
  { name: 'Veterinares', dropElems: [
    { value: 'Home', link: '/21' },
    { value: 'List', link: '/22' },
    { value: 'I\'m veterinare', link: '/23' },
    { value: 'Recomended', link: '/23' },
  ]},
  { name: 'My profile', additionClassName: 'navProfile', dropElems: [
    { value: 'My profile PRO', link: '/31' },
    { value: 'My messages', link: '/32' },
    { value: 'Logout', link: '/33', additionClassName: 'navLogOut'},
  ]}
];

export const TOP_NAV_LINKS = [
  { value: 'Articles', link: '/acticles' },
  { value: 'Our Charter', link: '/charter' },
  { value: 'Contact', link: '/contact' }
];

