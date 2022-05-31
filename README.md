# 🔥 Responsive Portfolio Website Imran Baitham

### 🔥 Responsive Portfolio Website

- Responsive Portfolio Website Using HTML CSS & JavaScript
- Smooth scrolling in each section.
- Includes a dark and light mode.
- Developed first with the Mobile First methodology, then for desktop.
- Compatible with all mobile devices and with a beautiful and pleasant user interface.

💙 Join the channel to see more videos like this.

![preview img](/preview.png)



=================================


/*=============== HOME ===============*/
.home {
  display: flex;
}

.container .left h1 {
  letter-spacing: .5rem;
  text-align: center;
  font-size: 3.2rem;
  font-weight: 200;
  text-transform: uppercase;
  color: hsl(0, 36%, 70%);
  line-height: 3.5rem;
}

.container .left h1 span {
  color: hsl(0, 6%, 24%);
  font-weight: 700;
}

.container .left p {
  max-width: 450px;
  text-align: center;
  color: hsl(0, 36%, 70%);
  font-size: .9rem;
  line-height: 1.5rem;
  margin: 20px auto 40px auto;
}

/* 
footer {
  padding: 10px 0;
  background-color: black;
  color: white;
  text-align: center;
  font-size: .8rem;
  line-height: 1.2rem;
}

footer a {
  color: aqua;
  text-decoration: none;
} */

@media only screen and (min-width: 768px) {
  header {
    padding-left: 10%;
  }

  .container {
    padding-top: 0;
    padding-bottom: 0;
  }

  .container .left {
    padding-top: 28vh;
    width: 100%;
    height: 100vh;
    padding-left: 10%;
    background-image: url(./images/bg-pattern-desktop.svg);
    background-size: cover;
    background-position: center;
  }

  .container .left h1 {
    text-align: left;
    font-size: 5rem;
    line-height: 5.5rem;
  }

  .container .left p {
    margin-left: 0;
    text-align: left;
    font-size: 1.1rem;
  }
}

