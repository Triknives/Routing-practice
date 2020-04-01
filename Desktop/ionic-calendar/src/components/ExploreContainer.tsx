import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

class Calendar extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }
  componentDidMount = () => {
    getEvents(){
      let that = this;
      function start() {
        gapi.client.init({
          'apiKey': GOOGLE_API_KEY
        }).then(function() {
          return gapi.client.request({
            'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
          })
        }).then( (response) => {
          let events = response.result.items
          that.setState({
            events
          }, ()=>{
            console.log(that.state.events);
          })
        }, function(reason) {
          console.log(reason);
        });
      }
      gapi.load('client', start)
    }
};