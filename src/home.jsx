import React from "react";
import Layout from "./Layout";
import Dita from "./assets/images/Dita.jpg";
import athi_main from "./assets/images/athi_main.png";
import athiCampus from "./assets/images/athiCampus.png";
import daystarICT from "./assets/images/daystarICT.jpg";
import hardware from "./assets/images/hardware.jpg";
import software from "./assets/images/software.jpg";
import teaching from "./assets/images/teaching.jpg";
import chilltonsProject from "./assets/images/chilltonsProject.png";
import examTimeTableProject from "./assets/images/examTimeTableProject.png";
import swapSokoProject from "./assets/images/swapSokoProject.png";

import { Box, Image, Flex } from "@chakra-ui/react";

function Home() {
  return (
    <Layout>
      <Flex
        h={"80vh"}
        style={{
          backgroundImage: `url(${Dita})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Flex
          flexDirection={"column"}
          h={"20vh"}
          w={"100%"}
          mt={"50vh"}
          mr={"40%"}
          ml={"12%"}
        >
          <h3 style={{ color: "white" }}>
            Unlocking Potential Through Technology.
          </h3>
          <h1 style={{ fontSize: 72, fontWeight: "700", color: "white" }}>
            Elevate. Innovate.
          </h1>
        </Flex>
      </Flex>
      <Flex bg={"silver"} h={"60vh"} w={"100%"}>
        <Flex
          h={"49vh"}
          w={"45%"}
          mt={"6vh"}
          mr={"15%"}
          ml={"9%"}
          flexDirection={"column"}
        >
          <h1
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "black",
              marginBottom: "2%",
            }}
          >
            What is Dita?
          </h1>
          <p style={{ fontSize: 18, color: "black" }}>
            DITA is first of all a community. We learn together and grow
            together. We strive for excellence as upcoming professionals. We are
            quick to embrace new members and introduce them into our culture. We
            are a tech hub. Technology is our surname. In DITA, you matter.
          </p>
        </Flex>
        <Flex bg={"grey"} h={"49vh"} w={"45%"} mt={"6vh"} mr={"8%"} ml={"1%"}>
          <img
            src={athi_main}
            alt="Athi Main"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Flex>
      </Flex>
      <Flex bg={"silver"} h={"60vh"} w={"100%"}>
        <Flex h={"49vh"} w={"45%"} mt={"6vh"} mr={"15%"} ml={"9%"}>
          <img
            src={athiCampus}
            alt="Athi Campus"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Flex>
        <Flex
          h={"49vh"}
          w={"45%"}
          mt={"6vh"}
          mr={"8%"}
          ml={"1%"}
          flexDirection={"column"}
        >
          <h1
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "black",
              marginBottom: "2%",
            }}
          >
            SEE OUR PROJECTS
          </h1>
          <p style={{ fontSize: 18, color: "black" }}>
            Take a look at some of our cool and innovative projects from our
            members!
          </p>
        </Flex>
      </Flex>
      <Flex bg={"black"} h={"120vh"} w={"100%"}>
        <Flex
          h={"70vh"}
          w={"45%"}
          mt={"20vh"}
          mr={"15%"}
          ml={"9%"}
          flexDirection={"column"}
        >
          <h1
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "white",
              marginBottom: "6%",
            }}
          >
            DITA EVENTS
          </h1>
          <img
            src={daystarICT}
            alt="Athi Campus"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Flex>
        <Flex h={"100vh"} w={"45%"} mt={"6vh"} mr={"8%"} ml={"1%"}>
          <p style={{ fontSize: 17, color: "white" }}>
            Discover the Vibrant Community of DITA: Daystar University's
            Resource Lab for Computer Science Enthusiasts
            <br />
            <br />
            Exciting Update | Must-Know
            <br />
            <br />
            Empowering DITA Members: why should you join dita?
            <br />
            <br />
            DITA (Daystar University's Resource Lab) is a bustling haven for
            computer science enthusiasts at Daystar University. It serves as a
            meeting ground for brilliant minds who gather to work, collaborate,
            and exchange ideas, pushing the boundaries of innovation and
            progress.
            <br />
            <br />
            Within the walls of DITA, a sense of intellectual camaraderie
            thrives as members engage in stimulating conversations and share
            their expertise. The lab fosters a culture of continuous learning
            and provides a platform for students to sharpen their skills and
            explore new frontiers in computer science.
            <br />
            <br />
            DITA is a hub of activity, hosting various events such as coding
            competitions, workshops, and seminars. Here, individuals with a
            shared passion for technology come together to inspire and challenge
            each other, propelling their knowledge and capabilities to new
            heights.
          </p>
        </Flex>
      </Flex>
      <Flex bg={"white"} h={"20vh"} w={"100%"}>
        <h1
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
            marginTop: "3%",
            marginLeft: "5%",
          }}
        >
          SERVICES WE OFFER
        </h1>
      </Flex>
      <Flex h={"90vh"} w={"100%"} flexDirection={"row"}>
        <Flex bg={"silver"} h={"80vh"} w={"100%"} mr={"3%"} ml={"5%"}>
          <a href="/hardware">
            <img
              src={hardware}
              alt="Athi Main"
              style={{ height: "40%", width: "100%", objectFit: "cover" }}
            />
            <h1
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
                marginTop: "3%",
                marginLeft: "5%",
              }}
            >
              Computer and Laptop Repairs
            </h1>
            <p style={{ fontSize: 18, color: "black", marginLeft: "4%" }}>
              Empowering devices, unleashing potential. Expert computer and
              laptop repairs for students and beyond. Trust us with your tech
              challenges. At dita your digital journey begins here
            </p>
            <hr
              style={{
                border: "1px solid black",
                width: "90%",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            />
            <p
              style={{
                fontSize: 18,
                color: "black",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            >
              Daystar University ・ DITA Resource lab ・ Athi-River ・
            </p>
          </a>
        </Flex>
        <Flex bg={"silver"} h={"80vh"} w={"100%"} mr={"3%"}>
          <a href="/software">
            <img
              src={software}
              alt="Athi Main"
              style={{ height: "40%", width: "100%", objectFit: "cover" }}
            />
            <h1
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
                marginTop: "3%",
                marginLeft: "5%",
              }}
            >
              Software updates and
              <br /> installation
            </h1>
            <p style={{ fontSize: 18, color: "black", marginLeft: "4%" }}>
              Stay current, stay secure. Seamless software updates and
              installation services for optimized performance. Unlock the latest
              features and protect your system.
            </p>
            <hr
              style={{
                border: "1px solid black",
                width: "90%",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            />
            <p
              style={{
                fontSize: 18,
                color: "black",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            >
              Daystar University ・ DITA Resource lab ・ Athi-River ・
            </p>
          </a>
        </Flex>
        <Flex bg={"silver"} h={"80vh"} w={"100%"} mr={"5%"}>
          <a href="/teaching">
            <img
              src={teaching}
              alt="Athi Main"
              style={{ height: "40%", width: "100%", objectFit: "cover" }}
            />
            <h1
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
                marginTop: "3%",
                marginLeft: "5%",
              }}
            >
              Teaching and Training for
              <br />
              Students
            </h1>
            <p style={{ fontSize: 18, color: "black", marginLeft: "4%" }}>
              Empowering students with the latest tech know-how. Learn software
              updates and installation from the experts. Stay ahead in the
              digital age with our student-focused teaching and training
              services
            </p>
            <hr
              style={{
                border: "1px solid black",
                width: "90%",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            />
            <p
              style={{
                fontSize: 18,
                color: "black",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            >
              Daystar University ・ DITA Resource lab ・ Athi-River ・
            </p>
          </a>
        </Flex>
      </Flex>
      <Flex bg={"black"} h={"20vh"} w={"100%"}>
        <h1
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: "3%",
            marginLeft: "5%",
          }}
        >
          OUR PROJECTS
        </h1>
      </Flex>
      <Flex bg={"black"} h={"90vh"} w={"100%"} flexDirection={"row"}>
        <Flex bg={"grey"} h={"85vh"} w={"100%"} mr={"3%"} ml={"5%"}>
          <a href="/chilltons project">
            <img
              src={chilltonsProject}
              alt="chilltons project"
              style={{ height: "40%", width: "100%", objectFit: "cover" }}
            />
            <h1
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "white",
                marginTop: "3%",
                marginLeft: "5%",
              }}
            >
              Chilltons restaurant website
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "white",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            >
              Chilltons restaurant website. Built with React, Tailwind CSS, and
              Nodejs.
            </p>
            <hr
              style={{
                border: "1px solid white",
                width: "90%",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            />
            <p
              style={{
                fontSize: 18,
                color: "white",
                marginLeft: "5%",
                marginTop: "4%",
                marginBottom: "5%",
              }}
            >
              https://dita-website.vercel.app/ ・ September 2021
            </p>
            <a
              href=""
              style={{
                fontSize: 18,
                color: "blue",
                marginLeft: "5%",
                display: "block",
              }}
            >
              View Github
            </a>
            <a
              href=""
              style={{
                marginTop: "2vh",
                fontSize: 18,
                color: "blue",
                marginLeft: "5%",
                display: "block",
              }}
            >
              View Project
            </a>
          </a>
        </Flex>
        <Flex bg={"grey"} h={"85vh"} w={"100%"} mr={"3%"}>
          <a href="/mytime table">
            <img
              src={examTimeTableProject}
              alt="examtimetable"
              style={{ height: "40%", width: "100%", objectFit: "cover" }}
            />
            <h1
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "white",
                marginTop: "3%",
                marginLeft: "5%",
              }}
            >
              Daystar exam time table app
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "white",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            >
              Daystar exam time table app. Built with React, Tailwind CSS and
              Nodejs.
            </p>
            <hr
              style={{
                border: "1px solid white",
                width: "90%",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            />
            <p
              style={{
                fontSize: 18,
                color: "white",
                marginLeft: "5%",
                marginTop: "4%",
                marginBottom: "5%",
              }}
            >
              https://exam.dita.co.ke/ ・ September 2021
            </p>
            <a
              href=""
              style={{
                fontSize: 18,
                color: "blue",
                marginLeft: "5%",
                display: "block",
              }}
            >
              View Github
            </a>
            <a
              href=""
              style={{
                marginTop: "2vh",
                fontSize: 18,
                color: "blue",
                marginLeft: "5%",
                display: "block",
              }}
            >
              View Project
            </a>
          </a>
        </Flex>
        <Flex bg={"grey"} h={"85vh"} w={"100%"} mr={"5%"}>
          <a href="/swapSoko project">
            <img
              src={swapSokoProject}
              alt="chilltons project"
              style={{ height: "40%", width: "100%", objectFit: "cover" }}
            />
            <h1
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "white",
                marginTop: "3%",
                marginLeft: "5%",
              }}
            >
              Swap Soko
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "white",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            >
              E-commerce website. Built with React, Tailwind CSS and Nodejs.
            </p>
            <hr
              style={{
                border: "1px solid white",
                width: "90%",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            />
            <p
              style={{
                fontSize: 18,
                color: "white",
                marginLeft: "5%",
                marginTop: "4%",
                marginBottom: "5%",
              }}
            >
              https://dita-website.vercel.app/ ・ September 2021
            </p>
            <a
              href=""
              style={{
                fontSize: 18,
                color: "blue",
                marginLeft: "5%",
                display: "block",
              }}
            >
              View Github
            </a>
            <a
              href=""
              style={{
                marginTop: "2vh",
                fontSize: 18,
                color: "blue",
                marginLeft: "5%",
                display: "block",
              }}
            >
              View Project
            </a>
          </a>
        </Flex>
      </Flex>
      
    </Layout>
  );
}

export default Home;
