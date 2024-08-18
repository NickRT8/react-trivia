import { useState } from 'react'
import './App.css'
import TriviaQ from './TriviaQ.jsx'
import TriviaA from './TriviaA.jsx'

const categories = [
  "Intro", "Frequent Finalist", "Champion of Champions", "We Can't Lose", "Won & Done", "Poor Pair",
  "One & Lost", "50/50", "Frequent Failure", "Going Streaking", "No For 4", "Repeat & Three-peat",
  "Started @ the Bottom", "Lone Victory in Defeat", "Swept Both Ways", "You Again?",
  "Got Your Number", "CAN Win for Losing", "Young Buck", "Elder Statesman", "All I Do Is Win"
];

const champQuiz = [
  {title: "Click Me", category: "Intro",
   description: "Select a Category above, click the Question card, and click correct corresponding Answer card!"},
  {title: "1. Frequent Finalist", category: "Frequent Finalist",
   description: "Q1. Which franchise has the most NBA Finals appearances?"},
  {title: "2. Champion of Champions", category: "Champion of Champions",
  description: "Q2. Which franchise has the most NBA Championships?"},
  {title: "3. We Can't Lose", category: "We Can't Lose",
  description: "Q3. Which franchise has the most appearances without losing a Finals series?"},
  {title: "4. Won & Done", category: "Won & Done",
   description: "Q4. Which of these franchises is the only one to win a championship before folding?"},
  {title: "5. Poor Pair", category: "Poor Pair",
   description: "Q5. Which pair of franchises are amongst the FIVE that have never been to an NBA Finals? (The other choices contain only one franchise that qualifies for this distinction)"},
  {title: "6. One & Lost", category: "One & Lost",
   description: "Q6. Which franchise, amongst these with a single appearance, DID NOT emerge victorious from the NBA Finals?"},
  {title: "7. 50/50", category: "50/50",
   description: "Q7. Which franchise has won exactly half of their NBA Finals appearances?"},
  {title: "8. Frequent Failure", category: "Frequent Failure", 
  description: "Q8. Of these franchises with multiple appearances without winning, which appeared the most?"},
  {title: "9. Going Streaking", category: "Going Streaking",
   description: "Q9. Excluding the Boston Celtics' 10 consecutive NBA Finals appearance from 1957-1966, which franchise has the next most consecutive appearances?"},
  {title: "10. No For 4", category: "No For 4",
   description: "Q10. Which franchise has not achieved reaching 4 consecutive Finals series?"},
  {title: "11. Repeat & Three-peat", category: "Repeat & Three-peat",
   description: "Q11. Which franchise was the first to accomplish both consecutive Finals victories, as well as three in a row?"},
  {title: "12. Started @ the Bottom", category: "Started @ the Bottom",
   description: "Q12. Which franchise was the first to ever reach the Finals as a #8 (lowest eligible) seed?"},
  {title: "13. Lone Victory in Defeat", category: "Lone Victory in Defeat",
   description: "Q13. Which franchise has won the fewest games with multiple NBA Finals series appearances?"},
  {title: "14. Swept Both Ways", category: "Swept Both Ways",
   description: "Q14. Which is the only franchise to have the distinction of being on both sides of a Finals four-game sweep?"},
  {title: "15. You Again?", category: "You Again?",
   description: "Q15. Which pair of franchises faced off in four consecutive NBA Final match-ups?"},
  {title: "16. Got Your Number", category: "Got Your Number",
   description: "Q16. Which franchise has the best Finals record % against a repeat opponent of at least three total meetings?"},
  {title: "17. CAN Win for Losing", category: "CAN Win for Losing",
   description: "Q17. Which Legendary player has the distinction both of being the first Finals MVP, as well as the only MVP selected from the losing franchise?"},
  {title: "18. Young Buck", category: "Young Buck",
   description: "Q18. Which Legendary player has the distinction of being both the youngest, and the only rookie, to win the Finals MVP?"},
  {title: "19. Elder Statesman", category: "Elder Statesman",
   description: "Q19. Which Legendary player has the distinction of being the oldest to win the Finals MVP?"},
  {title: "20. All I Do Is Win", category: "All I Do Is Win",
   description: "Q20. Which Legendary player has the distinction of winning the most Finals MVPs?"}]

  const champAnswer = [
    // Question #1
    {key: "celtics1", title: "A. Boston Celtics", category: "Frequent Finalist",
      description: "Boston Celtics[23, 2nd all-time]", result: "TRY AGAIN!"},
     {key: "warriors1", title: "B. Golden State Warriors", category: "Frequent Finalist",
      description: "Golden State Warriors[12, 3rd all-time]", result: "TRY AGAIN!"},
     {key: "lakers1", title: "C. Los Angeles Lakers", category: "Frequent Finalist",
      description: "Los Angeles Lakers[32, most recently in 2020]", result: "CORRECT!"},
     {key: "sixers1", title: "D. Philadelphia 76ers", category: "Frequent Finalist",
      description: "Philadelphia 76ers[9, 4th all-time]", result: "TRY AGAIN!"},
     // Question #2
     {key: "celtics2", title: "A. Boston Celtics", category: "Champion of Champions",
      description: "Boston Celtics[18, most recently in 2024]", result: "CORRECT!"},
     {key: "bulls1", title: "B. Chicago Bulls", category: "Champion of Champions",
      description: "Chicago Bulls[6, 4th all-time]", result: "TRY AGAIN!"},
     {key: "warriors2", title: "C. Golden State Warriors", category: "Champion of Champions",
      description: "Golden State Warriors[7, 3rd all-time]", result: "TRY AGAIN!"},
     {key: "lakers2", title: "D. Los Angeles Lakers", category: "Champion of Champions",
      description: "Los Angeles Lakers[17, 2nd all-time]", result: "TRY AGAIN!"},
     // Question #3
     {key: "bulls2", title: "A. Chicago Bulls", category: "We Can't Lose",
     description: "Chicago Bulls[6: 1991/1992/1993, 1996/1997/1998]", result: "CORRECT!"},
     {key: "rockets1", title: "B. Houston Rockets", category: "We Can't Lose",
     description: "Houston Rockets[lost in 1981/1986]", result: "TRY AGAIN!"},
     {key: "bucks1", title: "C. Milwaukee Bucks", category: "We Can't Lose",
     description: "Milwaukee Bucks[lost in 1974]", result: "TRY AGAIN!"},
     {key: "spurs1", title: "D. San Antonio Spurs", category: "We Can't Lose",
     description: "San Antonio Spurs[lost in 2013]", result: "TRY AGAIN!"},
     // Question #4
     {key: "bullets1", title: "A. Baltimore Bullets", category: "Won & Done",
     description: "Baltimore Bullets[1948, d. Philadephia Warriors: 4-2]", result: "CORRECT!"},
     {key: "stags1", title: "B. Chicago Stags", category: "Won & Done",
     description: "Chicago Stags[lost in 1947]", result: "TRY AGAIN!"},
     {key: "olympians1", title: "C. Indianapolis Olympians", category: "Won & Done",
     description: "Indianapolis Olympians[never appeared in a Final]", result: "TRY AGAIN!"},
     {key: "capitals1", title: "D. Washington Capitals", category: "Won & Done",
     description: "Washington Capitals[lost in 1949]", result: "TRY AGAIN!"},
     // Question #5
     {key: "stags2", title: "A. Los Angeles Clippers/Chicago Stags", category: "Poor Pair",
     description: "Los Angeles Clippers/Chicago Stags(lost in 1947)", result: "TRY AGAIN!"},
     {key: "pacers1", title: "B. Memphis Grizzlies/Indiana Pacers", category: "Poor Pair",
     description: "Memphis Grizzlies/Indiana Pacers(lost in 2000)", result: "TRY AGAIN!"},
     {key: "capitals2", title: "C. Minnesota Timberwolves/Washington Capitals", category: "Poor Pair",
     description: "Minnesota Timberwolves/Washington Capitals(lost in 1949)", result: "TRY AGAIN!"},
     {key: "hornets1", title: "D. New Orleans Pelicans/Charlotte Hornets", category: "Poor Pair",
     description: "New Orleans Pelicans/Charlotte Hornets[From 2002-2013, The Pelicans were known as the Hornets, having relocated from Charlotte; the current Charlotte franchise started as the Bobcats in 2004, reclaiming the Hornets moniker, pre-2002 history/records in 2014]", result: "CORRECT!"},
     // Question #6
     {key: "nuggets1", title: "A. Denver Nuggets", category: "One & Lost",
     description: "Denver Nuggets[won in 2023]", result: "TRY AGAIN!"},
     {key: "pacers2", title: "B. Indiana Pacers", category: "One & Lost",
     description: "Indiana Pacers[lost in 2000]", result: "CORRECT!"},
     {key: "kings1", title: "C. Sacramento Kings", category: "One & Lost",
     description: "Sacramento Kings[won in 1951]", result: "TRY AGAIN!"},
     {key: "raptors1", title: "D. Toronto Raptors", category: "One & Lost",
     description: "Toronto Raptors[won in 2019]", result: "TRY AGAIN!"},
     // Question #7
     {key: "warriors3", title: "A. Golden State Warriors", category: "50/50",
     description: "Golden State Warriors[7W,5L]", result: "TRY AGAIN!"},
     {key: "rockets2", title: "B. Houston Rockets", category: "50/50",
     description: "Houston Rockets[lost in 1981 & 1986, won in 1994 & 1995]", result: "CORRECT!"},
     {key: "lakers3", title: "C. Los Angeles Lakers", category: "50/50",
     description: "Los Angeles Lakers[17W,15L]", result: "TRY AGAIN!"},
     {key: "bucks2", title: "D. Milwaukee Bucks", category: "50/50",
     description: "Milwaukee Bucks[2W,1L]", result: "TRY AGAIN!"},
     // Question #8
     {key: "nets1", title: "A. Brooklyn/New Jersey Nets", category: "Frequent Failure",
     description: "Brooklyn/New Jersey Nets[2]", result: "TRY AGAIN!"},
     {key: "magic1", title: "B. Orlando Magic", category: "Frequent Failure",
     description: "Orlando Magic[2]", result: "TRY AGAIN!"},
     {key: "suns1", title: "C. Phoenix Suns", category: "Frequent Failure",
     description: "Phoenix Suns[3: lost in 1976/1993/2021]", result: "CORRECT!"},
     {key: "jazz1", title: "D. New Orleans/Utah Jazz", category: "Frequent Failure",
     description: "New Orleans/Utah Jazz[2]", result: "TRY AGAIN!"},
     // Question #9
     {key: "cavaliers1", title: "A. Cleveland Cavaliers", category: "Going Streaking",
     description: "Cleveland Cavaliers[4: 2015/2016/2017/2018]", result: "TRY AGAIN!"},
     {key: "warriors4", title: "B. Golden State Warriors", category: "Going Streaking",
     description: "Golden State Warriors[5: 2015/2016/2017/2018/2019]", result: "CORRECT!"},
     {key: "lakers4", title: "C. Los Angeles Lakers", category: "Going Streaking",
     description: "Los Angeles Lakers[4: 1982/1983/1984/1985]", result: "TRY AGAIN!"},
     {key: "heat1", title: "D. Miami Heat", category: "Going Streaking",
     description: "Miami Heat[4: 2011/2012/2013/2014]", result: "TRY AGAIN!"},
     // Question #10
     {key: "bulls3", title: "A. Chicago Bulls", category: "No For 4",
     description: "Chicago Bulls[Only 3, twice: 1991/1992/1993, 1996/1997/1998]", result: "CORRECT!"},
     {key: "cavaliers2", title: "B. Cleveland Cavaliers", category: "No For 4",
     description: "Cleveland Cavaliers", result: "TRY AGAIN!"},
     {key: "lakers5", title: "C. Los Angeles Lakers", category: "No For 4",
     description: "Los Angeles Lakers", result: "TRY AGAIN!"},
     {key: "heat2", title: "D. Miami Heat", category: "No For 4",
     description: "Miami Heat", result: "TRY AGAIN!"},
     // Question #11
     {key: "celtics3", title: "A. Boston Celtics", category: "Repeat & Three-peat",
     description: "Boston Celtics", result: "TRY AGAIN!"},
     {key: "bulls4", title: "B. Chicago Bulls", category: "Repeat & Three-peat",
     description: "Chicago Bulls", result: "TRY AGAIN!"},
     {key: "warriors5", title: "C. Golden State Warriors", category: "Repeat & Three-peat",
     description: "Golden State Warriors", result: "TRY AGAIN!"},
     {key: "lakers6", title: "D. Los Angeles Lakers", category: "Repeat & Three-peat",
     description: "Los Angeles Lakers[1949/1950; 1952/1953/1954]", result: "CORRECT!"},
     // Question #12
     {key: "bulls5", title: "A. Chicago Bulls", category: "Started @ the Bottom",
     description: "Chicago Bulls", result: "TRY AGAIN!"},
     {key: "pistons1", title: "B. Fort Wayne/Detroit Pistons", category: "Started @ the Bottom",
     description: "Fort Wayne/Detroit Pistons", result: "TRY AGAIN!"},
     {key: "heat3", title: "C. Miami Heat", category: "Started @ the Bottom",
     description: "Miami Heat", result: "TRY AGAIN!"},
     {key: "knicks1", title: "D. New York Knicks", category: "Started @ the Bottom",
     description: "New York Knicks[1999 Eastern Conference Champions]", result: "CORRECT!"},
     // Question #13
     {key: "nets2", title: "A. Brooklyn/New Jersey Nets", category: "Lone Victory in Defeat",
     description: "Brooklyn/New Jersey Nets[2]", result: "TRY AGAIN!"},
     {key: "magic2", title: "B. Orlando Magic", category: "Lone Victory in Defeat",
     description: "Orlando Magic[1: lost 4-0 in 1995, lost 4-1 in 2009]", result: "CORRECT!"},
     {key: "suns2", title: "C. Phoenix Suns", category: "Lone Victory in Defeat",
     description: "Phoenix Suns[6]", result: "TRY AGAIN!"},
     {key: "jazz2", title: "D. New Orleans/Utah Jazz", category: "Lone Victory in Defeat",
     description: "New Orleans/Utah Jazz[4]", result: "TRY AGAIN!"},
     // Question #14
     {key: "cavaliers3", title: "A. Cleveland Cavaliers", category: "Swept Both Ways",
     description: "Cleveland Cavaliers[lost 4-0, 2007]", result: "TRY AGAIN!"},
     {key: "warriors6", title: "B. Golden State Warriors", category: "Swept Both Ways",
     description: "Golden State Warriors[won 4-0, 1975/2018]", result: "TRY AGAIN!"},
     {key: "lakers7", title: "C. Los Angeles Lakers", category: "Swept Both Ways",
     description: "Los Angeles Lakers[lost 4-0 in 1959/1983/1989, won 4-0 in 2002]", result: "CORRECT!"},
     {key: "spurs2", title: "D. San Antonio Spurs", category: "Swept Both Ways",
     description: "San Antonio Spurs[won 4-0, 2007]", result: "TRY AGAIN!"},
     // Question #15
     {key: "hawks1", title: "A. Boston Celtics & St. Louis(Atlanta) Hawks", category: "You Again?",
     description: "Boston Celtics & St. Louis(Atlanta) Hawks[4x in 5 years: 1957/1958/1960/1961]", result: "TRY AGAIN!"},
     {key: "lakers8", title: "B. Boston Celtics & Los Angeles Lakers", category: "You Again?",
     description: "Boston Celtics & Los Angeles Lakers[4x in 5 years: 1965/1966/1968/1969]", result: "TRY AGAIN!"},
     {key: "cavaliers4", title: "C. Golden State Warriors & Cleveland Cavaliers", category: "You Again?",
     description: "Golden State Warriors & Cleveland Cavaliers[2015/2016/2017/2018]", result: "CORRECT!"},
     {key: "knicks2", title: "D. Los Angeles Lakers & New York Knicks", category: "You Again?",
     description: "Los Angeles Lakers & New York Knicks[3x in 4 years: 1970/1972/1973]", result: "TRY AGAIN!"},
     // Question #16
     {key: "lakers9", title: "A. Boston Celtics over Los Angeles Lakers", category: "Got Your Number",
     description: "Boston Celtics over Los Angeles Lakers[9-3 (75%)]", result: "TRY AGAIN!"},
     {key: "sixers2", title: "B. Los Angeles Lakers over Philadelphia 76ers", category: "Got Your Number",
     description: "Los Angeles Lakers over Philadelphia 76ers[5-1 (83.33%), Lakers won in 1950/1954/1980/1982/2001 & 76ers won in 1983][In fewer than three meetings: Boston Celtics have taken both matchups against Houston Rockets(1981/1986), while Chicago Bulls won both against Utah Jazz (1997/1998)]", result: "CORRECT!"},
     {key: "hawks2", title: "C. Boston Celtics over St. Louis(Atlanta) Hawks", category: "Got Your Number",
     description: "Boston Celtics over St. Louis(Atlanta) Hawks[3-1 (75%)]", result: "TRY AGAIN!"},
     {key: "cavaliers5", title: "D. Golden State Warriors over Cleveland Cavaliers", category: "Got Your Number",
     description: "Golden State Warriors over Cleveland Cavaliers[3-1 (75%)]", result: "TRY AGAIN!"},
     // Question #17
     {key: "alcindor1", title: "A. Lew Alcindor(aka Kareem Abdul-Jabbar)", category: "CAN Win for Losing",
     description: "Lew Alcindor(aka Kareem Abdul-Jabbar)[1971 Bucks, defeated Baltimore Bullets 4-0]", result: "TRY AGAIN!"},
     {key: "chamberlain1", title: "B. Wilt Chamberlain", category: "CAN Win for Losing",
     description: "Wilt Chamberlain[1972 Lakers, defeated New York Knicks 4-1]", result: "TRY AGAIN!"},
     {key: "reed1", title: "C. Willis Reed", category: "CAN Win for Losing",
     description: "Willis Reed[1970 Knicks, defeated Los Angeles Lakers 4-3]", result: "TRY AGAIN!"},
     {key: "west1", title: "D. Jerry West", category: "CAN Win for Losing",
     description: "Jerry West[1969 Lakers, lost 4-3 to Boston Celtics]", result: "CORRECT!"},
     // Question #18
     {key: "bryant1", title: "A. Kobe Bryant", category: "Young Buck",
     description: "Kobe Bryant", result: "TRY AGAIN!"},
     {key: "james1", title: "B. Lebron James", category: "Young Buck",
     description: "Lebron James", result: "TRY AGAIN!"},
     {key: "johnson1", title: "C. Earvin 'Magic' Johnson", category: "Young Buck",
     description: "Earvin 'Magic' Johnson[1980, Age: 20yrs, 276 days]", result: "CORRECT!"},
     {key: "jordan1", title: "D. Michael Jordan", category: "Young Buck",
     description: "Michael Jordan", result: "TRY AGAIN!"},
     // Question #19
     {key: "abduljabbar1", title: "A. Kareem Abdul-Jabbar(aka Lew Alcindor)", category: "Elder Statesman",
     description: "Kareem Abdul-Jabbar(aka Lew Alcindor)[1985, Age: 38yrs, 54 days]", result: "CORRECT!"},
     {key: "duncan1", title: "B. Tim Duncan", category: "Elder Statesman",
     description: "Tim Duncan", result: "TRY AGAIN!"},
     {key: "james2", title: "C. Lebron James", category: "Elder Statesman",
     description: "Lebron James", result: "TRY AGAIN!"},
     {key: "oneal1", title: "D. Shaquille O'Neal", category: "Elder Statesman",
     description: "Shaquille O'Neal", result: "TRY AGAIN!"},
     // Question #20
     {key: "james3", title: "A. Lebron James", category: "All I Do Is Win",
     description: "Lebron James", result: "TRY AGAIN!"},
     {key: "johnson2", title: "B. Earvin 'Magic' Johnson", category: "All I Do Is Win",
     description: "Earvin 'Magic' Johnson", result: "TRY AGAIN!"},
     {key: "jordan2", title: "C. Michael Jordan", category: "All I Do Is Win",
     description: "Michael Jordan[6]", result: "CORRECT!"},
     {key: "oneal2", title: "D. Shaquille O'Neal", category: "All I Do Is Win",
     description: "Shaquille O'Neal", result: "TRY AGAIN!"}
  ]

