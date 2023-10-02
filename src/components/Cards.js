import React from 'react';
import Card from "./Card";
import image1 from "../assets/estatua.jpg";
import image2 from "../assets/hojas.jpg";
import image3 from "../assets/luces.jpg";

const cards = [
  {
    id: 1,
    title: 'Talle de Arte',
    image: image1,
    instructor: "Soriano Reyes"
  },
  {
    id: 2,
    title: 'Taller de Fotografia',
    image: image2,
    instructor: "Davila Bautista"
  },
  {
    id: 3,
    title: 'Taler de Diseño Web',
    image: image3,
    instructor: "Miranda Avila"
  }
];

export default function Cards() {
  return (
    <div className='container d-flex justify_content_center align_items_center h-100'> 
      <div className='row'>
        {
          cards.map(c => (
            <div className='col-md-4' key={c.id}>
              <Card
                id={c.id}
                title={c.title}
                image={c.image}
                instructor={c.instructor}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}
