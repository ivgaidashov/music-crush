import React from 'react'
import Slider from '../../components/slider/Slider'
import CardSlider from '../../components/slider/CardSlider'
import {setStoreItems} from '../../store/action-creators/index'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useSelector } from 'react-redux'
import { State } from '../../store/reducers'
import './home.scss'

const Home = () => {
  const dummydata = [
    {id: 1,title: 'Renaissance', artist: 'Beyoncé', genre:'Pop', new: false, price: 600, discount: 500, img: ['img/albums/pop_renaissance.jpg', 'img/albums/pop_renaissance_vinyl.jpg'], color: '#000000', formats: ['CD', 'Vinyl'],	label: 'Columbia', metacritic: 91, tracklist: ["I'm That Girl", "Cozy", "Alien Superstar", "Cuff It", "Energy", "Break My Soul", "Church Girl", "Plastic Off the Sofa", 	"Virgo's Groove", "Move", "Heated", "Thique", 'All Up in Your Mind', 'America Has a Problem','Pure/Honey','Summer Renaissance']},
    {id: 2,title: 'Rush!', artist: 'Måneskin', genre:'Rock',new: false, price: 550, discount: 400, img: ['img/albums/rock_rush.jpg', 'img/albums/rock_rush_cassette.jpg'], color: '#74A2BC', formats: ['CD', 'Cassette'],label: 'Epic', metacritic: 65, tracklist: ["Own My Mind", "Gossip", "Timezone", "Bla Bla Bla", "Baby Said", "Gasoline", "Feel", 	"Don't Wanna Sleep", "Kool Kids", "If Not for You", "Read Your Diary", "Mark Chapman", "La fine", "Il dono della vita", "Mammamia", "Supermodel", "The Loneliest"]},
    {id: 3,title: 'Midnights', artist: 'Taylor Swift', genre:'Pop',new: false, price: 600, discount: 500, img: ['img/albums/pop_midnights.jpg', 'img/albums/pop_midnights_vinyl.jpg', 'img/albums/pop_midnights_cassette.jpg'], color: '#C1886C', formats: ['CD', 'Vinyl', 'Cassette'],	label: 'Republic', metacritic: 85, tracklist: ["Lavender Haze", "Maroon", "Anti-Hero", "Snow on the Beach", "You're on Your Own, Kid", "Midnight Rain", "Question...?", 	"Vigilante Shit", "Bejeweled", "Labyrinth", "Karma", "Sweet Nothing", "Mastermind"]},
    {id: 4,title: 'Gloria', artist: 'Sam Smith', genre:'Pop',new: false, price: 500, discount: 450, img: ['img/albums/pop_gloria.jpg', 'img/albums/pop_gloria_cassette.jpg'], color: '#524E3D', formats: ['CD', 'Cassette'],	label: 'Capitol', metacritic: 68, tracklist: [ "Love Me More",  "No God",  "Hurting Interlude", "Lose You", 'Perfect', 'Unholy', "How to Cry", "Six Shots", 'Gimme', "Dorothy's Interlude", 	"I'm Not Here to Make Friends", "Gloria", 	"Who We Love"]},
    {id: 5,title: 'Planet Her', artist: 'Doja Cat', genre:'Rap',new: false, price: 500, discount: 450, img: ['img/albums/pop_planet.jpg', 'img/albums/pop_planet_vinyl.jpg'], color: '#333B6E', formats: ['CD', 'Vinyl'],label: 'Kemosabe', metacritic: 76, tracklist: ["Woman", "Naked", "Payday", "Get Into It (Yuh)", "Need to Know", "I Don't Do Drugs" , "Love to Dream", 	"You Right", "Been Like This", "Options", 	"Ain't Shit", "Imagine", "Alone", 	"Kiss Me More"]},
    {id: 6,title: 'Ben', artist: 'Macklemore', genre:'Rap',new: false, price: 550, discount: 400, img: ['img/albums/rap_Ben.jpg', 'img/albums/rap_ben_vinyl.jpg'], color: '#93BDCD', formats: ['CD', 'Vinyl'], 	label: 'Bendo', metacritic: 71, tracklist: ["Chant", "No Bad Days", "1984", "Maniac", "Day You Die", "Heroes", "Grime", 	"I Need", "Lost / Sun Comes Up", "Faithful", "Tears", "Sorry", "God's Will",'I Know','Tail Lights']},
    {id: 7,title: 'Gag Order', artist: 'Kesha', genre:'Pop',new: true, price: 700, discount: null, img: ['img/albums/pop_gagorder.jpg'], color: '#000000', formats: ['CD'],	label: 'Kemosabe', metacritic: 75, tracklist: ["Something to Believe In", "Eat the Acid", "Living in My Head", "Fine Line","Only Love Can Save Us Now", "All I Need Is You"	
    , "The Drama", 	"Ram Dass Interlude"	, "Too Far Gone", "Peace & Quiet", "Only Love Reprise", "Hate Me Harder","Happy"]
    },
    {id: 8,title: 'Jackman.', artist: 'Jack Harlow', genre:'Rap',new: true, price: 650, discount: null, img: ['img/albums/rap_jackman.jpg', 'img/albums/rap_jackman_vinyl.jpg'], color: '#74A2BC', formats: ['CD', 'Vinyl'],label: 'Atlantic', metacritic: 60, tracklist: ["Common Ground", "They Don't Love It", "Ambitious", 	"Is That Ight?", "Gang Gang Gang", "Denver", "No Enhancers", 	"It Can't Be", "Blame on Me", "Questions"]},
    
    {id: 9,title: "Blue Banisters", artist: 'Lana Del Rey', genre:'Pop',new: false, price: 620, discount: null, img: ['img/albums/pop_blue_banisters.jpg', 'img/albums/pop_blue_banisters_cassette.jpg'], color: '#C1886C', formats: ['CD', 'Cassette'],
  	label: 'Interscope', metacritic: 80, tracklist: ["Text Book", 	"Blue Banisters", "Arcadia", "Interlude – The Trio", "Black Bathing Suit", "If You Lie Down With Me", "Beautiful", 	"Violets for Roses", "Dealer", "Thunder", "Wildflower Wildfire", "Nectar of the Gods", 'Living Legend', 'Cherry Blossom','Sweet Carolina']},
    
    {id: 10,title: 'Desire, I Want to Turn Into', artist: 'Caroline Polachek', label:'Sony Music', metacritic: 94, genre:'Pop',new: true, price: 670, discount: 500, img: ['img/albums/pop_desire.jpg','img/albums/pop_desire_vinyl.jpg'], color: '#524E3D', formats: ['CD', 'Vinyl'],
    tracklist: ["Welcome to My Island","Pretty in Possible","Bunny Is a Rider","Sunset"	,
    "Crude Drawing of an Angel"	,"I Believe"	,    "Fly to You","Blood and Butter", "Hopedrunk Everasking", "Butterfly Net", "Smoke", "Billions"]},
    {id: 11, title: 'Chromatica', artist: 'Lady Gaga', genre:'Pop',new: false, price: 700, discount: null, img: ['img/albums/pop_chromatica.png', 'img/albums/pop_chromatica_cassette.png', 'img/albums/pop_chromatica_vinyl.jpg', ], color: '#C50035', formats: ['CD', 'Cassette', 'Vinyl'],
    label: 'Interscope', tracklist: ["Chromatica I", 	"Alice", "Stupid Love", 	"Rain on Me", "Free Woman", "Fun Tonight", "Chromatica II", 	"911", "Plastic Doll", 	"Sour Candy", 	"Enigma", "Replay", "Chromatica III"	, "Sine from Above", "1000 Doves","Babylon"], metacritic: 79},
    {id: 12, title: 'Crash ', artist: 'Charli XCX', genre:'Pop', new: true, price: 500, discount: 350, img: ['img/albums/pop_crash.jpg', 'img/albums/pop_crash_cassette.jpg' ], color: '#C50035', formats: ['CD', 'Cassette'],
    label: 'Atlantic', tracklist: ["Crash", 	"New Shapes", 	"Good Ones", 	"Constant Repeat", "Beg for You", 	"Move Me", "Baby", 	"Lightning", "Every Rule", 	"Yuck", 	"Used to Know Me" ,"Twice"], metacritic: 79},
    {id: 13, title: 'Endless Summer Vacation', artist: 'Miley Cyrus', genre:'Pop', new: true, price: 570, discount: null, img: ['img/albums/pop_endless_summer_vacation.jpg', 'img/albums/pop_endless_summer_vacation_vinyl.jpg' ], color: '#C50035', formats: ['CD', 'Vinyl'],
    label: 'Columbia', tracklist: ["Flowers", "Jaded", "Rose Colored Lenses", "Thousand Miles", "You", "Handstand", "River", 	"Violet Chemistry", "Muddy Feet", "Wildcard", "Island", "Wonder Woman"], metacritic: 79},
    {id: 14, title: 'Special', artist: 'Lizzo', genre:'Pop', new: false, price: 550, discount: 350, img: ['img/albums/pop_special.jpg', 'img/albums/pop_special_cassette.jpg', 'img/albums/pop_special_vinyl.jpg' ], color: '#C50035', formats: ['CD','Vinyl', 'Cassette'],
    label: 'Atlantic', tracklist: ["The Sign", "About Damn Time", "Grrrls", "2 Be Loved (Am I Ready)", "I Love You Bitch", "Special", "Break Up Twice", 	"Everybody's Gay", "Naked", "Birthday Girl", "If You Love Me", "Coldplay"], metacritic:78 },
    {id: 15, title: "Anyways, Life's Great", artist: 'GloRilla', genre:'Rap', new: true, price: 500, discount: null, img: ['img/albums/rap_glorilla.jpg' ], color: '#C50035', formats: ['CD'],
    label: 'Interscope', tracklist: ["No More Love", "Phatnall", "Tomorrow 2", "Unh Unh", "Blessed", "Get that Money", "Nut Quick","F.N.F. (Let's Go)", "Out Loud Thinking"], metacritic: 0},
    {id: 16, title: 'Her Loss', artist: 'Drake and 21 Savage', genre:'Rap', new: false, price: 600, discount: 250, img: ['img/albums/rap_herloss.jpg', 'img/albums/rap_herloss_vinyl.jpg' ], color: '#C50035', formats: ['CD', 'Vinyl'],
    label: 'Republic', tracklist: ["Rich Flex", "Major Distribution", "On BS", "BackOutsideBoyz", "Privileged Rappers", "Spin Bout U", "Hours in Silence", 	"Treacherous Twins", "Circo Loco", "Pussy & Millions", "Broke Boys", "Middle of the Ocean", "Jumbotron Shit Poppin","More M's","3AM on Glenwood","I Guess It's Fuck Me"], metacritic: 62},
{id: 17, title: 'Like..?', artist: 'Ice Spice', genre:'Rap', new: true, price: 510, discount: 420, img: ['img/albums/rap_like.jpg' ], color: '#C50035', formats: ['CD'],
label: 'Capitol', tracklist: ["In Ha Mood", "Princess Diana", "Gangsta Boo", "Actin a Smoochie", "Bikini Bottom", "Munch (Feelin' U)"], metacritic: 69},
{id: 18, title: 'Traumazine', artist: 'Megan Thee Stallion', genre: 'Rap', new: false, price: 590, discount: null, img: ['img/albums/rap_traumazine.jpg', 'img/albums/rap_traumazine_cassette.jpg' ], color: '#C50035', formats: ['CD', 'Cassette'],
    label: '1501 Certified', tracklist: ["NDA", "Ungrateful", "Not Nice", "Budget", "Her", "Gift & a Curse", "Ms. Nasty", 	"Who Me", "Red Wine", "Scary", "Anxiety", "Flip Flop", "Consistency", "Star", "Pressurelicious", "Plan B", "Southside Royalty Freestyle", "Sweetest Pie"], metacritic: 80},
    {id: 19, title: "Let's Start Here", artist: 'Lil Yachty', genre:'Rap', new: false, price: 520, discount: 350, img: ['img/albums/raplets-start-here.jpg', 'img/albums/raplets-start-here_vinyl.jpg' ], color: '#C50035', formats: ['CD', 'Vinyl'],
    label: 'Motown', tracklist: ["The Black Seminole", "The Ride", "Running Out of Time", "Pretty", "Failure", "The Zone", "We Saw the Sun!", 	"Drive Me Crazy!", "I've Officially Lost Vision!!!!", "Say Something", "Paint the Sky", "Should I B?", "The Alchemist", "Reach the Sunshine"], metacritic: 73},
    {id: 20, title: 'With Love From', artist: 'Aly & AJ', genre:'Rock', new: true, price: 420, discount: 370, img: ['img/albums/rock_aly.jpg', 'img/albums/rock_aly_cassette.jpg' ], color: '#C50035', formats: ['CD', 'Cassette'],
    label: 'Aly & AJ Music', tracklist: ["Open to Something and that Something Is You", "With Love From", "After Hours", "Blue Dress", "Love You This Way", "Way of Nature Way of Grace", "Tear the Night Up", 	"Sunchoke", "Talking in My Sleep", "Baby Lay Your Head Down", "6 Month of Staring Into the Sun"], metacritic: 74},
    {id: 21, title: 'Lately I Feel Everything', artist: 'Willow', genre:'Rock', new: false, price: 620, discount: 600, img: ['img/albums/rock_latelyifelleverything.jpg' ], color: '#C50035', formats: ['CD'],
    label: 'Roc Nation', tracklist: ["Transparent Soul", "F**k You", "Gaslight", "Don't SAVE ME", "Naïve", "Lipstick", "Come Home", 	"4ever", "Xtra", "Grow", "Breakout"], metacritic: 79},
    {id: 22, title: 'Mainstream Sellout', artist: 'Machine Gun Kelly', genre:'Rock', new: false, price: 550, discount: null, img: ['img/albums/rock_mainstream.jpg', 'img/albums/rock_mainstream_vinyl.jpg' ], color: '#C478BC', formats: ['CD', 'Vinyl'],
    label: 'Interscope', tracklist: ["Born with Horns", "God Save Me", "Maybe", "Drug Dealer", "Wall of Fame", "Mainstream Sellout", "Make Up Sex", 	"Emo Girl", "5150", "Papercuts", "WW4", "Ay!", "Fake Love Don't Last", "Die in California", "Sid & Nancy", "Twin Flame"], metacritic: 55},
    {id: 23, title: 'Songs of Surrender', artist: 'U2', genre:'Rock', new: false, price: 710, discount: 610, img: ['img/albums/rock_u2.jpg', 'img/albums/rock_u2_vinyl.jpg' ], color: '#C50035', formats: ['CD', 'Vinyl'],
    label: 'Interscope', tracklist: ["One", "Where the Streets Have No Name", "Stories for Boys", "Walk On (Ukraine)", "Pride (In the Name of Love)", "City of Blinding Lights", "Ordinary Love", 	"Invisible", "Vertigo", "I Still Haven't Found What I'm Looking For", "The Fly", "If God Will Send His Angels", "Stay (Faraway, So Close!)", "Sunday Bloody Sunday", "I Will Follow", "40"], metacritic: 66},
    {id: 24, title: 'Invasion of Privacy', artist: 'Cardi B', genre:'Rap', new: false, price: 710, discount: 650, img: ['img/albums/rap_invasion.jpg', 'img/albums/rap_invasion_of_privacy_vinyl.jpg' ], color: '#193D53', formats: ['CD', 'Vinyl'],
    label: 'Atlantic', tracklist: ["Get Up 10", "Drip", "Bickenhead", "Bodak Yellow", "Be Careful", "Best Life", "I Like It", "Ring", "Money Bag", "Bartier Cardi", "She Bad", "Thru Your Phone", "I Do"], metacritic: 84},
  ]

const dispatch = useDispatch();

const setNewItems = bindActionCreators(setStoreItems, dispatch)
setNewItems(dummydata)
const state = useSelector((state: State) => state.items)

const hotDeals = state.filter((album) => album.discount)
const newAlbums =state.filter((album) => album.new)

  return (
    <main className='home-main'>
      <Slider/>
      <CardSlider cardprop={hotDeals} header='Hot Deals'/>
      <CardSlider cardprop={newAlbums} header='New Items'/>

    </main>
  )
}

export default Home