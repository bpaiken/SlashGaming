const sampleState = {
  currentUser: {
    id: 1,
    username: 'nokka',
    characters: [1]
  },
  characters: {
    1: {
      id: 1,
      user_id: 1,
      name: 'nokka_sorc',
      account: 'nokkaTwo',
      events: [3],
    }
  },
  events: {
    3: {
      id: 3,
      name: 'some event',
      status: 'upcoming',
      start_date: '2017-09-25 10:12:25.002',
      end_date: '2017-09-25 10:12:25.002',
      characters: [1,2] // feature to see which characters are participating in event
    }
  },
  users: {
    1: {
      id: 1,
      username: 'nokka',
      characters: [1],
      events: [3]
    },
    2: {
      id: 2,
      username: 'SlashPanda',
      characters: [2,3],
      events: [3]
    }
  }
}