function App() {
  const [filteredQuiz, setFilteredQuiz] = useState(champQuiz.filter(card => card.category === "Intro"))
  const [filteredAnswer, setFilteredAnswer] = useState(champAnswer.filter(card => card.category === "Intro"))

  const handleClick = (category) => {
    const newQs = champQuiz.filter(card => card.category === category)
    setFilteredQuiz(newQs)
    const newAs = champAnswer.filter(card => card.category === category)
    setFilteredAnswer(newAs)
  }

  return (
    <>
      <div className='main-nav'>
        <h1>NBA Championship History Trivia (1946-47 through 2023-24)</h1>
        <p>How much do you know about the Championship franchises and Finals MVPs throughout NBA History?</p>        
        <div className="category-nav">
          {categories.map((category) => {
            return(
              <button 
                key={category}
                onClick={
                  () => {handleClick(category)}
                }
                className="category-button"
              >{category}</button>
              )}
            )
          }
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br>
      <div className='content'>
        <div className='cards-container'>
          {filteredQuiz.map((card) => {
            return (
            <TriviaQ key={card.title} title={card.title} description={card.description}/>
            )})}
          
                              
        </div>
        <div className='cards-container'>
          {filteredAnswer.map((card) => {
            return (
              <>
                <TriviaA key={card.key} title={card.title} description={card.description} result={card.result}/>
              </>
            )})}
          
                              
        </div>
      </div>
    </>
  )
}

export default App
