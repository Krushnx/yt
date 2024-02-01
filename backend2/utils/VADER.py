import nltk
## If you have done this once, you can skip the next command
nltk.download('vader_lexicon', quiet=False)
from nltk.sentiment.vader import SentimentIntensityAnalyzer

vader_model = SentimentIntensityAnalyzer()

sentences =  [
    "😊❤💪",
    "Long way to 6m+ subscribers, congratulations man!",
    "After 6 million post !!😂🎉",
    "Song name pleasee",
    "👍👍👍",
    "Strength grows in the moment when you think you can’t go on… but you keep going anyway.",
    "get this man to 5 mil",
    "When you first start YouTube, did you ever think you will reach 4 million subscribers????",
    "What a transformation ✨😘",
    "Amazing",
    "Nice 🔥",
    "💪",
    "so how is it possible your body never changed lol u looked your best here 6 years ago",
    "Парень ты крут!)",
    "Humble beginnings.\nI signed up to your program mainly because of how humble you come across.\nAll the best to you.",
    "You don’t need a super serum to have a great body.",
    "Train neck trust me",
    "3:35 Couple goals, really ! I love the way you are both smiling from ear to ear, (I see your big smile in the mirror Jérémy haha) you are so cute, so much love <3",
    "Where it all started 🙌🏻🙌🏻",
    "Those \"beginner\" pictures are far far away for me. But still nice to look at.",
    "👌🏽🤤",
    "3:32 🔥",
    "Legend.",
    "A legend was born",
    "3:35 cringe",
    "He really likes to wear tank tops",
    "2:45 , 3:14 , 3:32 at least he has some motivation :(",
    "Lot a respect bro✊✊",
    "Dang it I'm 3 years late finding this channel, but who cares I subbed rn and I'll try to learn as much as I can please keep this channel up and running! Thanks.",
    "Could you give out recent tips for thin guys in a video? Research based please...",
    "Thanks man, I'm going to watch all of your videos from beginning to end and build my own fitness plan 💪 🙌 👌",
    "Song name?",
    "I am following in ur footsteps. I am an ectomorph who's is at 5'8 and wroth 122 pounds. I recently began weight training at late 17. I have been watching ur videos, thanks for the cool tips",
    "Jeremy your awesome i own my own gym and loving brushing up on your content thank you and keep being awesome. Lewis  in England",
    "Really motivating, thank you",
    "salute to you brother!!! i'm a subscriber of you from the Philippines. more gains to come!!!",
    "inspiring",
    "Was referred to one of your videos and was so impressed I watched all of them taking notes down to this first one. You've created such an amazing channel and I've saved so much time in mistakes. Just want to say thank you.",
    "2:48 you made it !~ bro",
    "I was always the skinny kid headass",
    "He's 5ft 10\" so still doesn't work great haha",
    "At 5’9” 120 lbs I was worse than u at 5’9” 114 lbs",
    "I'm skinny too.. What kind of food do we have to eat and not, to have a great muscle?",
    "you don't have m of muscule",
    "he have uneven pecs",
    "wow great job bro. very inspiring. subbed. thanks for the tips! I'm gonna try this.",
    "I am mesomorph and jion gym since 16months ..\nPlzz give some special tips and coirect direction of game",
    "Bro I'm way more Skinny.....",
    "\"genetics are important\"",
    "I wish I was an ectomorph",
    "repent and follow Jesus Christ, the Lord should be your passion not your body, don't die in your sins and burn in hell fire youngster.",
    "Dude you look like Gleyber Torres in that Bombers cap. Compliment.",
    "Motivational....",
    "The fucking music LMAO",
    "Good job buddy! subscribed",
    "Well done Jeremy. Good luck with everything.",
    "Ok that's my new inspiration 3:32 I wanna be able to that one day! So hot and romantic :D",
    "Please post a video for beginners how should they start nutrition and training to increase weight gaining muscle mass keeping fat at required levels. Thank you",
    "You're an inspiration. I'm struggling with being skinny fat, been working out for 2 years and still, though I have grown in strength, my build still isnt wholesome. I attribute this to not eating enough but at the same time, I have a body fat % of 21. So I'm kinda stuck in a dilemma.",
    "You are great, this is the last video, I watched all your videos 👍",
    "I would be happy with your 17 yr old results",
    "Men you are my best inspiration your videos make my days and you motivate me more and more to do better everyday keep it up men!",
    "Hello Jeremy, can you make a video about diet and workout for hardgainers/ectomorphs?",
    "Hello. Very good transformation! I'm football(soccer)  player and I want to become more stronger and more faster. I want to go gym but I dont know how footballers must train in gym . Can you make a video about it,pleease??!",
    "Hey +Jeremy Ethier, love your videos, could you do a beginner muscle building and diet program for skinny folks? Would love to know what you did and ate that brought you from being skinny to today's physique. Appreciate it!",
    "What song this please :D?",
    "Hi, Love your videos bro! Great content and really useful. I was also really skinny and have problem to gain weights in general. Recently my weights has stagnated from over a month and just can not go up. I would be really appreciate to hear from you about how you eat to gain weights/muscles!",
    "did you get a gf after youre body transformation or before",
    "Respect ! :))",
    "Cool video especially since I was the same size as you in high school...Iv been working out on and off for the past 10 years...Just recently this past year started back up and actually learning new information about the actual science behind bodybuilding...Your videos have been a great help...Thank You...",
    "I'm an ectomorph too and have been at most 125 lbs in my life, and I just turned 35 (FML). I found Connor Grooms' book \"Eating for Mass\" and am gonna try his program. I've come to despise how I look and I'd love to gain some weight before my buddy's wedding in May. But man I'm really anxious about doing it, I'm worried I won't be able to eat enough. I'm just frequently not hungry and stuffing myself is gonna be harder than quitting drinking and quitting smoking, both of which I've done. Ugh, f'ing ectomorphs.",
    "Is working out 6 days/week, 1 hour/day is good or 4 days/week 1.5 hour better? I don't have more time to spend.",
    "2 years!?! 😭😭😭 I been hitting the gym for about 5 years and I see no difference in my body 😠😠",
    "Graduate bone democracy metaphor broad ridiculous growth PC sound that proposed apparent",
    "What is this remix?! Love it!",
    "i m an ectomorph and i m confused about gym or only bodyweight...can i gain size through only bodyweight exercises? if yes pls suggest some exercises......i really find it hard to go to the gym bcs of my schedule..thanks love ur videos keep doing the great work.....regards from india",
    "How many days a week in how long in how many sets each workout?",
    "I would like to see a shoulder workout pls. Thx",
    "Hey I'm loving all of your content. But I'm having trouble to make a strict diet and workout plan that I could stick to to get results. Could you make a video on a weekly diet and workout plan? Plz. I'm currently  5, 10', weight 150 and I'm 16 years old. I'm having trouble losing belly fat so that my and start showing. I would greatly appreciate you if you could help me!!",
    "Inspiring man, thank you!",
    "Jeremy please tell us what supplements you were taking or make a video on how to transform like you did !",
    "Can you please give me any advice on what to focus on when starting. I have already gone to the gym for about a month, but then stopped going because i was do3img stronglifts 5 x 5 and i kind of hurt my back doing the last rep on a squat. It felt like when you get poured could water on you . And it get hard to breath a little, on one side of my back. And im 16 and about 125. Then i've been tryimg to do calisthemics, but i feel the progress is slowed and i dont have the right equipment. So i decided to just go back to the gym.",
    "Proud of you cousin!!! Izzy & Dar",
    "great song, cute couple exercises",
    "Great videos! I subscribed. Can you post a video of what you personally eat every day?",
    "I'm 27 skinny will this work for me? 😂😂",
    "Now make a video how to get a   gym girlfriend",
    "great transformation bro I just subscribed looking forward to some awesome stuff 🤘",
    "I'm 18, 5'11, and around 120 lbs too. I really need to transform like you.",
    "nice !",
    "I am currently 6 feet exactly and weigh 125 pounds. I am extremely skinny, but am only im high school. No matter how much i eat or lift, i can't increase my weight by more than 4 pounds, which I lose in like 2 days if i dont force feed myself. How can I get to my desired weight of 145 pounds because i am starting to feel really self conscious of my weight as kids at school make fun of my body calling me noodle man and twig. Please help",
    "keeping it natural ova hea! (Hodgetwins voice)",
    "Looking awesome!",
    "good job",
    "Song?",
    "Awesome video bro, checkout my transformation on my channel !",
    "loooooooool",
    "lmao so many things wrong with this video."
]

pos = []
neg = []
neu = []

for sent in sentences:
    scores = vader_model.polarity_scores(sent)
    print()
    print('INPUT SENTENCE:', sent)
    print('VADER OUTPUT:', scores)
    
    # Excluding 'compound' score
    scores.pop('compound')
    
    # Finding the maximum score among pos, neg, and neu
    max_score = max(scores, key=scores.get)
    
    # Assigning the sentence to the corresponding array
    if max_score == 'pos':
        pos.append(sent)
    elif max_score == 'neg':
        neg.append(sent)
    elif max_score == 'neu':
        neu.append(sent)

# print("\nPositive Sentences:", pos)
# print("\nNegative Sentences:", neg)
# print("\nNeutral Sentences:", neu)

print("\nPositive Sentences:", len(pos))
print("\nNegative Sentences:", len(neg))
print("\nNeutral Sentences:", len(neu))
