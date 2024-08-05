import React from 'react'
import PostAuthor from './components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from './images/thumbnail.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor/>
          <div className="post-detail_buttons">
              <Link to={"/posts/werwer/edit"} className='btn sm primary'>Edit</Link>
              <Link to={"/posts/werwer/edit"} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail_thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Laudantium rerum iusto sit debitis beatae nihil maxime 
           distinctio vel explicabo, quos dignissimos et eligendi ab
            unde cum reiciendis repellendus enim architecto vitae odio 
            quibusdam mollitia officiis ea. Labore, eaque? Temporibus, quidem?
        </p>
        <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              At a magnam officiis. Accusantium, iure commodi deleniti
              quasi in temporibus. Expedita iusto ducimus exercitationem 
              tenetur ut! Laudantium, veniam aperiam ad itaque vero ab 
              error vel deserunt odit ipsam quibusdam obcaecati consectetur?
              Eaque, doloribus aliquam debitis ratione nesciunt id ut iure 
              possimus magni nulla ullam laudantium dicta!
        </p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cumque rem atque exercitationem ut corrupti sint rerum.
              Quibusdam neque aperiam consequatur vero? Enim vitae illum
              aspernatur quae laudantium culpa consequuntur minima ipsam 
              dolores ratione soluta nam ab molestias, natus facilis laboriosam, 
              voluptatum placeat veritatis minus blanditiis accusantium at. Dicta 
              architecto tempore maxime cum ad natus enim veritatis deleniti error
              placeat sapiente, non soluta perspiciatis debitis id officia itaque? 
              Nihil, quis consequuntur aspernatur eaque eveniet placeat tempora dolore
              odit, ipsum nobis ipsa consectetur illum mollitia, culpa deleniti laborum
              qui hic doloribus natus exercitationem. Voluptates ipsa quod consequatur,
              molestiae unde quisquam suscipit omnis deserunt minus recusandae porro
              laborum mollitia voluptatibus deleniti aliquam tenetur tempore!
              <p>
                Lorem,ipsum dolor sit amet consectetur adipisicing elit.Tste, illum.Animi
                ispa neque sed rerum labariosam! Impedit explicabo voluptas eveniet.
             </p>
             <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ullam iure cupiditate illo,
              architecto suscipit itaque eum deserunt, perspiciatis dolorum amet impedit voluptatum,                
              sunt vel accusamus odit adipisci consequuntur quasi. Unde culpa eveniet repellat, 
              labore doloremque ab laboriosam fugiat similique autem rerum ea! Quia quis a cum 
              fuga maxime dolores voluptates voluptatibus natus ea. Inventore ex, aliquam iusto illum,
              doloribus quia non fugit modi quibusdam voluptatibus quae dignissimos! Adipisci eos
              voluptatem, iste beatae sed laudantium. Dicta quaerat dolor molestiae nobis tempora
              quos et itaque natus vitae, sapiente error quo est libero ratione repudiandae
              voluptate voluptatum, odit tenetur dolores fugit laudantium rerum. Rerum totam 
              quis vero harum quae quisquam quas officiis explicabo voluptatibus dolor modi minus
              natus sapiente, asperiores consequuntur laboriosam voluptate ex voluptates aperiam!
              Dolore et excepturi, dicta, ipsum placeat, error fugit eum alias molestias aperiam 
              perspiciatis iusto ad sapiente fuga tempora harum consequuntur delectus quasi autem 
              dolorem repellat corporis optio maxime perferendis. Sequi sunt sapiente doloribus 
              ducimus quas nemo consequatur. Dolorum aperiam non reprehenderit id quo doloremque 
              eveniet ipsam incidunt accusantium, sed error animi libero illo repudiandae ab explicabo 
              omnis aspernatur. Quisquam doloremque consectetur voluptates harum. Cum, voluptas tempore, 
              nihil quod veritatis consequatur accusamus aperiam similique illo, dolor magnam?
             </p>
      
      </div>
      
    </section>
  )
}

export default PostDetail


