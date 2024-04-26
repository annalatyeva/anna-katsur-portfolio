import "./AboutMe.module.scss";

import photoItem from "../../assets/images/anna.png";

const AboutMe = () => {
  return (
    <div className={aboutmeStyle.container}>
    <p> CREATIVE DIRECTOR / BRAND STRATEGIST / LECTURER</p>
    <p>HELLO! I'M ANNA KATSUR, CREATIVE DIRECTOR WITH A STRONG FOCUS ON CREATING IMPACTFUL BRAND PLATFORMS, BRANDING, INDENTITY, AND TYPOGRAPHY.</p>
    <div className={aboutmeStyle.about}>
    <div>
<p>With over a decade of experience, I specialize in elevating brand presence and engagement in the IT and fintech sectors. My professional journey includes leading over 50 successful advertising campaigns and spearheading significant redesign and rebranding initiatives for major corporations.</p>
<p>Currently, I lead the Creative Studio and Employer's Internal Brand Department at a major technology firm, where I have developed over 30 creative concepts and five comprehensive brand strategies. These efforts have not only strengthened the emotional connection between the brand and its audience but have also boosted brand recognition impressively.</p>
<div>
  <img
  src={photoItem}
  alt="Anna"
  />
</div>
</div>
</div>
<div className={aboutmeStyle.about}>
<p> I AM ALSO PASSIONATE ABOUT EDUCATION, SERVING AS A LECTURER AT THE BRITISH HIGHER SCHOOL OF ART AND DESIGN.</p>
<p>There, I have designed and led a three-month intensive module focusing on research, design, and branding, among other subjects, preparing the next generation of designers and brand strategists.</p>
<p>Holding a Global Talent visa in the UK for visual arts, my work has been recognized with several prestigious awards, including a recent Gold at the Futuregosummit for 'New artist' and a Silver at the European Design Awards for the SB Type system.</p>
</div>
<p>I AM KEEN TO SHARE INSIGHTS AND EXPLORE SYNERGIES AT YOUR NEXT FESTIVAL, PUBLIC SPEAKING EVENT, OR SEMINAR. IF YOU'RE INTERESTED IN REVITALIZING YOUR BRAND OR INFUSING INNOVATIVE CREATIVE STRATEGIES INTO YUOR CORPORATE CULTURE, I AM HERE TO INSPIRE AND GUIDE. LET'S CONNECT AND CREATE SOMETHING EXTRAORDINARY TOGETHER!</p>
<div>Media
    <a>[REBRANDING PROGRAM]</a>
    <a>[SBER DESIGN PROMO]</a>
    <a>[CHANGES IN THE FIELD OF ARTS]</a>
    <a>[ART AND ILLUSION STUDY]</a>
    <a>[SYNTHESIS OF PAINTING AND ML TECHNOLOGIES]</a>
</div>
    </div>
  );
};

export default AboutMe;
