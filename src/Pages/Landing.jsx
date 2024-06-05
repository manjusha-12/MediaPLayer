import React from 'react'
import { Link } from 'react-router-dom'
import MediaImg from '../assets/headphones-11207.gif'
import { Card } from 'react-bootstrap'
import MV from '../assets/blender-12153.gif'
import CV from '../assets/music-7683.gif'
import WH from '../assets/record-8329.gif'

function Landing() {
  return (
    <>
      <div className="landing-section container">
       <div className="row align-items-center my-5">
        <div className="col-lg-5">
          <h4>WELCOME TO <span className='text-warning'>MEDIA PLAYER</span></h4>
          <p className='mt-3' style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum ullam nulla iusto cum. Incidunt quibusdam iste itaque, numquam quidem doloremque, vitae deserunt nihil et, ipsa optio architecto officiis cupiditate?</p>
          <Link to={'/Home'} className='btn btn-warning'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
           <img src={MediaImg} className='img-fluid' alt="MediaImg" />
        </div>
       </div>

       {/* features */}

      <div className="features my-5">
        <h3 className='mt-5 text-center'>Features</h3>
        <div className="row">
          <div className="col-lg-4">
          <Card style={{ width: '19rem' ,height:"500px"}}>
      <Card.Img variant="top" src={MV} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolores consectetur ex tenetur cum. alias ut voluptate temporibus beatae esse vero adipisci.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '19rem' ,height:"500px"}}>
      <Card.Img variant="top" className='img-fluid' src={WH} />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolores consectetur ex tenetur cum. alias ut voluptate temporibus beatae esse vero adipisci.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '19rem' ,height:"500px"}}>
      <Card.Img variant="top" className='img-fluid' src={CV} />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolores consectetur ex tenetur cum. alias ut voluptate temporibus beatae esse vero adipisci.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
    {/* section */}
      <div className="section container">
        <div className="row border round p-5 my-5">
          <div className="col-lg-5">
            <h3 className='text-warning'>Simple, Fast and Powerful</h3>
            <p style={{textAlign:"justify"}}><span className='fs-5'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisdistinctio magnam fuga ea nulla reprehenderit illum temporibus soluta quidem.</p>
             <p style={{textAlign:"justify"}}><span className='fs-5'>Categorize Videos:</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere deserunt autem in incidunt temporarehenderit dolorem veniam rerum quasi nam inventore doloremque quis veritatis nisi.</p>
             <p style={{textAlign:"justify"}}><span className='fs-5'>Managing History</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illo eum dolor veniam omnis quis animi quibusdam, beatae modi ratione, deleniti quae deserunt, ut enim aperiam magnam</p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/qvsiJKdDxPs?si=1wjRmzHlgPeSSw3F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Landing



