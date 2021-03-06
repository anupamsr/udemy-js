const data = [{
    name: 'anda',
    age: 10,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'banda',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'danda',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
];

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length ? {
        value: profiles[nextIndex++],
        done: false
      } : {
        done: true
      };
    }
  };
}

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
  document.getElementById('profileDisplay').innerHTML = `
  <ul class='list-group'>
    <li class='list-group-item'>Name: ${currentProfile.name}</li>
    <li class='list-group-item'>Age: ${currentProfile.age}</li>
    <li class='list-group-item'>Location: ${currentProfile.location}</li>
    <li class='list-group-item'>Gender: ${currentProfile.gender}</li>
    <li class='list-group-item'>Looking for: ${currentProfile.lookingfor}</li>
  </ul>
  `;

  document.getElementById('imageDisplay').innerHTML = `
  <img src='${currentProfile.image}'>;
  `;
  } else {
    window.location.reload();
  }
}