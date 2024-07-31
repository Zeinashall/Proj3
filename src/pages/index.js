import Head from "next/head";
import "../app/globals.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // This code will only run on the client side
    const anchors = document.querySelectorAll(".menu a");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", function (e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Nissan Website</title>
        <meta name="description" content="Nissan Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="imagecontainer" id="home">
        <img src="nissan-kicks.webp" width="100%" alt="Nissan Kicks" />
        <div class="container">
          <p class="caption">By Your Side...</p>
        </div>
      </div>

      <div id="about" class="section">
        <div class="container">
          <h2 class="section-title">About Nissan</h2>
          <div class="section">
            <div class="container-about">
              <div class="content-section">
                <div class="content">
                  <p>
                    Nissan has a long history of innovation and excellence in
                    the automotive industry. Founded in 1933, Nissan has been at
                    the forefront of developing groundbreaking vehicles that
                    combine performance, technology, and design.
                  </p>
                  <div class="button-readmore">
                    <button class="button-alone" type="submit">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
              <div class="image-section">
                <img src="car10.webp" width="100%" alt="Nissan" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="details" class="section">
        <div class="container">
          <h2 class="section-title">DETAILS!</h2>
          <div class="card-container">
            <div class="card">
              <div class="classpic">
                <img src="nissan-kick.webp" alt="Image 1" />
              </div>
              <div class="card-content">
                <h3>Nissan GT-R</h3>
                <p>PRICE: $213,775</p>
              </div>
            </div>

            <div class="card">
              <div class="classpic">
                <img src="nissan2.webp" alt="Image 2" />
              </div>
              <div class="card-content">
                <h3>Nissan Sentra</h3>
                <p>PRICE: $113,540</p>
              </div>
            </div>

            <div class="card">
              <div class="classpic">
                <img src="nissan3.webp" alt="Image 3" />
              </div>
              <div class="card-content">
                <h3>Nissan Rogue</h3>
                <p>PRICE: $24,300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="login" class="section">
        <h2 class="section-title">LOGIN!</h2>
        <div id="login" class="section">
          <form class="login-form" action="#">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <label for="birthdate">Birthdate:</label>
            <input type="date" id="birthdate" name="birthdate" required />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
