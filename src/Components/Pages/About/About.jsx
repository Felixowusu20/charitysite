import React from 'react';
import Navtab from '../../NavBar/Navtab';
import "./About.css"; // Import the updated About.css
import Members from '../../Members';
import Footer from '../../Footer/Footer';

const About = () => {
  return (
    <>
      <Navtab />
      <div className="about-hero-container">
        <div className="about-hero-content">
          <h1 className="about-top-text">About Us.</h1>
        </div>
      </div>

      <div className="about-who-we-are">
        <h1>WHO WE ARE</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi culpa ab eum ad odio, reprehenderit placeat nam fuga non cumque consectetur modi perspiciatis quam, libero quod inventore? Dolorum, deserunt. Unde, veniam, amet culpa, in labore nostrum totam provident aperiam odio sit eum eaque blanditiis deserunt expedita? Necessitatibus officiis quis dolorem recusandae explicabo, asperiores sequi cumque expedita eum, vitae totam perferendis deserunt facilis! Assumenda obcaecati delectus voluptatem quidem quis laborum alias, tenetur eum blanditiis cum facere voluptatum qui odit rerum commodi.
      </div>

      <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>HISTORY OF THE FOUNDATION</h1>

      <div className="about-history">
        <div className="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cupiditate doloribus at quia ex laudantium saepe ab quo id dolor quam, magnam molestias necessitatibus enim reiciendis accusantium nemo corrupti vero incidunt pariatur omnis. Aliquam doloremque corporis nemo hic omnis, itaque deserunt. Praesentium alias beatae accusamus qui, enim officia architecto laboriosam animi earum pariatur delectus nobis quae obcaecati dignissimos saepe ad dolore iure laudantium tempore a quidem sit odio? Harum quis, provident amet pariatur rem natus officia necessitatibus accusamus architecto voluptatibus nobis possimus, laudantium obcaecati doloremque temporibus fuga cumque quia quasi quam autem. Nesciunt dignissimos quam delectus et eaque quas labore?
        </div>
        <div className="right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque tempora deleniti iusto suscipit harum a quaerat pariatur assumenda ut! Dolore magni sapiente laboriosam excepturi possimus! Labore fugit consequuntur molestias excepturi. Earum iusto omnis dignissimos autem harum sint numquam optio natus similique, quasi quis voluptates atque perferendis? Eius, magnam sint nobis autem a tempora itaque? Magnam eaque culpa ipsam recusandae aliquid asperiores autem numquam repellat quis nulla omnis quidem qui illum voluptate ex aspernatur, perferendis, consectetur sunt deleniti laudantium? Ipsa blanditiis doloribus consequatur nostrum, incidunt placeat ea sunt sequi ut laudantium accusamus harum cupiditate dolorum voluptates corrupti dolore similique architecto.
        </div>
      </div>

      <Members />
      <Footer />
    </>
  );
};

export default About;