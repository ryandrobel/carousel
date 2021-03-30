import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

let styles = {
    margin: 'auto',
    width: '500px'
  };
  
function App() {
  return (
<div style={styles}>
  <div><h1>Outdoor Experiences in Illinois</h1></div>
<Carousel>
<div>
<img className="bg bg-danger" src="https://2ae1l5190lpna5muo2laxyu2-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/4699998569001_5647650740001_5647617356001-vs-300x169.jpg" alt="Pomona Natural Bridge" />
<p className="legend">Pomona Natural Bridge</p>
</div>
<div>
<img src="https://www.enjoyillinois.com/assets/Tourism-Operators/images/itims/_resampled/ResizedImageWzgwMCw2MDBd/93_cave_in_rock.png" alt="Cave-in-Rock"/>
<p className="legend">Cave In Rock</p>
</div>
<div>
<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Cahokia Mounds Historic Site"/>
<p className="legend">Cahokia Mounds Historic Site</p>
</div>
<div>
<img src="https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2018/03/TripAdvisor_IlliniTrav-700x525.jpg" alt="Matthiessen State Park"/>
<p className="legend">Matthiessen State Park</p>
</div>
<div>
<img src="https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2018/03/TripAdvisor_Dawn-P-700x466.jpg" alt="Linmar Gardens"/>
<p className="legend">Linmar Gardens</p>
</div>
<div>
<img src="https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2018/03/TripAdvisor_Rj-D-700x525.jpg" alt="Dixon Springs State Park"/>
<p className="legend">Dixon Springs State Park</p>
</div>
</Carousel>
</div>
  );
}

export default App;