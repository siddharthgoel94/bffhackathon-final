import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './TourList.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Icons() {
  return (
    <div className="container">
        
        <div className="cards left">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='imgs' src="https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-800x450.jpg" />
      <Card.Body>
        <Card.Title className='cardTitle'><h3>Valorant</h3></Card.Title>
        <Card.Text className='cardText'>
          <p>Date: 2023-04-01</p>
          <p>Location: Online</p>
          <p>Organiser: VLT</p>
          <p>Prize Pool: 1 lakh</p>
          <p>Registeration: Free</p>
        </Card.Text>
        <Button className='btns' variant="primary"><a href="#">REGISTER</a></Button> 
      </Card.Body>
    </Card>
        </div>
        
        <div className="cards">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='imgs' src="https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg" />
      <Card.Body>
        <Card.Title className='cardTitle'><h3>PUBG</h3></Card.Title>
        <Card.Text className='cardText'>
          <p>Date: 2023-04-05</p>
          <p>Location: Offline</p>
          <p>Organiser:S8UL</p>
          <p>Prize Pool: 1.2 lakh</p>
          <p>Registeration: Paid</p>
        </Card.Text>
        <Button className='btns' variant="primary"><a href="#">REGISTER</a></Button>
      </Card.Body>
    </Card>
        </div>
        
        <div className="cards">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='imgs' src="https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2021/02/FIFA-AS-AN-ESPORT-585x405.jpg "/>
      <Card.Body>
        <Card.Title className='cardTitle'><h3>FIFA</h3></Card.Title>
        <Card.Text className='cardText'>
          <p>Date: 2023-04-23</p>
          <p>Location: Online</p>
          <p>Organiser:VLT</p>
          <p>Prize Pool: 1.4 lakh</p>
          <p>Registeration: Free</p>
        </Card.Text>
        <Button className='btns' variant="primary"><a href="#">REGISTER</a></Button>
      </Card.Body>
    </Card>
        </div>
        <div className="cards left">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='imgs' src="https://resources.esportsinsider.com/esportsinsider/2020/06/Ecricket-World-Series.jpg" />
      <Card.Body>
        <Card.Title className='cardTitle'><h3>CRICKET</h3></Card.Title>
        <Card.Text className='cardText'>
        <p>Date: 2023-04-21</p>
          <p>Location: Online</p>
          <p>Organiser:Sky E-sports</p>
          <p>Prize Pool: 1.3 lakh</p>
          <p>Registeration: Free</p>
        </Card.Text>
        <Button className='btns'><a href="#">REGISTER</a></Button>
      </Card.Body>
    </Card>
        </div>
        
        <div className="cards">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='imgs' src="https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Pokemon_Go.png/220px-Pokemon_Go.png" />
      <Card.Body>
        <Card.Title className='cardTitle'><h3>POKEMON GO</h3></Card.Title>
        <Card.Text className='cardText'>
        <p>Date: 2023-04-30</p>
          <p>Location: Offline</p>
          <p>Organiser:S8UL</p>
          <p>Prize Pool: 1.7 lakh</p>
          <p>Registeration: Paid</p>
        </Card.Text>
        <Button className='btns' variant="primary"><a href="#">REGISTER</a></Button>
      </Card.Body>
    </Card>
        </div>
        <div className="cards">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='imgs' src="https://yt3.googleusercontent.com/kNDsswXGbblncBBkZjDQMxXvmIuW04X096_NHuUjc3x5yK7oHiQaU3VQbR72OdTVivhFIjRntw=s900-c-k-c0x00ffffff-no-rj" />
      <Card.Body>
        <Card.Title className='cardTitle'><h3>FREE FIRE</h3></Card.Title>
        <Card.Text className='cardText'>
        <p>Date: 2023-05-21</p>
          <p>Location: Online</p>
          <p>Organiser:VLT</p>
          <p>Prize Pool: 2.1 lakh</p>
          <p>Registeration: Free</p>
        </Card.Text>
        <Button className='btns' variant="primary"><a href="#">REGISTER</a></Button>
      </Card.Body>
    </Card>
        </div>
       
        <div className="cards left">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='imgs' src="https://elements-cover-images-0.imgix.net/fa96dde1-ac57-4c5c-9ec9-b43d2e699814?auto=compress%2Cformat&fit=max&w=900&s=ae8a4d3cef830dfbfd690cd6d474c5f5" />
      <Card.Body>
        <Card.Title className='cardTitle'><h3>SOCCER</h3></Card.Title>
        <Card.Text className='cardText'>
        <p>Date: 2023-05-12</p>
          <p>Location: Offline</p>
          <p>Organiser:Sky E-sports</p>
          <p>Prize Pool: 1.4 lakh</p>
          <p>Registeration: Paid</p>
        </Card.Text>
        <Button className='btns' variant="primary"><a href="#">REGISTER</a></Button>
      </Card.Body>
    </Card>
        </div>
        <div className="cards">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='imgs' src="https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2021/02/FIFA-AS-AN-ESPORT-585x405.jpg" />
      <Card.Body>
        <Card.Title className='cardTitle'><h3>FIFA</h3></Card.Title>
        <Card.Text className='cardText'>
        <p>Date: 2023-05-06</p>
          <p>Location: Offline</p>
          <p>Organiser: S8UL</p>
          <p>Prize Pool: 1.5 lakh</p>
          <p>Registeration: Free</p>
        </Card.Text>
        <Button className='btns' variant="primary"><a href="#">REGISTER</a></Button>
      </Card.Body>
    </Card>
        </div>
        
        <div className="cards">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='imgs' src="https://yt3.googleusercontent.com/kNDsswXGbblncBBkZjDQMxXvmIuW04X096_NHuUjc3x5yK7oHiQaU3VQbR72OdTVivhFIjRntw=s900-c-k-c0x00ffffff-no-rj" />
      <Card.Body>
        <Card.Title className='cardTitle'><h3>FREE FIRE</h3></Card.Title>
        <Card.Text className='cardText'>
        <p>Date: 2023-04-29</p>
          <p>Location: Offline</p>
          <p>Organiser: VLT</p>
          <p>Prize Pool: 2 lakh</p>
          <p>registeration: Paid</p>
        </Card.Text>
        <Button className='btns' variant="primary"><a href="#">REGISTER</a></Button>
      </Card.Body>
    </Card>
        </div>
    </div>
    
  );
}

export default Icons;