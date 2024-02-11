import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { gapi } from "gapi-script";
import { addDays, format } from "date-fns";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

var CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`
var API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`

const DISCOVERY_DOCS = [`${process.env.REACT_APP_DISCOVERY_DOCS}`]
const SCOPES = `${process.env.REACT_APP_SCOPES}`

export const handleClick = (event, setBooked) => {
  gapi.load('client:auth2', () => {

    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })

    gapi.client.load('calendar', 'v3', () => console.log('bam!'))

    gapi.auth2.getAuthInstance().signIn()
    .then(() => {
      var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event,
      })

      request.execute(event => {
        window.open(event.htmlLink)
      })
      setBooked(true);
      

      /*
          Uncomment the following block to get events
      */
      /*
      // get events
      gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      }).then(response => {
        const events = response.result.items
        console.log('EVENTS: ', events)
      })
      */
  

    })
  })
}

export const availableTime = [
  {
      time: '1:30',
      convertedTime: '13:30',
      spot: '2'
  },
  {
      time: '2:00',
      convertedTime: '14:00',
      spot: '1'
  },
  {
      time: '2:30',
      convertedTime: '14:30',
      spot: '2'
  },
  {
      time: '3:00',
      convertedTime: '15:00',
      spot: '1'
  },
  {
      time: '3:30',
      convertedTime: '15:30',
      spot: '2'
  },
  {
      time: '4:00',
      convertedTime: '16:00',
      spot: '2'
  },
  {
      time: '4:30',
      convertedTime: '16:30',
      spot: '2'
  },
  {
      time: '5:00',
      convertedTime: '17:00',
      spot: '2'
  },
  {
      time: '5:30',
      convertedTime: '17:30',
      spot: '2'
  },
  {
      time: '6:00',
      convertedTime: '18:00',
      spot: '1'
  },
  {
      time: '6:30',
      convertedTime: '18:30',
      spot: '2'
  },
  {
      time: '7:00',
      convertedTime: '19:00',
      spot: '2'
  },
]

// format date filter
export const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
};

export function formatDateToISO(dateString) {
  const date = new Date(dateString);
  const nextDay = addDays(date, 1);
  return format(nextDay, 'yyyy-MM-dd');
}