import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

const dummy_meetups=[
    {
        id:'m1',
        title:'A First Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg',
        address:'some address 5,12345 some city',
        description:'This is a first meetup'
    },
    {
        id:'m2',
        title:'A Second Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg',
        address:'some address 10,12345 some city',
        description:'This is a second meetup'
    },
    {
      id:'m3',
      title:'A Third Meetup',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg',
      address:'some address 15,12345 some city',
      description:'This is a Third meetup'
  }
]

function MeetupDetails(props) {

    const meetup=dummy_meetups.find((meetup)=>{return meetup.id==props.id})

    console.log(props)

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
        </div>
      </Card>
    </li>
  );
}

export default MeetupDetails;