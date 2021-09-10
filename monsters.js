//to hold the data
let monsters = [
  {
  '_id': 1,
  'event_id': 1,
  'monster-name': 'Linda',
  'monster-type': 'zombie',
  'monster-hp': 6
},
  {
  '_id': 2,
  'event_id': 2,
  'monster-name': 'notLinda',
  'monster-type': 'notSmartie',
  'monster-hp': -3
},
  {
  '_id': 3,
  'event_id': 3,
  'monster-name': 'thisLinda',
  'monster-type': 'ambitiono',
  'monster-hp': 0
  }
]

document.getElementById('add-monster').addEventListener('click', () => {
  monsters.push({ 
    id: monsters.length+=2,
    name: `${document.getElementById('monster-name').value}`,
    type: `${document.getElementById('monster-type').value}`,
    hp: `${document.getElementById('monster-hp').value}`
  })
});