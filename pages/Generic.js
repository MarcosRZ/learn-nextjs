import React from 'react';
import withMainLayout from '../HOC/withMainLayout';

const Generic = () => (
  <div>
    <div id="page-wrapper">
      <section id="wrapper">
        <header>
          <div className="inner">
            <h2>Generic</h2>
            <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
          </div>
        </header>

        <div className="wrapper">
          <div className="inner">
            <h3 className="major">Lorem ipsum dolor</h3>
            <p>
              Morbi mattis mi consectetur tortor elementum, varius pellentesque
              velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac
              scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis
              lacinia velit aliquet. Duis non efficitur nisi, id malesuada
              justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus
              leo donec vel dolor at arcu tincidunt bibendum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet
              justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel
              ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit
              accumsan cursus. Etiam ut gravida sapien.
            </p>

            <p>
              Vestibulum ultrices risus velit, sit amet blandit massa auctor sit
              amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor
              mollis id vel diam. Praesent sit amet posuere risus, eu faucibus
              lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta
              quam. Proin nec commodo, vel scelerisque nisi scelerisque.
              Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor
              orci eu dolor consectetur, interdum ullamcorper ante tincidunt.
              Mauris felis nec felis elementum varius.
            </p>

            <h3 className="major">Vitae phasellus</h3>
            <p>
              Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
              Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
              egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
              in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>

            <section className="features">
              <article>
                <a href="#" className="image">
                  <img src="/static/images/pic04.jpg" alt="" />
                </a>
                <h3 className="major">Sed feugiat lorem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="#" className="image">
                  <img src="/static/images/pic05.jpg" alt="" />
                </a>
                <h3 className="major">Nisl placerat</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
            </section>
          </div>
        </div>
      </section>

      <section id="footer">
        <div className="inner">
          <h2 className="major">Get in touch</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <form method="post" action="#">
            <div className="fields">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4" />
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
          <ul className="contact">
            <li className="fa-home">
              Untitled Inc<br />
              1234 Somewhere Road Suite #2894<br />
              Nashville, TN 00000-0000
            </li>
            <li className="fa-phone">(000) 000-0000</li>
            <li className="fa-envelope">
              <a href="#">information@untitled.tld</a>
            </li>
            <li className="fa-twitter">
              <a href="#">twitter.com/untitled-tld</a>
            </li>
            <li className="fa-facebook">
              <a href="#">facebook.com/untitled-tld</a>
            </li>
            <li className="fa-instagram">
              <a href="#">instagram.com/untitled-tld</a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Untitled Inc. All rights reserved.</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <script src="/static/js/jquery.min.js" />
    <script src="/static/js/jquery.scrollex.min.js" />
    <script src="/static/js/browser.min.js" />
    <script src="/static/js/breakpoints.min.js" />
    <script src="/static/js/util.js" />
    <script src="/static/js/main.js" />
  </div>
);

export default withMainLayout(Generic);
