import './style.css';
import { useEffect } from 'react';

export const PlacesPage = () => {
  useEffect(() => {
    document.body.className = 'places-background';
  }, []);

  return (
    <div className="places-page">
      <h2>Places page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        laboriosam labore aut iure odit maxime!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
        quaerat architecto deserunt natus sequi corrupti! Voluptatum, soluta
        similique ducimus reiciendis molestiae obcaecati esse fuga officiis
        aperiam sequi earum, corrupti quis voluptas commodi iure ab dicta?
        Aliquam voluptas dolorem, labore, fuga, at animi eveniet vitae eius
        alias libero consectetur quod eaque impedit natus doloremque! Facere
        quidem temporibus, corrupti qui consectetur veritatis dicta magnam
        maxime hic, quam earum optio asperiores eos dolorem porro at architecto
        recusandae ipsum consequuntur aperiam voluptatibus beatae praesentium
        libero. Nostrum sequi, natus consequatur dolore accusamus quaerat
        laboriosam numquam delectus facilis. Praesentium cum itaque officiis
        unde quisquam quis iure.
      </p>
    </div>
  );
};
