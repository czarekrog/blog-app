import React from "react";
import { StyledAbout, StyledHeaderImage, StyledSignature } from "./StyledAbout";

export const About = () => {
  return (
    <StyledAbout>
      <StyledHeaderImage
        src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Productivity Blog Team"
      />
      <h1>About us</h1>
      <p>
        We - The Productivity Team - love to optimize work. Daily, we run a
        company that helps others optimize their processes and workflows to
        scale better and bring more income.
      </p>
      <p>
        We decided to start our Productivity Blog, to share our knowledge with
        others. If you are an optimization freak, then this blog is totally for
        you. We want to share as much with you as possible to help you optimize
        and change your life. Imagine having more time with your family and
        friends. Sounds good? That's our goal.
      </p>
      <p>
        Our mission is to build awareness that wasting your productive time is
        wasting your life. Thanks to optimizing your daily processes - not only
        work-related but also family duties - can help you save a lot of time,
        money, and very often stress which is tightly connected with health.
      </p>
      <StyledSignature>The Productivity Team</StyledSignature>
    </StyledAbout>
  );
};
