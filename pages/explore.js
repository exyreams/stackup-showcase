import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

import { banner } from "../assets";
import { Card, ScrollToTop } from "../components";

const Explore = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div
          className="bg-cover"
          style={{ backgroundImage: `url(${banner.src})` }}
        >
          <div className="mx-5 flex flex-col pb-16 pt-12 text-white lg:mx-28 md:mx-10 sm:mx-8">
            <p className="text-lg font-semibold text-white/70">Showcase</p>
            <h1 className="mt-2 text-5xl font-semibold md:text-6xl sm:text-5xl">
              Projects
            </h1>
            <p className="text-md mt-6 max-w-xl text-white/85 md:text-lg sm:text-base">
              Showcase and share your projects, receive feedback, help, or
              insights from other users in the community as you expand your
              developer portfolio and improve your skills.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-36 py-8">
        <h2 className="mb-4 text-xl font-semibold text-black/70 dark:text-white/70">
          Ongoing Featured Projects
        </h2>
        <div className="mb-8 flex flex-row justify-between rounded-lg bg-stackup-gray p-5 dark:bg-stackup-gray/10">
          <p className="flex text-sm font-light text-black dark:text-white">
            <BsInfoCircle className="mr-2 cursor-pointer text-xl" />
            All times are shown in&nbsp;
            <b className="text-md font-semibold">Asia/Katmandu (GMT +05:45)</b>
          </p>

          <p className="text-sm font-light text-black underline hover:cursor-pointer dark:text-white">
            Update your timezone
          </p>
        </div>
        <ul className="gird mx-auto flex grid-cols-2 flex-row flex-wrap items-center justify-between gap-12">
          <li>
            <div className="rounded-md bg-[url(https://img.freepik.com/free-vector/vector-abstract-3d-room-with-luxury-cylinder-stand-podium_8829-2843.jpg?t=st=1721495095~exp=1721498695~hmac=e7107d2ea6f3aab9e84b29fa72f15df002729cf960d98476244c8a9c87dd08b4&w=360)] bg-cover bg-center">
              <Card
                username="exyreams"
                techstack="React, Tailwind"
                projectname="Stackup-Showcase"
                description="A collaborative platform where users can showcase their projects, receive feedback, and seek help from the community to enhance their work."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://img.freepik.com/free-vector/postponed-concept-illustrated_23-2148500731.jpg?t=st=1721490799~exp=1721494399~hmac=41be28daf3a7ee94bba2f81b8b29acf4f16dfbdcd05d9f1f653a539cbc555449&w=740)] bg-cover bg-center">
              <Card
                username="exyness"
                techstack="React, Node.js, MongoDB"
                projectname="TaskMaster"
                description="A full-stack task management application with real-time updates and collaborative features."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://cdn.prod.website-files.com/66471164df475246e95ef459/66471164df475246e95ef579_crypto-wallets.png)] bg-cover ">
              <Card
                username="kronos"
                techstack="Solidity, Web3.js, Ethereum"
                projectname="CryptoWallet"
                description="A secure and user-friendly cryptocurrency wallet for managing and transacting digital assets."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://t3.ftcdn.net/jpg/06/55/48/22/360_F_655482254_1k1yrQACCvforJsBqcLgQgJAuoPSzg3X.jpg)] bg-cover bg-center">
              <Card
                username="flynk"
                techstack="Next.js, GraphQL, PostgreSQL"
                projectname="ShopEase"
                description="An e-commerce website with advanced search and recommendation features for a seamless shopping experience."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://cdn.dribbble.com/userupload/5354762/file/original-b037bbe3dc40560e83a3ffddc57b7b32.png?resize=400x0)] bg-center bg-cover">
              <Card
                username="zorvi"
                techstack="Vue.js, Firebase, TensorFlow.js"
                projectname="SmartSnap"
                description="An AI-powered photo editing app that suggests enhancements and applies filters using machine learning."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://img.freepik.com/free-vector/fitness-mobile-app-infographic-template_23-2148251135.jpg?t=st=1721492247~exp=1721495847~hmac=4d4d43a1cfc5308b23c57615950cc2d8608e21a6375af2cade8835bcb01d827b&w=740)] bg-contain bg-center">
              <Card
                username="bilph"
                techstack="React, Node.js, MongoDB"
                projectname="Project Aurora"
                description="A web application for tracking and visualizing personal fitness goals with detailed analytics."
              />
            </div>
          </li>
        </ul>

        <hr className="border-1 mt-12 border-black/15 dark:border-stackup-gray/10" />

        <div className="mb-8 flex flex-row items-center justify-between">
          <p className="mt-8 text-2xl font-semibold text-black/70 dark:text-white/70">
            Old Projects
          </p>
        </div>
        <ul className="gird mx-auto flex grid-cols-2 flex-row flex-wrap items-center justify-between gap-12">
          <li>
            <div className="rounded-md bg-[url(https://img.freepik.com/free-vector/gradient-ui-ux-elements_23-2149057417.jpg?t=st=1721488276~exp=1721491876~hmac=f9acf3753620884488d6053ee2a4dd20f7b9bcc2aab0dfdc4829eed7d3683cc6&w=996)] bg-cover bg-center">
              <Card
                username="debugdiva"
                techstack="React, Node.js, MongoDB"
                projectname="BudgetBuddy"
                description="A personal finance management app to help users track expenses, set budgets, and achieve financial goals."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://img.freepik.com/free-vector/flat-design-nft-concept-illustration_23-2148955645.jpg?t=st=1721488339~exp=1721491939~hmac=81a2aaa430ec1603a45dea264f6b9fd37cc67522073744cb0110b06836f8499b&w=740)] bg-cover bg-center">
              <Card
                username="bytemeister"
                techstack="Solidity, Web3.js, Ethereum"
                projectname="Decentralized Exchange"
                description="A secure and user-friendly decentralized exchange for trading digital assets."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://img.freepik.com/free-photo/3d-render-techno-background-with-male-figure-coding-design_1048-13266.jpg?t=st=1721488415~exp=1721492015~hmac=bf04989284473ac3ac0e6cfc9c483978da0851a91573f9d5031bf7c6f1512d2e&w=740)] bg-cover ">
              <Card
                username="bugslayer"
                techstack="Python, TensorFlow, Keras"
                projectname="Sentiment Analysis Bot"
                description="A chatbot that uses machine learning to analyze and respond to user sentiment in real-time."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://www.shutterstock.com/image-vector/learn-online-book-digital-futuristic-600nw-2182663111.jpg)] bg-cover bg-center">
              <Card
                username="datadragon"
                techstack="Vue.js, Firebase, Tailwind CSS"
                projectname="EduPro"
                description="An e-learning platform offering interactive courses, quizzes, and community support for learners."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://img.freepik.com/free-vector/transportation-cargo-merchandise-logistic-cartoon_18591-52474.jpg?t=st=1721487996~exp=1721491596~hmac=a503ff76a21300051d585c2212a2062ab12b37ad38566ebc9636893fcd799495&w=740)] bg-cover bg-center">
              <Card
                username="codebrewcafe"
                techstack="React, Truffle, IPFS"
                projectname="Supply Chain Tracker"
                description="A blockchain-based supply chain management system to track the movement of goods and ensure transparency."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg?t=st=1721487527~exp=1721491127~hmac=5a5edba4924b64b9669b856d2bfb5056acfb05bf3d79a044dca6f5673ad3e400&w=996)] bg-cover bg-center">
              <Card
                username="bitflipboss"
                techstack="Figma, Adobe XD, Sketch"
                projectname="UI/UX Design System"
                description="A comprehensive design system that includes components, templates, and guidelines for creating consistent and scalable user interfaces."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://content.cloudthat.com/resources/wp-content/uploads/2023/03/DevOps_Future.png)] bg-cover bg-center">
              <Card
                username="devopsdinosaur"
                techstack="Docker, Kubernetes, Jenkins"
                projectname="(CI/CD) Pipeline Manager"
                description="A CI/CD pipeline that automates the build, test, and deployment of applications to ensure fast and reliable software delivery."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://w.wallhaven.cc/full/md/wallhaven-mdyjm1.png)] bg-cover bg-center">
              <Card
                username="syntaxsheriff"
                techstack="Python, Pandas, Matplotlib"
                projectname="Customer Churn Prediction Model"
                description="A machine learning model that predicts customer churn based on historical data to help businesses retain customers and improve customer satisfaction."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://img.freepik.com/free-photo/person-holding-mobile-phone-with-high-tech-application-smart-house-features-controlling-lights-wi_482257-2739.jpg?t=st=1721487355~exp=1721490955~hmac=1dd75363480bc2ee2d4ea335799fccfe7f415f5e5baf0d6284313c34aaa86728&w=1060)] bg-cover bg-center">
              <Card
                username="routerrebel"
                techstack="Arduino, Raspberry Pi, MQTT"
                projectname="Smart Home Automation System"
                description="A smart home automation system that allows users to control and monitor their home devices remotely using voice commands and a mobile app."
              />
            </div>
          </li>
        </ul>
        <div className="mt-10 flex cursor-pointer items-center justify-center">
          <p className="text-md font-medium text-black dark:text-white">
            Load More
          </p>
          <FaChevronDown className=" ml-2 text-black dark:text-white" />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Explore;
