import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Quote from "components/Typography/Quote.jsx"
import postStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx"

class WishSection extends React.Component {
  render() {
    const { classes } = this.props
    const pstyle = {
      "text-align": "justify",
      "text-justify": "inter-word",
    }
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <div>
              <h2 className={classes.title}>
                A question from a girl to the world out there...
              </h2>
            </div>
            <div>
              <p style={pstyle}>
                It was a day when he was getting an award for a competition,
                there he heard that a girl also won an award that day. It was a
                quiz competition… So, by general assumptions he thought she was
                a nerd. Then it was time to receive the awards… Her name was
                called, she went to the stage receive an award. That’s the
                moment when he saw her… She was so gorgeous that she grabbed his
                attention completely, which happens very rarely… It felt like
                time stopped for a few moments… This doesn’t happen
                occasionally, then he thought to himself that nerds don’t look
                this beautiful… That’s what made her unique, she had the beauty
                and the brains. A perfect combination which made him interested
                in her. he wanted to know her more from that moment.
              </p>

              <p style={pstyle}>
                Days passed by; he didn’t know her details yet, He just knew her
                name and she was his junior in the college. He was trying to
                make his move to meet her, he just was waiting for a perfect
                time. One day suddenly she was a member in his team working for
                a project. He didn’t believe in law of attraction previously,
                but from that time he started to believe it. It was the day when
                he met her for the first time. He couldn’t take the eyes off
                her… She had the most attractive eyes ever. He was shy and
                introvert in nature. So, he slowly made the conversation and
                made friends with her.
              </p>

              <p style={pstyle}>
                From that day on, they started messaging each other. They
                started to know each other better. While knowing about her, he
                found that she was too much like him. They shared similar taste
                and qualities. She was a girl who leaves her heart in the books,
                reads a lot of romantic novels, always living in her own dream
                world lonely... She used to find happiness in the little moments
                in life which made her look sweet. She had her own love for the
                dogs and craved for the tattoos. She was too good with her
                studies and had her interest in programming. She was a kind of
                girl who could do any kind of work if she has interest in it…
                Even the impossible, he truly believed that. She was fierce like
                a lioness, evil like a witch, stalker like a spy, sweet and
                sleepy like a panda which made her a standout of the regular
                crowd… She was way too interesting for him. But she had very few
                friends, he didn’t know why… He wanted to know her more, she was
                a never-ending book with full of mysteries he wanted to solve
                for him. While he was curious person with unpredictable
                perception and always wanted a technical career with his own
                interest in crime. He always wanted to be like Harvey Specter in
                Suits. He was a person who had a feeling he knew everything and
                was never wrong. He was a person who likes every moment to be
                planned while she was a person who wanted to go with the flow
                with full of surprises… That made them different. She was like a
                blessing to him, he always wanted to see her happy. He could do
                anything for her… She was that important to him.
              </p>

              <p style={pstyle}>
                It was the night before his birthday… It was 12 in the night, he
                was casually spending time with his friend that day, then he
                received a message. It was her wishing for his birthday. He was
                a kind of person who didn’t even care if someone wished him, but
                that text from her made him smile… It was a moment he realized
                that she was person who made him happy. Getting her time really
                meant him a lot. From then he wanted to give her the best out of
                everything…
              </p>

              <p style={pstyle}>
                A few days later, she wrote a blog titled “A question from a
                girl to the world out there...” and sent him to read it and say
                how it was. He started to read it… It was about a girl who has
                seeks few answers from the world out there. It was one of the
                article which touched him. Yet it was her first one, it was
                totally priceless one, it was something which can’t be judged.
                That’s when he realized that she was not only a reader but also
                a great writer as well… He wanted to help her out but he wasn’t
                a writer. So, he promised her to design a blog where she could
                post her articles. Designing it required experience in web
                development which he was didn’t have. He knew he couldn’t do it
                but he made a promise to her. He started putting all his efforts
                on it ignoring all other things he had to complete, even his
                exam preparations. In a week, he successfully designed a blog
                website for her. He did something which impossible for him for
                more than two years. She was the reason that something
                impossible happened, then he smiled again… Then he realized that
                its not a few words or promises, things are considered important
                when the person we said them to meant that much to him.
              </p>

              <p style={pstyle}>
                It was few more days for her birthday. It was a time of plague
                in the world. Even meeting her was harder, surprises were
                literally impossible… He was thinking of a way to make her happy
                that day… Then he decided to unveil her the blog he created for
                her. Later that night he was speaking to her, suddenly he
                revealed her birthday surprise… He couldn’t even hold a
                surprise… She said she was so happy for it, even then he felt so
                sad that his surprise failed, he couldn’t think another one.
                Then he could literally understand how the teachers felt when
                the question paper was leaked. He felt so sad that he couldn’t
                surprise her.
              </p>

              <p style={pstyle}>
                It was a day before her birthday, the clock was ticking it was
                2’o clock night then he got an idea to write a note or an
                article for her… He had 22 hours left for her birthday and he
                had no experience in writing… All he wrote were the answers in
                the exams and the project documentations he prepared. He didn’t
                know anything about writing… He didn’t even read a book in his
                life. The time was running out… He was going to do something he
                never did in his entire lifetime. It was easier to jump off a
                plane for him. So, he started writing an article for her. He
                decided to write a part of story that happened between them from
                his perception. It was just two hours left for her birthday, yet
                his article was still incomplete… She texted him that she was
                hurt at that moment, it was a hard situation for him to handle
                both of situations. Somehow, he finished writing the article. It
                was yet his first time writing something.
              </p>

              <p style={pstyle}>
                Is she worth of all these??? Yes, She is!!! Cause she made him
                smile.
              </p>

              <h4 style={{ "text-align": "right" }}>- Vishal Raj</h4>
            </div>
           
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(postStyle)(WishSection)
