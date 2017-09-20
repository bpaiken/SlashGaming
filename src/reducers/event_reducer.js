// import merge from 'lodash/merge'

// Below is for testing only
// Format
// {
// 	"name": "Some new event",
// 	"start": "2017-09-25T10:12:25.002Z",
// 	"end": "2017-10-29T10:12:25.002Z"
// }
const initialState = {
  1: {
    id: 1,
    name: 'Amazing Event 1',
    start: '2017-09-11T10:12:25.002Z',
    end: '2017-10-15T10:12:25.002Z',
  },
  2: {
    id: 2,
    name: 'Amazing Event 2',
    start: '2017-09-16T10:12:25.002Z',
    end: '2017-10-18T10:12:25.002Z',
  },
  3: {
    id: 3,
    name: 'Amazing Event 3',
    start: '2017-09-19T10:12:25.002Z',
    end: '2017-10-21T10:12:25.002Z',
  },
  4: {
    id: 4,
    name: 'Amazing Event 4',
    start: '2017-09-25T10:12:25.002Z',
    end: '2017-10-29T10:12:25.002Z',
  }
}

const eventReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch (action.type) {
    // case :
      
    default:
      return state;
  }
}

export default eventReducer