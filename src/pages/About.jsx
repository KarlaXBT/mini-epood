import React from "react";

function About() {
  return (
    <div>
      {/* Hero / Intro */}
      <h1>Welcome to Our Shop!</h1>
      <p>
        We are passionate about providing quality products and excellent
        service. Our mission is to make your shopping experience simple, fast,
        and enjoyable.
      </p>

      {/* Our Story */}
      <h2>Our Story</h2>
      <p>
        Founded in 2025, our company was created to bring the best products to
        our customers. We value quality, reliability, and a personal touch in
        everything we do.
      </p>

      {/* Values / Highlights */}
      <h2>What We Stand For</h2>
      <ul>
        <li>High-quality products at fair prices</li>
        <li>Fast and reliable shipping</li>
        <li>Customer satisfaction is our top priority</li>
        <li>Continuous improvement and innovation</li>
      </ul>

      {/* Optional Fun Fact */}
      <h2>Did You Know?</h2>
      <p>
        In our first year, we shipped over 500 packages to happy customers all
        around the country!
      </p>
    </div>
  );
}

export default About;
