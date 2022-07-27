import styles from './About.module.css'
import flowerPic from '../../assets/flower-aff-bg.png'

const About = props => {

  return (
    <main>
      <div className={styles.aboutPage}>
        <div className={styles.header}>
          <h1 className={styles.h1}>about re/mind</h1>
        </div>
        <div className={styles.flowerTextDiv}>
          <div className={styles.imgDiv}>
            <img className={styles.flowerProfImg} src={flowerPic} alt="flowerpic" />
          </div>
          <div className={styles.textDiv}>
            <p className={styles.p1}>
              Challenges and frustrations are a normal part of trying something new (or even just going about day-to-day life), but these frustrations can become easily exacerbated by our inherent <a href="https://thedecisionlab.com/biases/negativity-bias" className={styles.link}>negativity bias.</a> In short, humans are hardwired to feel and remember negative events and experiences more intensely than positive ones. This pessimistic tendency impacts many aspects of our lives, including how we make decisions, our interactions with others, and how we motivate ourselves.
            </p>
            <br />
            <p>
              Studies have shown that we are able to not only minimize the effects of a negativity bias, but also reframe our mindset entirely by engaging in a brief mindfulness exercise at the end of each day. This exercise, aptly named Three Good Things, involves writing down three good things that happened that day-- no matter how small or insignificant. This simple exercise is proven to cultivate an optimistic outlook, inspire gratitude, and, generally, help us view our experiences more positively.
            </p>
            <br />
            <p>
              The creators of re/mind were inspired to build this app after experiencing the intense doubt, social comparison, and fear of failure that rigorous academic settings can produce.
              We made re/mind to help ourselves and others lean into a positive outlook and, ultimately approach their challenges with optimism and self-confidence. Positive thinking has been (very thoroughly) linked to a longer lifespan, a greater resistance to illness, lower levels of pain and distress, and better physical and psychological well-being (among many, many more benefits). We're here to help you look on the bright side, and if you forget, don't worry-- we'll re/mind you :).
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
