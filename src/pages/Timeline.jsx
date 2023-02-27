import { Container } from "@mui/material";
import React from "react";
import Heading from "../components/Heading";
import Timeline from "@mui/lab/Timeline";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const data = [
  {
    date: "10th March'23",
    title: "Exploring Generative AI and Future",
    speaker: [{
      name: "Mohammad Arsalan",
      social: "https://www.linkedin.com/in/sallu-mandya/",
    }],
  },
  {
    date: "14th March'23",
    title: "Building with OpenAI",

  },
  {
    date: "16th March'23",
    title: "Getting Started with the world of ML",
  },
  {
    date: "19th March'23",
    title: "Democratizing Analysis with AutoML",
  },
  {
    date: "22nd March'23",
    title: "AutoTrain + Streamlit & Postman ",
  },
  {
    date: "25th March'23",
    title: "NLP Basics + Building Recommendation System ",
  },
  {
    date: "28th March'23",
    title: "HuggingFace + MindsDB",
  },
  {
    date: "31st March'23",
    title: "Computer Vision using YoloV7",
    speaker: [{
      name: "Rishi More",
      social: "https://www.linkedin.com/in/rishimore102/",
    }, {
      name: "Gitesh Kambli",
      social: "https://www.linkedin.com/in/gitesh-kambli/",
    }],
  },
  {
    date: "03rd April'23",
    title: "Transfer Learning",
    speaker: [{
      name: "Aritra Roy Gosthipaty",
      social: "https://www.linkedin.com/in/arig23498/",
    }],
  },
  {
    date: "06th April'23",
    title: "MLOps",
    speaker: [{
      name: "Rohit Ghumare",
      social: "https://www.linkedin.com/in/rohit-ghumare/",
    }],
  },
  {
    date: "08th April'23",
    title: "Lightning AI",
    speaker: [{
      name: "Aniket Maurya",
      social: "https://www.linkedin.com/in/aniketmaurya/",
    }],
  },
  {
    date: "10th April'23",
    title: "AI + Web3",
    speaker: [{
      name: "Sudalai Rajkumar",
      social: "https://www.linkedin.com/in/sudalairajkumar/",
    }],
  },
  
];

const EventTimeline = () => {
  return (
    <div id="timeline" className="w-full pt-24">
      <Container>
        <Heading>Timeline</Heading>
        <Timeline position="alternate" className="px-0 mt-4 space-y-4 ">
          {data.map((item) => (
            <TimelineItem className="timelineevent">
              <TimelineOppositeContent className="invisible">
                <span
                  className="bg-indigo-200  text-indigo-900 
                px-2 lg:px-8 py-2 rounded-full lg:text-lg
                
                "
                >
                  {item.date}
                </span>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector className="!ml-0" />
              </TimelineSeparator>
              <TimelineContent className="">
                <span
                  className="bg-indigo-200  text-indigo-900 
                px-8 py-1 rounded-full"
                >
                  {item.date}
                </span>
                <div
                  className="bg-indigo-600 text-white rounded-xl mt-4 
                 p-4 lg:p-8"
                >
                  <h1 className="font-medium text-lg lg:text-2xl">
                    {item.title}
                  </h1>
                  {item.description && <p className="font-normal mt-2" >{item.description}</p>}
                  {item.speaker ? <span className="flex mt-2 lg:mt-4 gap-4 w-max ">
                    Speaker:{" "}
                    {item.speaker.map(s => (<a
                      href={s.social}
                      className="bg-indigo-500 w-max px-4 rounded-full 
                    flex items-center hover:bg-indigo-400 transition "
                    >
                      {s.name}
                      <OpenInNewIcon className="h-4" />
                    </a>))}
                  </span> : 
                  <span className="block italic mt-2 lg:mt-4" >Discussing with speakers</span>}
                  <span className="block mt-4 italic font-light text-sm" >dates are tentative</span>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </div>
  );
};

export default EventTimeline;
