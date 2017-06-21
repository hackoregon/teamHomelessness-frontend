import React from 'react';
import { TitleNav } from '../Reuseable';
import StoryCard from '@hackoregon/component-library/lib/StoryCard/StoryCard';

const styles = {
  image: {
    display: 'block',
    margin: 'auto',
    width: '90%',
  },
  bodyContainer: {
    maxWidth: '100%',
    margin: '0 auto',
    lineHeight: '1.35em',
  },
  bodyContent: {
    fontSize: '16px',
    textAlign: 'left',
  },
};


const UnaccompaniedYouth = () => (
  <TitleNav
    title="Unaccompanied Youth—Undercounted?"
  >
    <StoryCard>
      <div style={styles.bodyContainer}>
        <p style={styles.bodyContent}>In 2015, 266 unaccompanied youth —
        people who are not part of a family with children or accompanied by a parent or guardian —
         met the HUD definition of homelessness, but only 5 documented homeless youth were under age 18. </p>

        <p style={styles.bodyContent}>Five? The number seemed at odds with our
        team’s lived experience. So we spoke with the professionals at
        P:ear, one of Portland’s key non-profit organizations serving homeless and
        transitional youth. We asked whether younger youth were underrepresented in the Count. </p>

        <img src="https://s3-us-west-2.amazonaws.com/hacko-homeless-staging/homelessness_h7_01.jpg" alt="Sign: Welcome to Pear" style={styles.image}  />
        <p style={styles.bodyContent}>P:ear said yes, and helped us understand why.</p>

        <p style={styles.bodyContent}>Over the past decade or so, eligibility for a range of
        youth services has expanded to include older youth —
        through ages 24 or even 25. What this means in practice is that organizations that once
         offered education, employment, health and related programs and services designed for 14
          - 21 year-olds, are now serving young adults in their mid-twenties.
          As a consequence, younger youth are  more selective about the services they seek and the organizations they tap. One of our experts pointed to the lack of common interests among
        14 and 25-year-olds. Another suggested intimidation as a factor keeping younger youth from asking for help from service providers — or participating in activities like the Count. </p>

        <p style={styles.bodyContent}>Another potential reason younger youth may not be
        represented in the Count proportionate to their
        numbers has to do with an increased emphasis on diversion. The goal of the County’s primary diversion program —
        Harry’s Mother, a comprehensive youth crisis center run by Janus
        Youth Programs — is to keep families together whenever possible.
        The theory here is to intervene early —
        helping younger youth who are runaways or are experiencing homelessness
        return home quickly with the support of counselors and other service providers that help keep them there.
        When this strategy succeeds, younger youth may experience only brief periods of homelessness and therefore be less likely to participate in the biennial Count. </p>

        <img src="https://s3-us-west-2.amazonaws.com/hacko-homeless-staging/homelessness_h7_0203Combined.jpg" alt="Sign: Welcome to Pear" style={styles.image}  />

        <p style={styles.bodyContent}>However, many younger youth seek to avoid exactly this situation. These youth may misrepresent their age or join “street families” to avoid exposure to authorities — including the police, the Department of
        Human Services, and, yes, even volunteers participating in the Count. Younger youth also
        tend to “double-up” with friends whose families are comfortable supporting them through a
         rough patch. These avoidance tactics offer another explanation for small numbers of younger
          youth in the Count. </p>

        <p style={styles.bodyContent}>We also asked P:EAR about the potential consequences of undercounting. “When we don’t have an accurate count, observed John Phillips,
        P:ear’s Safe Space Coordinator, “we risk not solving the right problems.” He cited the plight of sexual minority youth as an example. “Forty percent of
        homeless kids are LGBTQ. For them, the streets may actually be safer than home.” We also asked John and his colleagues Sarah Louise Allen, Education Coordinator, and Beth Burns, P;ear Co-Founder and Executive Director, what one thing they wished more people understood about youth and homelessness. </p>

        <p style={styles.bodyContent}>Their responses were
        immediate and identical. “Being homeless is not a choice.” </p>
      </div>
    </StoryCard>
  </TitleNav>
);

export default UnaccompaniedYouth;
