import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function VideoUploadsPlot() {
    const [uploadsData, setUploadsData] = useState({});

    useEffect(() => {
        // Process the data when the component mounts
        processData();
    }, []);

    const channelVideos =[
        {
          "thumbnail": "https://i.ytimg.com/vi/JTHyfv_GUCw/hqdefault.jpg",
          "title": "Should You Still Learn Data Analytics? (in 2024)",
          "upload_date": "2023-12-30T00:55:25Z",
          "views": "79442"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/TR7AGmey1C8/hqdefault.jpg",
          "title": "How I&#39;d Learn AI (If I Had to Start Over)",
          "upload_date": "2023-11-29T09:41:39Z",
          "views": "290425"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/HKYULsQr_U0/hqdefault.jpg",
          "title": "Should You Still Learn to Code in 2024? #coding #datascience  #ai",
          "upload_date": "2023-11-12T17:06:48Z",
          "views": "8431"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/fhFz0JfGvfc/hqdefault.jpg",
          "title": "I Created a Custom GPT for Data Science Nerds 👩🏻\u200d💻",
          "upload_date": "2023-11-11T16:03:56Z",
          "views": "81343"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/lp6SfYCRGLM/hqdefault.jpg",
          "title": "🤯 AI Is Taking Over Data Jobs: Here&#39;s What To Do About It",
          "upload_date": "2023-10-16T22:03:49Z",
          "views": "7514"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/uGynMyXCcg8/hqdefault.jpg",
          "title": "📚 BEST AI Books to Read in 2023",
          "upload_date": "2023-10-09T22:02:40Z",
          "views": "13307"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/EzVIkHQWnhc/hqdefault.jpg",
          "title": "Doing Data Analysis on Sensitive Data (ft. Oblivious)",
          "upload_date": "2023-08-22T00:29:27Z",
          "views": "5870"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/8sLq4P-QDL0/hqdefault.jpg",
          "title": "I Tried ChatGPT Code Interpreter for Data Tasks - it&#39;s a game changer!",
          "upload_date": "2023-07-15T19:02:17Z",
          "views": "39822"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/3736Pd_hwFQ/hqdefault.jpg",
          "title": "Become a PRO with These 40 Data science Productivity Tips",
          "upload_date": "2023-07-08T09:45:30Z",
          "views": "15016"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/PvnSSrnjLX8/hqdefault.jpg",
          "title": "Self-taught vs. Guided Program: CareerFoundry&#39;s Data Analytics Program Review",
          "upload_date": "2023-06-16T22:57:31Z",
          "views": "8388"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/S5U76LPu_bQ/hqdefault.jpg",
          "title": "Is a Computer Science Degree WORTHLESS 🤯? (in the age of AI)",
          "upload_date": "2023-06-08T16:10:11Z",
          "views": "23037"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/l2YU8QuXiTM/hqdefault.jpg",
          "title": "ChatGPT + Jupyter Notebook = Mindblowing! 🤩",
          "upload_date": "2023-05-28T14:33:38Z",
          "views": "25621"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/dYQfgcd0XD4/hqdefault.jpg",
          "title": "Love ❤️ JupyterCon Paris 2023",
          "upload_date": "2023-05-22T12:47:19Z",
          "views": "6127"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/0JDsvZHooNU/hqdefault.jpg",
          "title": "AI replacing jobs, mistakes, relationships (and other things): 140K subs Q&amp;A",
          "upload_date": "2023-05-15T23:01:44Z",
          "views": "5947"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/kHdAb8yBBDI/hqdefault.jpg",
          "title": "Will ChatGPT Code Interpreter Replace Data Analysts?",
          "upload_date": "2023-05-12T08:21:50Z",
          "views": "62676"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/tSiS15ubQFQ/hqdefault.jpg",
          "title": "How to Deploy Machine Learning Models (ft. Runway)",
          "upload_date": "2023-05-10T08:30:33Z",
          "views": "75271"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/c3Uvz75kVd4/hqdefault.jpg",
          "title": "Will AI be THE END of us?",
          "upload_date": "2023-04-21T15:03:11Z",
          "views": "7343"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/aYorBPF05Rw/hqdefault.jpg",
          "title": "How I&#39;d Learn to Become a Data Analyst",
          "upload_date": "2023-04-09T10:45:00Z",
          "views": "331260"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/N1UMycRJbAw/hqdefault.jpg",
          "title": "Roadmap for Transitioning to Data Analytics in 2023",
          "upload_date": "2023-03-31T21:49:39Z",
          "views": "438185"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/7yGolPv8AOs/hqdefault.jpg",
          "title": "If Learning Data Science Is Like Rock Climbing",
          "upload_date": "2023-03-19T23:24:45Z",
          "views": "20871"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/EE1Y2enHrcU/hqdefault.jpg",
          "title": "Building a Chatbot with ChatGPT API and Reddit Data",
          "upload_date": "2023-03-15T15:52:35Z",
          "views": "47430"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/K2wffRzTvBM/hqdefault.jpg",
          "title": "I asked ChatGPT to do EDA for me: Here&#39;s how it went",
          "upload_date": "2023-02-26T23:40:44Z",
          "views": "351543"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/JPHS10dt_CY/hqdefault.jpg",
          "title": "Math for Machine Learning and Data Science Specialization Review | Why You Need to Learn Math 🤔",
          "upload_date": "2023-02-16T00:55:25Z",
          "views": "45872"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/hucuMCZBbIY/hqdefault.jpg",
          "title": "Will AI Replace Data Scientists? 🤔",
          "upload_date": "2023-02-04T14:51:37Z",
          "views": "67418"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/tpGawyNMRLM/hqdefault.jpg",
          "title": "My Entire Process for Doing Data Science Projects (ft. Notion)",
          "upload_date": "2023-01-23T08:24:17Z",
          "views": "45715"
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
          "views": "165177"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/ZfN8nG0luig/hqdefault.jpg",
          "title": "RECESSION 2023: Should You Worry About Data Science Jobs? 📉",
          "upload_date": "2022-12-05T23:40:57Z",
          "views": "43369"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/GM8nrVBFdFo/hqdefault.jpg",
          "title": "DON&#39;T DO THIS: Revealing biggest mistakes in data visualization 📈",
          "upload_date": "2022-11-25T10:52:29Z",
          "views": "36903"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/GYxiuFRkS58/hqdefault.jpg",
          "title": "💡Awesome Data Portfolio Project Ideas #shorts #datascience",
          "upload_date": "2022-11-16T17:16:08Z",
          "views": "227430"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/UmFwybBiDt0/hqdefault.jpg",
          "title": "📚3 In-Depth Machine Learning Books You Can&#39;t Miss! #machinelearning #datascience #shorts",
          "upload_date": "2022-11-13T23:56:06Z",
          "views": "69284"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/N0o-Bjiwt0M/hqdefault.jpg",
          "title": "I Analyzed 1000 Data Science Books on Amazon: Here&#39;s What I Found 🤓",
          "upload_date": "2022-11-10T02:36:50Z",
          "views": "137834"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/JsZiFysJS1U/hqdefault.jpg",
          "title": "Moving Abroad, Data Science Careers, Job Searching: 60K subs Q&amp;A",
          "upload_date": "2022-10-24T01:00:04Z",
          "views": "23731"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/uFTd2b23GvI/hqdefault.jpg",
          "title": "Best Data Science Books for Beginners 📚",
          "upload_date": "2022-10-08T03:23:51Z",
          "views": "303279"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/ho9vNL4MYZ8/hqdefault.jpg",
          "title": "Top Courses to Learn Data Science Skills FAST!",
          "upload_date": "2022-09-27T06:31:11Z",
          "views": "163573"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/hFLp_aP8iQQ/hqdefault.jpg",
          "title": "Learn Data Science on iPad | Coding on iPad, note-taking and more",
          "upload_date": "2022-09-16T08:24:58Z",
          "views": "56329"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/fClT4PWlGoA/hqdefault.jpg",
          "title": "The Best Jupyterlab Extension That You Didn&#39;t Know Existed!",
          "upload_date": "2022-09-05T09:04:21Z",
          "views": "148536"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/p5MwJuZZYYY/hqdefault.jpg",
          "title": "👩🏻\u200d💻 How I Self-Study Anything (as a Data Scientist)",
          "upload_date": "2022-08-15T17:50:34Z",
          "views": "420756"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/B11nK1QCPRA/hqdefault.jpg",
          "title": "👩🏻\u200d💻 How to Create a Python Dashboard for Audio Data | AssemblyAI + Panel",
          "upload_date": "2022-08-02T08:09:26Z",
          "views": "13967"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/O_7f4MGeCKE/hqdefault.jpg",
          "title": "What I Learned in My Online BSc Computer Science Degree (University of London)",
          "upload_date": "2022-07-10T17:30:03Z",
          "views": "126019"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/5gf2ntjVGe8/hqdefault.jpg",
          "title": "Andrew Ng’s Machine Learning Specialization 2022 | What is it and is it worth taking?",
          "upload_date": "2022-06-29T07:37:18Z",
          "views": "110439"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/fAHkJ_Dhr50/hqdefault.jpg",
          "title": "Network of The Witcher | Relationship Extraction &amp; Network Analysis with Spacy &amp; NetworkX",
          "upload_date": "2022-06-18T23:57:12Z",
          "views": "84962"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/OIj_uTLplPA/hqdefault.jpg",
          "title": "Real-Time Work/Study With Me - 1 Hour With Music",
          "upload_date": "2022-06-06T20:45:59Z",
          "views": "8252"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/RuNolAh_4bU/hqdefault.jpg",
          "title": "Python Web-scraping with Selenium vs Scrapy vs BeautifulSoup | Witcher project ep. #1",
          "upload_date": "2022-05-28T23:03:26Z",
          "views": "40905"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/lpSw_RAPmgc/hqdefault.jpg",
          "title": "👩🏻\u200d💻 How to learn Data Science FASTER",
          "upload_date": "2022-05-21T01:00:10Z",
          "views": "76145"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/UiG8q67Z2XU/hqdefault.jpg",
          "title": "Data Science Side Hustles: A Guide to Technical Writing ft. Sophia Yang",
          "upload_date": "2022-05-06T15:49:46Z",
          "views": "12638"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/A8Abf3u0ZIs/hqdefault.jpg",
          "title": "How to Learn Math for Data Science (and stay sane!)",
          "upload_date": "2022-04-30T23:40:33Z",
          "views": "183729"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/OEVNDRZxgz8/hqdefault.jpg",
          "title": "How to Create a Portfolio Website for Data Science👩🏻\u200d💻 | Stackbit + Netlify",
          "upload_date": "2022-04-23T00:50:24Z",
          "views": "45062"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/lkMh1g41drk/hqdefault.jpg",
          "title": "Data Science Career, Work-life Balance, Study: 15K Sub Q&amp;A",
          "upload_date": "2022-04-14T00:00:41Z",
          "views": "11080"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/qdzuq_o8-dI/hqdefault.jpg",
          "title": "👩🏻\u200d💻 Why Macbook M1 Pro is the BEST laptop for Data Science",
          "upload_date": "2022-03-28T22:51:33Z",
          "views": "68178"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/eiZbEcMX3b4/hqdefault.jpg",
          "title": "How I come up with Data Project IDEAS 💡",
          "upload_date": "2022-03-18T21:32:41Z",
          "views": "39087"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/uhxiXOTKzfs/hqdefault.jpg",
          "title": "How to Create a Beautiful Python Visualization Dashboard With Panel/Hvplot",
          "upload_date": "2022-03-10T01:32:41Z",
          "views": "490704"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/nNfco7k7Hi0/hqdefault.jpg",
          "title": "🤦🏻\u200d♀️ Biggest Mistakes Aspiring Data Scientists Make",
          "upload_date": "2022-02-25T12:14:09Z",
          "views": "10783"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/MsdyvI3ZI5k/hqdefault.jpg",
          "title": "Data Science Salaries in Amsterdam: Talking about Money 🤑, Benefits &amp; Dutch Working Culture",
          "upload_date": "2022-02-18T19:30:02Z",
          "views": "27211"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/U2v76H_B1rs/hqdefault.jpg",
          "title": "What Data Science Courses DON&#39;T TEACH YOU 🤫",
          "upload_date": "2022-02-06T18:21:13Z",
          "views": "161071"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/8PYJFSGlmmQ/hqdefault.jpg",
          "title": "Why I went back to school to study Computer Science (despite having a &#39;good&#39; job)👩🏻\u200d💻",
          "upload_date": "2022-01-30T14:15:00Z",
          "views": "18241"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/D56_Cx36oGY/hqdefault.jpg",
          "title": "Youtube API for Python: How to Create a Unique Data Portfolio Project",
          "upload_date": "2022-01-22T16:31:46Z",
          "views": "61077"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/zai2pLUD9FA/hqdefault.jpg",
          "title": "👉 STOP Using Jupyter Notebook! Here&#39;s the Better Tool",
          "upload_date": "2022-01-15T11:23:17Z",
          "views": "235094"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/ir2uJg4DF4k/hqdefault.jpg",
          "title": "Data Analyst Career Transition: TOP 5 SKILLS (2022)",
          "upload_date": "2022-01-01T10:58:59Z",
          "views": "10052"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/XYKuslcJp7A/hqdefault.jpg",
          "title": "🤩 Build Awesome Data Analytics Portfolio from Scratch in 2022 // 4 Portfolio project ideas",
          "upload_date": "2021-12-22T23:55:25Z",
          "views": "376617"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/qPxPoRNIUZk/hqdefault.jpg",
          "title": "Awesome FREE cheat sheets for learning SQL &amp; Python",
          "upload_date": "2021-11-30T07:04:20Z",
          "views": "8693"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/q3gWZkQ4PjU/hqdefault.jpg",
          "title": "Object-oriented Programming Visually Explained for Data scientists",
          "upload_date": "2021-11-14T22:49:22Z",
          "views": "8388"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/0srU1L8wL0U/hqdefault.jpg",
          "title": "Is That Job Worth Taking? // Insights From 5 Years In Data Science",
          "upload_date": "2021-11-07T19:40:22Z",
          "views": "1823"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/qjLHX3RCayI/hqdefault.jpg",
          "title": "Analyze My Monthly Expenses - 15 Minute Data Analysis Challenge in R",
          "upload_date": "2021-10-18T16:36:49Z",
          "views": "7249"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/Kq5iPtAc_3I/hqdefault.jpg",
          "title": "Data Analysis: How Much STATISTICS Do You Need to Know?",
          "upload_date": "2021-09-24T07:12:53Z",
          "views": "72582"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/RM43xgiJhjQ/hqdefault.jpg",
          "title": "Data Analyst vs. Data Scientist vs. Business Analyst // Do you need a CS degree?",
          "upload_date": "2021-09-06T22:31:16Z",
          "views": "7333"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/UQ08HuBrl7E/hqdefault.jpg",
          "title": "Why Data Analysis Sucks.",
          "upload_date": "2021-08-29T22:27:43Z",
          "views": "14672"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/IjLRk2Q_A0U/hqdefault.jpg",
          "title": "Exploratory Data Analysis on Covid-19 Dataset | Data Profiling &amp; Visualization",
          "upload_date": "2021-08-23T11:36:08Z",
          "views": "9347"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/LEH8TtCCYbM/hqdefault.jpg",
          "title": "👩\u200d💼 How to Ace Data Analyst Interviews // Prepare With Me ft. Alex the analyst",
          "upload_date": "2021-08-14T17:00:12Z",
          "views": "70559"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/CmC3FixsdIk/hqdefault.jpg",
          "title": "👩\u200d💻 A day in my life as a Data Science Consultant // WFH edition",
          "upload_date": "2021-08-08T15:48:28Z",
          "views": "5465"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/Y0c6cdbs4og/hqdefault.jpg",
          "title": "🤓 Best Productivity Tips in R for Data Analysts and Scientists",
          "upload_date": "2021-08-07T09:59:35Z",
          "views": "7005"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/XAoZbtIsgU0/hqdefault.jpg",
          "title": "👩\u200d💻 Learn Data Analyses and Statistics Faster: Best Visual Learning Resources",
          "upload_date": "2021-07-30T20:59:47Z",
          "views": "5576"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/Q9LkrbgaRUI/hqdefault.jpg",
          "title": "📶 Google Data Analytics Certificate // Is it worth it + Pros and Cons",
          "upload_date": "2021-07-26T21:00:05Z",
          "views": "11705"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/C9dWbD1Rrvc/hqdefault.jpg",
          "title": "How I Got a Data Analyst Job 🤩// Economics to Data Analyst Transition",
          "upload_date": "2021-07-12T22:03:54Z",
          "views": "20059"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/85X8D0-5mfc/hqdefault.jpg",
          "title": "🤔How to Stand Out as a Junior Data Scientist/ Data Analyst",
          "upload_date": "2021-06-28T10:46:32Z",
          "views": "10075"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/5LWoJAh-kww/hqdefault.jpg",
          "title": "Data Analyst Skill Stack // How I Became A Data Analyst",
          "upload_date": "2021-06-16T10:16:47Z",
          "views": "32610"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/_RzoHVWKwq4/hqdefault.jpg",
          "title": "Effective visual note-taking on iPad + Downloadable resources",
          "upload_date": "2021-06-09T06:58:21Z",
          "views": "10514"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/hWKLO7GtpiU/hqdefault.jpg",
          "title": "Data scientist is NOT the only SEXY job // All data careers explained",
          "upload_date": "2021-06-01T22:51:42Z",
          "views": "8674"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/dBZqggW22rs/hqdefault.jpg",
          "title": "How I take notes on iPad Pro | Notion, Notes, Procreate for study and personal projects",
          "upload_date": "2021-05-16T22:47:12Z",
          "views": "10783"
        },
        {
          "thumbnail": "https://i.ytimg.com/vi/QDdqsFCIxIk/hqdefault.jpg",
          "title": "How to stay focused and productive online with these computer tricks",
          "upload_date": "2021-04-30T16:03:53Z",
          "views": "4500"
        }
      ];

    const processData = () => {
        const data = {};

        // Loop through each video and extract month and year from upload date
        channelVideos.forEach(video => {
            const uploadDate = new Date(video.upload_date);
            const monthYear = `${uploadDate.getFullYear()}-${uploadDate.getMonth() + 1}`;

            // Increment count for the month
            if (data[monthYear]) {
                data[monthYear] += 1;
            } else {
                data[monthYear] = 1;
            }
        });

        // Set the processed data to state
        setUploadsData(data);
    };

    // Extract months and counts for plotting
    const months = Object.keys(uploadsData).sort();
    const counts = months.map(month => uploadsData[month]);
    return (
        <div>
            <h2 style={{ color: 'white' }}>Number of Videos Uploaded per Month</h2>
            <Plot
                data={[
                    {
                        type: 'bar',
                        x: months,
                        y: counts,
                        // marker: {
                        //     color: 'yellow',
                        // },
                    },
                ]}
                layout={{
                    width: 800,
                    height: 500,
                    title: 'Video Uploads per Month',
                    titlefont: {
                        color: 'white'
                    },
                    xaxis: {
                        title: 'Month',
                        color: 'white'
                    },
                    yaxis: {
                        title: 'Number of Videos',
                        color:'white',
                        
                    },
                    plot_bgcolor: 'rgba(0, 0, 0, 0)',
                    paper_bgcolor: 'rgba(0, 0, 0, 0)',
                }}
            />
        </div>
    );
}
export default VideoUploadsPlot;
