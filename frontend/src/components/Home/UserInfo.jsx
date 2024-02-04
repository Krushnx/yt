import React from 'react';
import './user.css'
import KeyVal from '../Genral/KeyVal';
import VidePreview from '../Genral/VidPreview';
import FullStats from '../Genral/FullStats';
import BarPlot from './BarPlot';
import Piechart from './PieChart';
import up from './Img/up.png'
import down from './Img/down.png'
import like from './Img/like.png'
import dislike from './Img/dislike.png'



function UserInfo(props) {

    // const data = props.data;
    const data = {
        "channel_info": {
            "channel_description": "Hi there! Thanks for checking out my channel. Me in 3 words: Economist turned data nerd. I'm a Data science consultant by profession in the past 5 years, based in the Netherlands. My background is in Economics and Computer Science. I love learning and explaining stuff about data science. If that sounds interesting, consider subscribing! :)\n\nDisclaimers: \nAll opinions are of my own and not of my employers.\n",
            "channel_name": "Thu Vu data analytics",
            "profile_photo_url": "https://yt3.ggpht.com/s3HLl-uzqEaqww2tkWKgjLFfgoe2NUsu4tRLm7g5TOScMK3aqOl1wGhar3yZRa1VH4BK3rzHyg=s800-c-k-c0x00ffffff-no-rj",
            "subscribers": "195000",
            "total_videos": "80", 
            "total_views" : "2987000"
        },
        "channel_videos": [
            {
                "thumbnail": "https://i.ytimg.com/vi/JTHyfv_GUCw/hqdefault.jpg",
                "title": "Should You Still Learn Data Analytics? (in 2024)",
                "upload_date": "2023-12-30T00:55:25Z",
                "views": "84378"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/TR7AGmey1C8/hqdefault.jpg",
                "title": "How I&#39;d Learn AI (If I Had to Start Over)",
                "upload_date": "2023-11-29T09:41:39Z",
                "views": "326110"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/HKYULsQr_U0/hqdefault.jpg",
                "title": "Should You Still Learn to Code in 2024? #coding #datascience  #ai",
                "upload_date": "2023-11-12T17:06:48Z",
                "views": "8579"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/fhFz0JfGvfc/hqdefault.jpg",
                "title": "I Created a Custom GPT for Data Science Nerds 👩🏻\u200d💻",
                "upload_date": "2023-11-11T16:03:56Z",
                "views": "81518"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/lp6SfYCRGLM/hqdefault.jpg",
                "title": "🤯 AI Is Taking Over Data Jobs: Here&#39;s What To Do About It",
                "upload_date": "2023-10-16T22:03:49Z",
                "views": "7629"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/uGynMyXCcg8/hqdefault.jpg",
                "title": "📚 BEST AI Books to Read in 2023",
                "upload_date": "2023-10-09T22:02:40Z",
                "views": "13616"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/EzVIkHQWnhc/hqdefault.jpg",
                "title": "Doing Data Analysis on Sensitive Data (ft. Oblivious)",
                "upload_date": "2023-08-22T00:29:27Z",
                "views": "5906"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/8sLq4P-QDL0/hqdefault.jpg",
                "title": "I Tried ChatGPT Code Interpreter for Data Tasks - it&#39;s a game changer!",
                "upload_date": "2023-07-15T19:02:17Z",
                "views": "39962"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/3736Pd_hwFQ/hqdefault.jpg",
                "title": "Become a PRO with These 40 Data science Productivity Tips",
                "upload_date": "2023-07-08T09:45:30Z",
                "views": "15136"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/PvnSSrnjLX8/hqdefault.jpg",
                "title": "Self-taught vs. Guided Program: CareerFoundry&#39;s Data Analytics Program Review",
                "upload_date": "2023-06-16T22:57:31Z",
                "views": "8425"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/S5U76LPu_bQ/hqdefault.jpg",
                "title": "Is a Computer Science Degree WORTHLESS 🤯? (in the age of AI)",
                "upload_date": "2023-06-08T16:10:11Z",
                "views": "23217"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/l2YU8QuXiTM/hqdefault.jpg",
                "title": "ChatGPT + Jupyter Notebook = Mindblowing! 🤩",
                "upload_date": "2023-05-28T14:33:38Z",
                "views": "25853"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/dYQfgcd0XD4/hqdefault.jpg",
                "title": "Love ❤️ JupyterCon Paris 2023",
                "upload_date": "2023-05-22T12:47:19Z",
                "views": "6148"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/0JDsvZHooNU/hqdefault.jpg",
                "title": "AI replacing jobs, mistakes, relationships (and other things): 140K subs Q&amp;A",
                "upload_date": "2023-05-15T23:01:44Z",
                "views": "5953"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/kHdAb8yBBDI/hqdefault.jpg",
                "title": "Will ChatGPT Code Interpreter Replace Data Analysts?",
                "upload_date": "2023-05-12T08:21:50Z",
                "views": "62850"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/tSiS15ubQFQ/hqdefault.jpg",
                "title": "How to Deploy Machine Learning Models (ft. Runway)",
                "upload_date": "2023-05-10T08:30:33Z",
                "views": "75699"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/c3Uvz75kVd4/hqdefault.jpg",
                "title": "Will AI be THE END of us?",
                "upload_date": "2023-04-21T15:03:11Z",
                "views": "7349"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/aYorBPF05Rw/hqdefault.jpg",
                "title": "How I&#39;d Learn to Become a Data Analyst",
                "upload_date": "2023-04-09T10:45:00Z",
                "views": "334740"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/N1UMycRJbAw/hqdefault.jpg",
                "title": "Roadmap for Transitioning to Data Analytics in 2023",
                "upload_date": "2023-03-31T21:49:39Z",
                "views": "439075"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/7yGolPv8AOs/hqdefault.jpg",
                "title": "If Learning Data Science Is Like Rock Climbing",
                "upload_date": "2023-03-19T23:24:45Z",
                "views": "20968"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/EE1Y2enHrcU/hqdefault.jpg",
                "title": "Building a Chatbot with ChatGPT API and Reddit Data",
                "upload_date": "2023-03-15T15:52:35Z",
                "views": "47556"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/K2wffRzTvBM/hqdefault.jpg",
                "title": "I asked ChatGPT to do EDA for me: Here&#39;s how it went",
                "upload_date": "2023-02-26T23:40:44Z",
                "views": "351791"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/JPHS10dt_CY/hqdefault.jpg",
                "title": "Math for Machine Learning and Data Science Specialization Review | Why You Need to Learn Math 🤔",
                "upload_date": "2023-02-16T00:55:25Z",
                "views": "46107"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/hucuMCZBbIY/hqdefault.jpg",
                "title": "Will AI Replace Data Scientists? 🤔",
                "upload_date": "2023-02-04T14:51:37Z",
                "views": "67444"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/tpGawyNMRLM/hqdefault.jpg",
                "title": "My Entire Process for Doing Data Science Projects (ft. Notion)",
                "upload_date": "2023-01-23T08:24:17Z",
                "views": "45840"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/_8EV4tdJY2M/hqdefault.jpg",
                "title": "How to ACTUALLY Achieve Your Data Science Goals in 2023 (ft. Peter Akkies)",
                "upload_date": "2022-12-30T00:52:40Z",
                "views": "23328"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/QnGotm29cZE/hqdefault.jpg",
                "title": "Full Stack Data Science Roadmap 2023",
                "upload_date": "2022-12-22T00:49:38Z",
                "views": "165308"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/ZfN8nG0luig/hqdefault.jpg",
                "title": "RECESSION 2023: Should You Worry About Data Science Jobs? 📉",
                "upload_date": "2022-12-05T23:40:57Z",
                "views": "43372"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/GM8nrVBFdFo/hqdefault.jpg",
                "title": "DON&#39;T DO THIS: Revealing biggest mistakes in data visualization 📈",
                "upload_date": "2022-11-25T10:52:29Z",
                "views": "36950"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/GYxiuFRkS58/hqdefault.jpg",
                "title": "💡Awesome Data Portfolio Project Ideas #shorts #datascience",
                "upload_date": "2022-11-16T17:16:08Z",
                "views": "227919"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/UmFwybBiDt0/hqdefault.jpg",
                "title": "📚3 In-Depth Machine Learning Books You Can&#39;t Miss! #machinelearning #datascience #shorts",
                "upload_date": "2022-11-13T23:56:06Z",
                "views": "69625"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/N0o-Bjiwt0M/hqdefault.jpg",
                "title": "I Analyzed 1000 Data Science Books on Amazon: Here&#39;s What I Found 🤓",
                "upload_date": "2022-11-10T02:36:50Z",
                "views": "137950"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/JsZiFysJS1U/hqdefault.jpg",
                "title": "Moving Abroad, Data Science Careers, Job Searching: 60K subs Q&amp;A",
                "upload_date": "2022-10-24T01:00:04Z",
                "views": "23744"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/uFTd2b23GvI/hqdefault.jpg",
                "title": "Best Data Science Books for Beginners 📚",
                "upload_date": "2022-10-08T03:23:51Z",
                "views": "304024"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/ho9vNL4MYZ8/hqdefault.jpg",
                "title": "Top Courses to Learn Data Science Skills FAST!",
                "upload_date": "2022-09-27T06:31:11Z",
                "views": "163791"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/hFLp_aP8iQQ/hqdefault.jpg",
                "title": "Learn Data Science on iPad | Coding on iPad, note-taking and more",
                "upload_date": "2022-09-16T08:24:58Z",
                "views": "56658"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/fClT4PWlGoA/hqdefault.jpg",
                "title": "The Best Jupyterlab Extension That You Didn&#39;t Know Existed!",
                "upload_date": "2022-09-05T09:04:21Z",
                "views": "148740"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/p5MwJuZZYYY/hqdefault.jpg",
                "title": "👩🏻\u200d💻 How I Self-Study Anything (as a Data Scientist)",
                "upload_date": "2022-08-15T17:50:34Z",
                "views": "421018"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/B11nK1QCPRA/hqdefault.jpg",
                "title": "👩🏻\u200d💻 How to Create a Python Dashboard for Audio Data | AssemblyAI + Panel",
                "upload_date": "2022-08-02T08:09:26Z",
                "views": "13987"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/O_7f4MGeCKE/hqdefault.jpg",
                "title": "What I Learned in My Online BSc Computer Science Degree (University of London)",
                "upload_date": "2022-07-10T17:30:03Z",
                "views": "126499"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/5gf2ntjVGe8/hqdefault.jpg",
                "title": "Andrew Ng’s Machine Learning Specialization 2022 | What is it and is it worth taking?",
                "upload_date": "2022-06-29T07:37:18Z",
                "views": "110661"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/fAHkJ_Dhr50/hqdefault.jpg",
                "title": "Network of The Witcher | Relationship Extraction &amp; Network Analysis with Spacy &amp; NetworkX",
                "upload_date": "2022-06-18T23:57:12Z",
                "views": "85168"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/OIj_uTLplPA/hqdefault.jpg",
                "title": "Real-Time Work/Study With Me - 1 Hour With Music",
                "upload_date": "2022-06-06T20:45:59Z",
                "views": "8265"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/RuNolAh_4bU/hqdefault.jpg",
                "title": "Python Web-scraping with Selenium vs Scrapy vs BeautifulSoup | Witcher project ep. #1",
                "upload_date": "2022-05-28T23:03:26Z",
                "views": "40998"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/lpSw_RAPmgc/hqdefault.jpg",
                "title": "👩🏻\u200d💻 How to learn Data Science FASTER",
                "upload_date": "2022-05-21T01:00:10Z",
                "views": "76205"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/UiG8q67Z2XU/hqdefault.jpg",
                "title": "Data Science Side Hustles: A Guide to Technical Writing ft. Sophia Yang",
                "upload_date": "2022-05-06T15:49:46Z",
                "views": "12645"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/A8Abf3u0ZIs/hqdefault.jpg",
                "title": "How to Learn Math for Data Science (and stay sane!)",
                "upload_date": "2022-04-30T23:40:33Z",
                "views": "184080"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/OEVNDRZxgz8/hqdefault.jpg",
                "title": "How to Create a Portfolio Website for Data Science👩🏻\u200d💻 | Stackbit + Netlify",
                "upload_date": "2022-04-23T00:50:24Z",
                "views": "45275"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/lkMh1g41drk/hqdefault.jpg",
                "title": "Data Science Career, Work-life Balance, Study: 15K Sub Q&amp;A",
                "upload_date": "2022-04-14T00:00:41Z",
                "views": "11086"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/qdzuq_o8-dI/hqdefault.jpg",
                "title": "👩🏻\u200d💻 Why Macbook M1 Pro is the BEST laptop for Data Science",
                "upload_date": "2022-03-28T22:51:33Z",
                "views": "68372"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/uhxiXOTKzfs/hqdefault.jpg",
                "title": "How to Create a Beautiful Python Visualization Dashboard With Panel/Hvplot",
                "upload_date": "2022-03-10T01:32:41Z",
                "views": "491768"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/nNfco7k7Hi0/hqdefault.jpg",
                "title": "🤦🏻\u200d♀️ Biggest Mistakes Aspiring Data Scientists Make",
                "upload_date": "2022-02-25T12:14:09Z",
                "views": "10786"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/MsdyvI3ZI5k/hqdefault.jpg",
                "title": "Data Science Salaries in Amsterdam: Talking about Money 🤑, Benefits &amp; Dutch Working Culture",
                "upload_date": "2022-02-18T19:30:02Z",
                "views": "27297"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/U2v76H_B1rs/hqdefault.jpg",
                "title": "What Data Science Courses DON&#39;T TEACH YOU 🤫",
                "upload_date": "2022-02-06T18:21:13Z",
                "views": "161097"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/8PYJFSGlmmQ/hqdefault.jpg",
                "title": "Why I went back to school to study Computer Science (despite having a &#39;good&#39; job)👩🏻\u200d💻",
                "upload_date": "2022-01-30T14:15:00Z",
                "views": "18268"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/D56_Cx36oGY/hqdefault.jpg",
                "title": "Youtube API for Python: How to Create a Unique Data Portfolio Project",
                "upload_date": "2022-01-22T16:31:46Z",
                "views": "61301"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/zai2pLUD9FA/hqdefault.jpg",
                "title": "👉 STOP Using Jupyter Notebook! Here&#39;s the Better Tool",
                "upload_date": "2022-01-15T11:23:17Z",
                "views": "235373"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/ir2uJg4DF4k/hqdefault.jpg",
                "title": "Data Analyst Career Transition: TOP 5 SKILLS (2022)",
                "upload_date": "2022-01-01T10:58:59Z",
                "views": "10060"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/XYKuslcJp7A/hqdefault.jpg",
                "title": "🤩 Build Awesome Data Analytics Portfolio from Scratch in 2022 // 4 Portfolio project ideas",
                "upload_date": "2021-12-22T23:55:25Z",
                "views": "377126"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/qPxPoRNIUZk/hqdefault.jpg",
                "title": "Awesome FREE cheat sheets for learning SQL &amp; Python",
                "upload_date": "2021-11-30T07:04:20Z",
                "views": "8702"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/q3gWZkQ4PjU/hqdefault.jpg",
                "title": "Object-oriented Programming Visually Explained for Data scientists",
                "upload_date": "2021-11-14T22:49:22Z",
                "views": "8415"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/0srU1L8wL0U/hqdefault.jpg",
                "title": "Is That Job Worth Taking? // Insights From 5 Years In Data Science",
                "upload_date": "2021-11-07T19:40:22Z",
                "views": "1825"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/qjLHX3RCayI/hqdefault.jpg",
                "title": "Analyze My Monthly Expenses - 15 Minute Data Analysis Challenge in R",
                "upload_date": "2021-10-18T16:36:49Z",
                "views": "7253"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/Kq5iPtAc_3I/hqdefault.jpg",
                "title": "Data Analysis: How Much STATISTICS Do You Need to Know?",
                "upload_date": "2021-09-24T07:12:53Z",
                "views": "72861"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/RM43xgiJhjQ/hqdefault.jpg",
                "title": "Data Analyst vs. Data Scientist vs. Business Analyst // Do you need a CS degree?",
                "upload_date": "2021-09-06T22:31:16Z",
                "views": "7343"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/UQ08HuBrl7E/hqdefault.jpg",
                "title": "Why Data Analysis Sucks.",
                "upload_date": "2021-08-29T22:27:43Z",
                "views": "14685"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/IjLRk2Q_A0U/hqdefault.jpg",
                "title": "Exploratory Data Analysis on Covid-19 Dataset | Data Profiling &amp; Visualization",
                "upload_date": "2021-08-23T11:36:08Z",
                "views": "9364"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/LEH8TtCCYbM/hqdefault.jpg",
                "title": "👩\u200d💼 How to Ace Data Analyst Interviews // Prepare With Me ft. Alex the analyst",
                "upload_date": "2021-08-14T17:00:12Z",
                "views": "71127"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/CmC3FixsdIk/hqdefault.jpg",
                "title": "👩\u200d💻 A day in my life as a Data Science Consultant // WFH edition",
                "upload_date": "2021-08-08T15:48:28Z",
                "views": "5476"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/Y0c6cdbs4og/hqdefault.jpg",
                "title": "🤓 Best Productivity Tips in R for Data Analysts and Scientists",
                "upload_date": "2021-08-07T09:59:35Z",
                "views": "7017"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/XAoZbtIsgU0/hqdefault.jpg",
                "title": "👩\u200d💻 Learn Data Analyses and Statistics Faster: Best Visual Learning Resources",
                "upload_date": "2021-07-30T20:59:47Z",
                "views": "5585"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/Q9LkrbgaRUI/hqdefault.jpg",
                "title": "📶 Google Data Analytics Certificate // Is it worth it + Pros and Cons",
                "upload_date": "2021-07-26T21:00:05Z",
                "views": "11712"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/C9dWbD1Rrvc/hqdefault.jpg",
                "title": "How I Got a Data Analyst Job 🤩// Economics to Data Analyst Transition",
                "upload_date": "2021-07-12T22:03:54Z",
                "views": "20086"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/85X8D0-5mfc/hqdefault.jpg",
                "title": "🤔How to Stand Out as a Junior Data Scientist/ Data Analyst",
                "upload_date": "2021-06-28T10:46:32Z",
                "views": "10100"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/5LWoJAh-kww/hqdefault.jpg",
                "title": "Data Analyst Skill Stack // How I Became A Data Analyst",
                "upload_date": "2021-06-16T10:16:47Z",
                "views": "32640"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/_RzoHVWKwq4/hqdefault.jpg",
                "title": "Effective visual note-taking on iPad + Downloadable resources",
                "upload_date": "2021-06-09T06:58:21Z",
                "views": "10568"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/hWKLO7GtpiU/hqdefault.jpg",
                "title": "Data scientist is NOT the only SEXY job // All data careers explained",
                "upload_date": "2021-06-01T22:51:42Z",
                "views": "8685"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/dBZqggW22rs/hqdefault.jpg",
                "title": "How I take notes on iPad Pro | Notion, Notes, Procreate for study and personal projects",
                "upload_date": "2021-05-16T22:47:12Z",
                "views": "10822"
            },
            {
                "thumbnail": "https://i.ytimg.com/vi/QDdqsFCIxIk/hqdefault.jpg",
                "title": "How to stay focused and productive online with these computer tricks",
                "upload_date": "2021-04-30T16:03:53Z",
                "views": "4524"
            }
        ],
        "comments": [
            "So it means i shall go for ms in business analytics instead of ms data analytics?",
            "IMO one of the best videos to give an updated overview on data analytics future and what matters the most, which is to learn the business values",
            "Is foreseeable future 5 years or 10…?",
            "Hi! I'm finishing my 3-year degree in Statistics and now I find myself in a position where I have to decide in which way to proceed for my future. I'm trying to absorbe more knowledge possible to do the right choice, and to do so I'm asking also to experienced people like you some suggestions. For example, if it make sense to me, doing my degree, to take the certificates given by coursera in Data Analytics. Also, if it's better to me to start working or get specialized in a most specific field with a master.  I'll have 100 more questions but for now I stop here. Thanks in advance!",
            "thật tuyệt vời có một youtuber người gốc Việt làm video cho thế giới xem , cám ơn chị",
            "I hope it's still a good option as I am in school now for it! Haha but I am loving analytics so far.",
            "Thanks for sharing this with your viewers! 😃",
            "0:17 swiss army knife. Dont know why LLMs are obsessed with this word",
            "Fantastic video...and what a great channel! Subbed.",
            "Marry me? 🤧",
            "Thanks for you sharing. I am really very exited to include your followers in here.I need to give guidance about how can I will learning this amazing career Data analyst.?",
            "12:17 Brilliant!",
            "Mo",
            "Can't see your promotion information for Coursera,thanks!",
            "The content os great! But this nonsense vocal fry at the end of each phrase steals the concentration 😅",
            "will AI replace data science jobs",
            "This is one of the best videos I've watched on the impact of AI. I'm so glad you brought up that paper by Daron Acemoglu since I'm reading his book \"Power and Progress\", where he talks about the impact of technology on the workforce, and that it should create new tasks for humans. Progress should be measured by how any new technology enables humans to flourish. I like the nuance in this video, rather than painting either a gloomy picture or an overly optimistic view. Thanks.",
            "THIS SIMPLY MEANS BEGINNERS ARE F*CKED, EXPERTS WOULD USE THE AI ASSISTANTS. MOVE ON FELLAS NO MEAT ON THE BONE.",
            "I am a Student,,,i am doing my BSc in Software Engineering,,,Please suggest me which subject I should pursue masters degree which will be in demand in future,,,AI or Data Science or Robotics???",
            "2:47 One day cleaning data will be like this Thu!  One day... 😜",
            "thank you for always doing great content.",
            "Hi! I totally agree that in the future, we will have more work thanks to AI. We will always have more needs that need to be satisfied, and that has been a pattern throughout history. In the past, when almost the entire population was focused on agriculture, the invention of the steam machine only gave us the possibility to think about new problems. We will always have new problems to solve, and that is limitless. Finally, as you said, it is important to be flexible and have the capability to adapt to different circumstances. Thank you very much!",
            "It has always been about domain knowledge and critical thinking. Everything between your question or problem and the answer/insight was and is a friction. And this \"in-between\" has been technical requirements to take you from A to B, but it is not the goal. So anything that helps to remove or minimize friction is good.",
            "I’m currently an Engineer. Back in 2019, the executives at my company told to me try and use AI and automation to perform the tasks of the \"Data Clerk\" role at the company. It took me a couple of months to design, but I was able to do it and this enabled them to not have to hire a person for that role and save money. \n\nAfter that in 2021, the executives asked to me use AI to perform the “Data Validation Analyst” role, one of my former roles at the company. It was a lot more complicated, but I was able to do it after a few months of setup and testing several automated processes. I was even able to have AI complete a complicated monthly analysis report that involved data from several different systems and many calculations that normally took me several hours to complete. It could complete the complex report within minutes and it was automated to run the report daily rather than monthly and update results to a dashboard with data visualizations. \n\nAI can only do what we teach it do to, and even when a role or process becomes fully automated, someone still has to watch over it to make sure it performs correctly and also troubleshoot and fix it when it crashes or performs errors. I believe in the future, our roles will be designing and maintaining AI and automated systems and the functional code building, analysis, reporting, QA, and basic work tasks will be done exclusively with AI. AI is faster, more efficient, and tends to make less errors than humans, but humans are still needed to design and maintain it.",
            "I think with me being in Supply Chain for 23yrs . Starting as a Warehouse Clerk, Learning Various Styles of Forklifts, and Cranes, Inventory, Picking, Packing, Shipping, to being in charge people as a Team Leader, to Inventory Control, some Purchasing to now Sales of parts. I think Data Analysis is the Latest Frontier for me, and no brainer after all I have been practing for 23yrs on a more manual level. I have taken some excel, sql, python, tableau, and I have been working in Power BI for a year, but had learned how to use it before I had to work with it. I have built a database in college for a non profit for my internship. Its probably the best option for me to move into. What do you guys think?",
            "Not something to be learned.",
            "Hi chị ơi , trái ngành rẻ sang DA thì chỉ dành cho ngành Kinh tế - Tài chính thôi phải ko chị, ngành Software Eng thì rẻ ngành sang DA có hợp lý ko ạ ?",
            "Làm định lượng nó có giống DA k vậy ạ",
            "Great info, thanks!",
            "🔥🔥🔥",
            "Only a question of time until AI assumes a lot of tasks. Data analysis surely can be done completely on autopilot as soon the engine learns how to do it. A lot of Craft can also be done by machines and robots for example welding.",
            "⟩⟩⟩ I believe we are meant to be like Jesus in our hearts and not in our flesh. But be careful of AI, for it knows only things of the flesh such as our fleshly desires and cannot comprehend things of the spirit such as true love and eternal joy that comes from obeying God's Word. Man is a spirit and has a soul but lives in a body which is flesh. When you go to bed it is the flesh that sleeps, but your spirit never sleeps and that is why you have dreams, unless you have died in peace physically. More so, true love that endures and last is a thing of the heart. When I say 'heart', I mean 'spirit'. But fake love, pretentious love, love with expectations, love for classic reasons, love for material reasons and love for selfish reasons those are things of the flesh. In the beginning God said let us make man in our own image, according to our likeness. Take note, God is Spirit and God is Love. As Love He is the source of it. We also know that God is Omnipotent, for He creates out of nothing and He has no beginning and has no end. That means, our love is but a shadow of God's Love. True love looks around to see who is in need of your help, your smile, your possessions, your money, your strength, your quality time. Love forgives and forgets. Love wants for others what it wants for itself. However, true love works in conjunction with other spiritual forces such as patience and faith - in the finished work of our Lord and Savior, Jesus Christ, rather than in what man has done such as science, technology and organizations which won't last forever. To avoid sin and error which leads to the death of your body and your spirit-soul in hell fire (second death), you must make God's Word the standard for your life, not AI. If not, God will let you face AI on your own (with your own strength) and it will cast the truth down to the ground, it will be the cause of so much destruction like never seen before, it will deceive many and take many captive in order to enslave them into worshipping it and abiding in lawlessness. We can only destroy ourselves but with God all things are possible. God knows us better because He is our Creater and He knows our beginning and our end. The prove texts can be found in the book of John 5:31-44, 2 Thessalonians 2:1-12, Daniel 2, Daniel 7-9, Revelation 13-15, Matthew 24-25 and Luke 21.\n\n*HOW TO MAKE GOD'S WORD THE STANDARD FOR YOUR LIFE?*\nYou must read your Bible slowly, attentively and repeatedly, having this in mind that Christianity is not a religion but a Love relationship. It is measured by the love you have for God and the love you have for your neighbor. Matthew 5:13 says, \"You are the salt of the earth; but if the salt loses its flavor, how shall it be seasoned? It is then good for nothing but to be thrown out and trampled underfoot by men.\" Our spirits can only be purified while in the body (while on earth) but after death anything unpurified (unclean) cannot enter Heaven Gates. Blessed are the pure in heart, for they shall see God (Matthew 5:8). No one in his right mind can risk or even bare to put anything rotten into his body nor put the rotten thing closer to the those which are not rotten. Sin makes the heart unclean but you can ask God to forgive you, to save your soul, to cleanse you of your sin, to purify your heart by the blood of His Son, our Lord and Savior, Jesus Christ which He shed here on earth because Isaiah 53:5 says, \"But He was wounded for our transgressions, He was bruised for our iniquities; the chastisement for our peace was upon Him, and by His stripes we are healed\". Meditation in the Word of God is a visit to God because God is in His Word. We know God through His Word because the Word He speaks represent His heart's desires. Meditation is a thing of the heart, not a thing of the mind. Thinking is lower level while meditation is upper level. You think of your problems, your troubles but inorder to meditate, you must let go of your own will, your own desires, your own ways and let the Word you read prevail over thinking process by thinking of it more and more, until the Word gets into your blood and gains supremacy over you. That is when meditation comes - naturally without forcing yourself, turning the Word over and over in your heart. You can be having a conversation with someone while meditating in your heart - saying 'Thank you, Jesus...' over and over in your heart. But it is hard to meditate when you haven't let go of offence and past hurts. Your pain of the past, leave it for God, don't worry yourself, Jesus is alive, you can face tomorrow, He understands what you are passing through today. Begin to meditate on this prayer day and night (in all that you do), \"Lord take more of me and give me more of you. Give me more of your holiness, faithfulness, obedience, self-control, purity, humility, love, goodness, kindness, joy, patience, forgiveness, wisdom, understanding, calmness, perseverance... Make me a channel of shinning light where there is darkness, a channel of pardon where there is injury, a channel of love where there is hatred, a channel of humility where there is pride...\" The Word of God becomes a part of us by meditation, not by saying words but spirit prayer (prayer from the heart). When the Word becomes a part of you, it will by its very nature influence your conduct and behavior. Your bad habits, you will no longer have the urge to do them. You will think differently, dream differently, act differently and talk differently - if something does not qualify for meditation, it does not qualify for conversation. \n\n*THE BATTLE BETWEEN LIGHT AND DARKNESS (GOOD AND EVIL)*\nHeaven is God's throne and the dwelling place for God's angels and the saints. Hell was meant for the devil (satan) and the fallen angels. Those who torture the souls in hell are demons (unclean spirits). Man's spirit is a free moral agent. You can either yield yourself to God or to the devil because God has given us discretion. If one thinks he possesses only his own spirit, he is lying to himself and he is already in the dark. God is light while the devil is darkness. Light (Holy Spirit) and darkness (evil spirit) cannot stay together in a man's body. God is Love (Love is light) and where there is no love is hell, just as where there is no light is darkness. The one you yield yourself to, you will get his reward. The reward of righteousness to man's spirit is life (abundant life) and the reward of sin to man's spirit is death. Sin and satan are one and the same. Whatever sin can cause, satan also can cause. Sin is what gives the devil dominion or power over man's spirit. When God's Word becomes a part of you, sin power over you is broken, you become the righteousness of God through Christ Jesus. Where Jesus is, you are and when He went (to the Father), you went. In the book of John 8:42-47, Jesus said to them, “If God were your Father, you would love Me, for I proceeded forth and came from God; nor have I come of Myself, but He sent Me. Why do you not understand My speech? Because you are not able to listen to My word. You are of your father the devil, and the desires of your father you want to do. He was a murderer from the beginning, and does not stand in the truth, because there is no truth in him. When he speaks a lie, he speaks from his own resources, for he is a liar and the father of it. Which of you convicts Me of sin? And if I tell the truth, why do you not believe Me? He who is of God hears God’s words; therefore you do not hear, because you are not of God.” My prayer is, \"May God bless His Word in the midst of your heart.\" Glory and honour be to God our Father, our Lord and Savior Jesus Christ and our Helper the Holy Spirit. Watch and pray!... Thank you for your time and may God bless you as you share this message with others.",
            "Product person here considering transition into data job fully. Tired of product job",
            "Insightful analysis",
            "According to Taiwanese businessman Kai-Fu Lee if you go the technology career route you will be jobless In the next 15 years. \n\nAvoid\n- Statistics /Mathmatics / Physics / Biology / Engineering / etc\n- Computer Science / Data Science\n- Lagal and Compliance \n- Tiktok / Youtube / Music / Adult Entertainment - in 2024 these folks will be the majority of beggers on the side of the road\n- Education\n\nGo for\n\n- Sales (AI can't emulate emotions yet)\n- Skilled Trades  (niche work not basic construction as AI robots can do that)\n- Caregiving\n- Hostpitality (Again AI can't emulate emotions yet and the ultra rIch will always need servants)\n- Military",
            "Loveee your videos. Make one with Luke Barousque too.\n\n Pardon if the spelling are incorrect",
            "data analyst career is facing with that saturation in another countries but people from my country are asking \"what is data analyst?\"",
            "I Like the self driving cars analogy. Thank you Thu Vu.",
            "First of all people need to understand what is AI. In this point of life we don't have any available. All this chatbots, virtual assistant scripts and picture bashers together are not intellectual. It's mainstream names. Any basic human who don't know anything about data can do better job. Only because of human factor. Human is consumer and only human knows who want what. If real companies will be fine with just some random script generated reviews Data Analysis was dead years ago. Just add google statistics script and job done 😂",
            "That was great. Thank you",
            "I’m not sure. One thing for sure - domain knowledge, and learn how to learn because the race is going faster.\nPrompt to ChatGPT 4: Create a shortcut learning plan as described in Thu Vu data analytics link here :). \nHappy New  Year 🎉",
            "You know, I used to be a cruise ship waiter for 5 yrs and working in the hospitality restaurant industry for 7 years. I just started a new bachelor abroad with business information systems. I thought I am late to study it but made me realize i have domain knowledge and a bachelor degree in my previous industry and i can combine them both!!",
            "Short answeer yes 😊",
            "copilot in excel is a joke. 4 keyboard shortcut keys vs. typing \"add a column to the table bla bla\"",
            "I have 15 years in HR/Talent Acquisition.  Im excited to go back to school. Already having experience in the business and leading global teams I think will be a benefit for me after I finish my schooling.",
            "0:18 Isn't Ahmedabad, Gujarat spelling wrong in the Excel sheet 😅?",
            "How about business analytics? 😊",
            "Thanks a lotttt",
            "When will the Coursera offer expire?",
            "thank you! would be interested in your view about: Should You Still Learn Website Development?",
            "bhai mai hindi midiuam se ho to iay mai y kar sakata hu😢",
            "Thanks for reassuring that AI is not yet ready to replace data analyst or scientist in the foreseeable future. As i had been grunting hard attending courses to switch to a data career. Luckily u didnt say data analysis is gone for good.😅",
            "Personally I think AI will be a very powerful to bridging people without Tech background into Tech as well now it’s open to people with big Ideal but dont know how to transfer it to real life use case.",
            "I am doing my dissertation towards MS data science @ 53 . 👍",
            "The company I work for, is one of the biggest in its industry, It still has not relented on its ban on things like ChatGPT as it wants to preserve data security,. While we can use such tools for general work, we can't just upload customer data and have it nicely processed.\nYet the same company also pushes career paths in data science, for those with \"domain\" knowledge. \nI feel that this technology (like others in the past) is really progressing much much faster than these large organisations can cope with. Plus, they have to comply with new laws regarding data, and laws are usually even slower at keeping up with technology. \nMaybe it is just the relatively conservative industry I am in, but I think if you want to develop some brilliant, groundbreaking new workflows involving AI, then maybe very large companies are not the best place to get it done - or, you do it anyway, and hope that forgiveness is indeed easier to get than permission!!!",
            "Well, you said something retoric. Would be good to show us facts from your job to see more clear that it is worth to learn data analytics in 2024. Not this clickbait video.",
            "Well, I must say that was a very soothing video!! Thank you so much Thu Vu!!🎉",
            "Love your way of presenting the issue and the thorough analysis you go thru. Keep on the good job!",
            "Don't dump company data into chatgpt. Some data is private and chatgpt is not a search engine. They use users data to train their model.  Be very careful when you use external software and check if its ok or not.",
            "Should I study BSc in Data analytics or BSc in computer Science?",
            "AI can clean, analyze and visualize data in 2 seconds. As simple as that. You gotta have to be something really special.",
            "I am changing careers to data 👍🏻",
            "Hi Thu after long time, yes domain knowledge is must to accomplished critical data analysis. Human and AI together can make great work but alone side AI impossible! Like your bed 😀Happy New Year 🎈🎉",
            "the best video I haved wached in months \nthank you for the summary",
            "Mam can u teach complete data science course from scratch to end please ❤",
            "Thank you very much for share you opinion and I agree with you.",
            "omg i dont know where to start was my favorite excuse >:C",
            "Really nice video! Thanks 🙏🏼",
            "Agree with you.\nBut would add that jobs will be created to cope with \"AI Overload\".\nAI is going to embedded into almost every piece of software and will be offering unsolicited advice.\nManagement will be overwhelmed by the amount of AI generated suggestions that it will need to hire people they can ask:\n\"AI says this, what do you think?\".\nExamples:\n1. AI generated this logo, as an artist what do you think?\n2. AI suggests we finance our expansion with more debt, as an accountant what do you think?\n3. AI suggests we can save money be centralizing our thermostat function and intelligently dispatching heating/cooing requests to different HVAC units, what do you think?\n4. Alexa just said it might be time to reorder coffee for the break room, what do you think?\n5. AI suggests that we change our advertising and promotion budget, as  a marketing specialist what do you think?",
            "Too old for college? No such thing. I just completed an MS in Data Science at 65. Never stop learning. Those who did are now the ones in trouble.",
            "Tired of these stupid click bait title videos\n\nDisliked and reported \n\nLife's tough out there and people like you make these click bait videos to scare people and for views",
            "Hi Thu Vu! Glad to listen to your idea. Thank you for sharing. Keep it up! ☕🍹",
            "🤔",
            "❤"
        ],
        "data": {
            "negative": 29,
            "neutral": 8,
            "positive": 37
        },
        "video_details": {
            "description": "Get $200 off CourseraPlus 👉 https://imp.i384100.net/nLvdN9 (until 31 Jan 2024)\n(Research paper) Automation and New Tasks: How Technology Displaces and Reinstates Labor https://pubs.aeaweb.org/doi/pdfplus/10.1257/jep.33.2.3\n\n🔑 TIMESTAMPS\n================================\n0:00 - Intro\n1:15 - AI will make Data Analytics ”sexy” again\n3:23 - CourseraPlus discount\n4:13 - Will AI replace data analysts?\n8:07 - Importance of domain knowledge\n9:31 - Easier entry for beginners or mid-career transition\n11:53 - Conclusions\n\n👩🏻\u200d💻 COURSES & RESOURCES\n================================\n📖 Google Advanced Data Analytics Certificate 👉 https://imp.i384100.net/anK9zZ\n📖 Google Data Analytics Certificate 👉 https://imp.i384100.net/15v9y6\n📖 Learn SQL Basics for Data Science Specialization 👉 https://imp.i384100.net/AovPnJ\n📖 Excel Skills for Business 👉 https://coursera.pxf.io/doPaoy\n📖 Machine Learning Specialization 👉 https://imp.i384100.net/RyjykN\n📖 Data Visualization with Tableau Specialization 👉https://imp.i384100.net/n15XWR\n📖 Deep Learning Specialization 👉 https://imp.i384100.net/zavBA0\n📖 Mathematics for Machine Learning and Data Science Specialization 👉 https://imp.i384100.net/LXK0gj\n📖 Applied Data Science with Python 👉 https://imp.i384100.net/gbxOqv\n\n🙋🏻\u200d♀️ LET'S CONNECT!\n================================\n🤓 Join my Discord server: https://discord.gg/SK7ZC5XhcS\n📩  Newsletter: https://substack.com/profile/87689887-thu-vu\n✍ Medium: https://medium.com/@vuthihienthu.ueb\n🔗 All links: https://linktr.ee/thuvuanalytics\n\nAs a member of the Amazon and Coursera Affiliate Programs, I earn a commission from qualifying purchases on the links above. By using the links you help support this channel at no cost for you.\n\n#datascience #ThuVu #dataanalytics",
            "likes": "2597",
            "title": "Should You Still Learn Data Analytics? (in 2024)",
            "upload_date": "2023-12-30T00:55:25Z",
            "views": "84378"
        }
    };

    function findMinMaxViews(videos) {
        let maxViewsVideo = videos[0];
        let minViewsVideo = videos[0];
    
        videos.forEach(video => {
            if (parseInt(video.views) > parseInt(maxViewsVideo.views)) {
                maxViewsVideo = video;
            }
    
            if (parseInt(video.views) < parseInt(minViewsVideo.views)) {
                minViewsVideo = video;
            }
        });
    
        return {
            maxViewsVideo,
            minViewsVideo
        };
    }

    var sample  = {
        "thumbnail": "https://i.ytimg.com/vi/JTHyfv_GUCw/hqdefault.jpg",
        "title": "Should You Still Learn Data Analytics? (in 2024)",
        "upload_date": "2023-12-30T00:55:25Z",
        "views": "84378"
    }

    function convert(timestamp) {
    const date = new Date(timestamp);
    
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Adding 1 because getUTCMonth() returns zero-based month
    const year = date.getUTCFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}
    let { maxViewsVideo, minViewsVideo } = findMinMaxViews(data.channel_videos);

    console.log("Max : " , maxViewsVideo);

    return (
        <div className='user-info'>
           
            <div className="video-details">
                <img src="https://i.ytimg.com/vi/N1UMycRJbAw/maxresdefault.jpg" alt="" />
                <div className="video-main">
                    <h1>{data.video_details.title}</h1>
                    <p>Uploaded On : 31/12/2023</p>
                </div>
                
            </div>
            {/* <FullStats title="Video Description" key1 = "Total Views" key2="Total Likes" key3="Upload date" val1={data.video_details.views} val2={data.video_details.likes} date={convert(data.video_details.upload_date)} /> */}
            <FullStats title="Video Description" key1 = "Total Views" key2="Total Likes" key3="Total Comments" val1={data.video_details.views} val2={data.video_details.likes} val3={data.comments.length} />


            <div className="plots">

            <BarPlot mydata = {data.data} />
            <Piechart mydata={data.data} />
            </div>
            <FullStats key1 = "Positive Comments" key2="Negative Comments" key3="neutral Comments" val1={data.data.positive} val2={data.data.negative} val3={data.data.neutral} title="Sentiment Analysis of Comments" />

            <div className="user-profile">
                <img src={data.channel_info.profile_photo_url} alt="" />
                <div className='username'>
                    <h1>{data.channel_info.channel_name}</h1>
                    <p>{data.channel_info.channel_description}</p>
                </div>
            </div>
            <FullStats title="Channel Description" key1 = "Total Subscribers" key2="Total Videos" key3="Total Channel Views" val1={data.channel_info.subscribers} val2={data.channel_info.total_videos} val3={123984} />
          
            
            
            <div className="topstats">
                <VidePreview thumbnail={maxViewsVideo.thumbnail} title={maxViewsVideo.title } views={maxViewsVideo.views} property="Most Viewed" icon={up} typ="Views"/>
                <VidePreview thumbnail={sample.thumbnail}  title={sample.title } views={sample.views} property="Most Liked" icon={like} typ="Likes"/>
                <VidePreview thumbnail={minViewsVideo.thumbnail} title={minViewsVideo.title } views={minViewsVideo.views} property="Least Viewed" icon={down} typ="Views"/>
                <VidePreview thumbnail="https://i.ytimg.com/vi/3736Pd_hwFQ/maxresdefault.jpg"  title={minViewsVideo.title } views={minViewsVideo.views} property="Least Liked" icon={dislike} typ="Likes"/>
            </div>
        </div>
    );
}
export default UserInfo;